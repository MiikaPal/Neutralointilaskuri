// Minimal standalone benchmark for Suolahappo vs Natriumhydroksidi calculations.

const aineet = [
    {
        tyyppi: "happo",
        nimi: ["Suolahappo", "Kloorivetyhappo"],
        YK: "1789",
        kaava: "HCl",
        anioni: "Cl",
        H: 1, M: 36.46,
        tiheys: function(pitoisuus) {
            return 0.99785 + 0.0050063 * pitoisuus
                + 5.9451 * Math.pow(10, -7) * Math.pow(pitoisuus, 2);
        }
    },
    {
        tyyppi: "emäs",
        nimi: ["Natriumhydroksidi", "Lipeä", "Natriumlipeä"],
        YK: ["1823", "1824"],
        kaava: "NaOH",
        kationi: "Na",
        OH: 1, M: 39.998,
        tiheys: function(pitoisuus) {
            return 0.9982 + 0.011318 * (pitoisuus);
        }
    }
];

// helpers (mirror your file behavior)
function laskeTiheys(obj, pitoisuus) {
    if (typeof obj.tiheys === "function") return obj.tiheys(pitoisuus.arvo ?? pitoisuus);
    return obj.tiheys;
}
function laskePuhdasTiheys(obj) {
    if (typeof obj.tiheys === "function") return obj.tiheys(100);
    return obj.tiheys;
}

// replicate core calculation (no prompts, no console.log inside hot path)
function computeScenario(tObj, tMäärä, tPitoisuus, nObj, nPitoisuus) {
    // tLuku and nLuku exist for these two substances
    const tLuku = tObj.H || tObj.OH;
    const nLuku = nObj.H || nObj.OH;

    let tAinemäärä;
    // follow same branches as your file, but simplified for programmatic inputs
    if (tPitoisuus.arvo === 100) {
            if (tPitoisuus.yksikkö === "m") {
                tAinemäärä = (tMäärä.arvo * 1000) / tObj.M;
                return tAinemäärä;
            } else {
                const tTiheys = laskePuhdasTiheys(tObj);
                const tMassa = tMäärä.arvo * tTiheys;
                tAinemäärä = (tMassa * 1000) / tObj.M;
                return tAinemäärä;
            }
        } else if (tPitoisuus.arvo < 100) {
            if (tMäärä.yksikkö === "L") {
                if (tPitoisuus.yksikkö === "v") {
                    const tTodellinenTilavuus = tMäärä.arvo * (tPitoisuus.arvo / 100);
                    const tTiheys = laskePuhdasTiheys(tObj);
                    const tMassa = tTodellinenTilavuus * tTiheys;
                    tAinemäärä = (tMassa * 1000) / tObj.M;
                    return tAinemäärä;
                } else {
                    const tTodellinenTilavuus = tMäärä.arvo * (tPitoisuus.arvo / 100);
                    const tTiheys = laskeTiheys(tObj, tPitoisuus);
                    const tMassa = tTodellinenTilavuus * tTiheys;
                    tAinemäärä = (tMassa * 1000) / tObj.M;
                    return tAinemäärä;
                }
            } else {
                if (tPitoisuus.yksikkö === "m") {
                    const tTodellinenMassa = tMäärä.arvo * (tPitoisuus.arvo / 100);
                    tAinemäärä = (tTodellinenMassa * 1000) / tObj.M;
                    return tAinemäärä;
                } else {
                    const tKokonaisTiheys = laskePuhdasTiheys(tObj);
                    const tTodellinenTilavuus = (tMäärä.arvo / tKokonaisTiheys) * (tPitoisuus.arvo / 100);
                    const tTiheys = laskePuhdasTiheys(tObj);
                    const tMassa = tTodellinenTilavuus * tTiheys;
                    tAinemäärä = (tMassa * 1000) / tObj.M;
                    return tAinemäärä;
                }
            }
        } else {
        throw new Error("Unsupported branch");
    }

    // neutralization math (mirror your file)
    const neutralointiKerroin = (tLuku / nLuku);
    const nAinemäärä = tAinemäärä * neutralointiKerroin;

    // compute neutraloivan massa and total mass/volume similar to your code
    const nMassa = (nAinemäärä * nObj.M) / 1000;

    let nKokonaisMassa, nKokonaisTilavuus;
    if (nPitoisuus.arvo === 100) {
        nKokonaisMassa = nMassa;
        nKokonaisTilavuus = nMassa / laskePuhdasTiheys(nObj);
    } else if (nPitoisuus.yksikkö === "v") {
        const nTiheys = laskePuhdasTiheys(nObj);
        const nTilavuus = nMassa / nTiheys;
        nKokonaisTilavuus = nTilavuus / (nPitoisuus.arvo / 100);
        nKokonaisMassa = nKokonaisTilavuus * laskePuhdasTiheys(nObj);
    } else if (nPitoisuus.yksikkö === "m") {
        nKokonaisMassa = nMassa / (nPitoisuus.arvo / 100);
        nKokonaisTilavuus = nKokonaisMassa / laskePuhdasTiheys(nObj);
    } else {
        throw new Error("Unsupported nPitoisuus branch");
    }

    return {
        tAinemäärä, nAinemäärä, nMassa, nKokonaisMassa, nKokonaisTilavuus
    };
}

// build test sets (reasonable finite grid)
const volumes = [0.1, 1, 10, 100]; // L
const masses = [0.1, 1, 10, 100]; // kg
const concValues = [100, 70, 32, 20, 5, 1]; // %
const nConcValues = [100, 50, 25, 10]; // neutralizer concentrations to test

const tObj = aineet[0];
const nObj = aineet[1];

const scenarios = [];
volumes.forEach(v => scenarios.push({ arvo: v, yksikkö: "L" }));
masses.forEach(m => scenarios.push({ arvo: m, yksikkö: "kg" }));

const tPitoisuusSet = [];
concValues.forEach(p => { tPitoisuusSet.push({ arvo: p, yksikkö: "v" }); tPitoisuusSet.push({ arvo: p, yksikkö: "m" }); });
const nPitoisuusSet = [];
nConcValues.forEach(p => { nPitoisuusSet.push({ arvo: p, yksikkö: "v" }); nPitoisuusSet.push({ arvo: p, yksikkö: "m" }); });
nPitoisuusSet.push({ arvo: 100, yksikkö: "m" }); // ensure pure case tested

// run
const results = [];
const errors = [];
let totalMs = 0;
let minMs = Infinity;
let maxMs = 0;
let count = 0;

for (const tM of scenarios) {
    for (const tP of tPitoisuusSet) {
        for (const nP of nPitoisuusSet) {
            count++;
            const t0 = process.hrtime.bigint();
            try {
                const out = computeScenario(tObj, tM, tP, nObj, nP);
                const t1 = process.hrtime.bigint();
                const ms = Number(t1 - t0) / 1e6;
                totalMs += ms;
                if (ms < minMs) minMs = ms;
                if (ms > maxMs) maxMs = ms;
                results.push({ tM, tP, nP, ms });
            } catch (err) {
                const t1 = process.hrtime.bigint();
                const ms = Number(t1 - t0) / 1e6;
                errors.push({ tM, tP, nP, error: err.message, ms });
            }
        }
    }
}

// summary
console.log("Scenarios tested:", count);
console.log("Errors:", errors.length);
if (errors.length) {
    console.log("First error example:", errors[0]);
}
console.log("Total time (ms):", totalMs.toFixed(3));
console.log("Avg per scenario (ms):", (totalMs / results.length).toFixed(6));
console.log("Min (ms):", minMs.toFixed(6), "Max (ms):", maxMs.toFixed(6));
console.log("Samples (first 5):", results.slice(0,5));