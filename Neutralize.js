const aineet = [
    {
        tyyppi: "happo",
        aNimi: "Suolahappo",
        yNimi: "Kloorivetyhappo",
        kaava: "HCl", anioni: "Cl",
        H: 1, M: 36.46,
        tiheys: function(pitoisuus) {
            return 0.99785 + 0.0050063 * pitoisuus
            + 5.9451 * Math.pow(10, -7) * Math.pow(pitoisuus, 2);
            }
    },
    {
        tyyppi: "happo",
        aNimi: "Vetyfluoridi", 
        yNimi: "Fluorivetyhappo", 
        kaava: "HF", anioni: "F", 
        H: 1, M: 20.01, 
        tiheys: function(pitoisuus) {
            return 0.98972 + 0.0063245 * pitoisuus
            - 1.8224 * Math.pow(10, -4) * Math.pow(pitoisuus, 2)
            + 4.0372 * Math.pow(10, -6) * Math.pow(pitoisuus, 3)
            - 2.8958 * Math.pow(10, -8) * Math.pow(pitoisuus, 4);
            }
    },
    {
        tyyppi: "happo", 
        aNimi: "Typpihappo", 
        yNimi: "Salpietarihappo", 
        kaava: "HNO3", anioni: "NO3", 
        H: 1, M: 63.01
    },
    {
        tyyppi: "happo", 
        aNimi: "Rikkihappo", 
        yNimi: "Vihtrilliöljy", 
        kaava: "H2SO4", 
        anioni: "SO4", 
        H: 2, M: 98.08
    },
    {
        tyyppi: "happo", 
        aNimi: "Kloorihappo", 
        yNimi: "Kloorivety", 
        kaava: "HClO3", 
        anioni: "ClO3", 
        H: 1, M: 84.46
    },
     {
        tyyppi: "happo", 
        aNimi: "Etikkahappo",
        yNimi: "Karbokysyylihappo", 
        kaava: "CH3COOH", 
        anioni: "CH3COO", 
        H: 1, M: 60.05
    },
    {
        tyyppi: "happo", 
        aNimi: "Muurahaishappo", 
        yNimi: "Metaanihappo", 
        kaava: "HCOOH", 
        anioni: "HCOO", 
        H: 1, M: 46.03
    },
    {
        tyyppi: "happo", 
        aNimi: "Vetyjodidi", 
        yNimi: "Vetyjodihappo", 
        kaava: "HI", 
        anioni: "I", 
        H: 1, M: 127.91
    },
    {
        tyyppi: "happo", 
        aNimi: "Perkloorihappo", 
        kaava: "HClO4", 
        anioni: "ClO4", 
        H: 1, M: 100.46
    },
    {
        tyyppi: "happo", 
        aNimi: "Jodihappo", 
        kaava: "HIO3", 
        anioni: "IO3", 
        H: 1, M: 175.91
    },
    {
        tyyppi: "happo", 
        aNimi: "Dikloorietikkahappo", 
        kaava: "CHCl2COOH", 
        anioni: "CHCl2COO", 
        H: 1, M: 128.94
    },
    {
        tyyppi: "happo", 
        aNimi: "Trivetyfosfaatti", 
        yNimi: "Fosforihappo", 
        kaava: "H3PO4", 
        anioni: "PO4", 
        H: 3, M: 97.99
    },
    {
        tyyppi: "emäs", 
        aNimi: "Natriumhydroksidi", 
        yNimi: "Lipeä", 
        kaava: "NaOH", 
        kationi: "Na", 
        OH: 1, M: 39.998, 
        tiheys: function(pitoisuus) {
            return 0.9982 + 0.011318 * (pitoisuus);
        }
    },
    {
        tyyppi: "emäs", 
        aNimi: "Kalsiumhydroksidi", 
        yNimi: "Kalkkimaito", 
        kaava: "Ca(OH)2", 
        kationi: "Ca", 
        OH: 2, M: 74.09
    },
    {
        tyyppi: "emäs", 
        aNimi: "Kaliumhydroksidi",
         yNimi: "Kaliumlipeä", 
         kaava: "KOH", 
         kationi: "K", 
         OH: 1, M: 56.11
    },
    {
        tyyppi: "emäs", 
        aNimi: "Kalsiumkarbonaatti", 
        yNimi: "Kalkki", 
        kaava: "CaCO3", 
        kationi: "Ca", 
        OH: 2, M: 100.09, 
        tiheys: 2.71
    },
];
// Lisää loput hapot ja emäkset


var tAine = window.prompt("Anna torjuttavan aineen nimi:");
if (tAine === null) {
    throw new Error("Käyttäjä peruutti syötteen.");
}
var nimi = tAine.trim().toLowerCase();
var tObj = aineet.find(function(item) {
    return [item.aNimi, item.yNimi, item.kaava].some(function(v) { return v && v.toLowerCase() === nimi; });
});
if (!tObj) {
    alert("Ainetta '" + tAine + "' ei löytynyt.");
    throw new Error("Ainetta ei löytynyt: " + tAine);
}
var tLuku = tObj.H || tObj.OH;

// Käyttäjän syöttämän torjuttava aine ja ominaisuudet


console.log(
    "Aineen " + tAine + " kaava on: " + tObj.kaava

);
console.log(
    "Aineen moolimassa on: " + tObj.M + " g/mol" + " ja sen " + (tObj.tyyppi === "happo" ? "anionin" : "kationin") + " varaus on: " + (tObj.tyyppi === "happo" ? "+" : "-") + tLuku
);

// Kertoo käyttäjän syöttämän torjuttavan aineen ja sen ominaisuudet


var tMäärä = null;
while (true) {
    var raw = window.prompt("Anna torjuttavan aineen määrä (esim. 1.5 L tai 2 kg). Kirjoita yksikkö L tai kg:");
    if (raw === null) {
        throw new Error("Käyttäjä peruutti syötteen")}
    raw = raw.trim();
    var m = raw.match(/^([\d.,]+)\s*(L|l|KG|kg|Kg|kG)?$/);
    if (!m) { alert("Virheellinen syöte. Käytä muotoa '1.5 L' tai '2 kg'."); continue; }
    var num = parseFloat(m[1].replace(',', '.'));
    if (!isFinite(num) || num <= 0) { alert("Anna positiivinen numero."); continue; }
    var unit = (m[2] || "L").toLowerCase();
    unit = unit === "l" ? "L" : "kg";
    tMäärä = { arvo: num, yksikkö: unit };
    break;
}
// Käyttäjän syöttämän torjuttavan aineen massa tai tilavuus


var tPitoisuus = window.prompt("Anna torjuttavan aineen pitoisuus prosenteina (0-100)");
    if (tPitoisuus === null) {
        throw new Error("Käyttäjä peruutti syötteen.");
    }
tPitoisuus = tPitoisuus.replace(',', '.');
tPitoisuus = parseFloat(tPitoisuus);
    if (!isFinite(tPitoisuus) || tPitoisuus <= 0 || tPitoisuus > 100){ 
        alert("Anna pitoisuus prosentteina (0-100).");
        throw new Error("Virheellinen pitoisuus: " + tPitoisuus);
    }

function laskeTiheys(tObj, tPitoisuus) {
    if (typeof tObj.tiheys === "function") return tObj.tiheys(tPitoisuus);
    else return tObj.tiheys;
    } 

var tTiheys = laskeTiheys(tObj, tPitoisuus);
var tMoolisuus = (
    ((1000 * tTiheys) * (tPitoisuus / 100)) / tObj.M
);
var tTodellinenMäärä = (
    tPitoisuus * tMäärä.arvo / 100
);
var tAinemäärä = (
    tMäärä.yksikkö === "L" ? (tMäärä.arvo * tMoolisuus) : (tTodellinenMäärä * 1000 / tObj.M)
);
// Käyttäjän syöttämän torjuttavan aineen pitoisuus, tiheys, moolisuus, aineen määrä kiloina tai litroina ja ainemäärä mooleina


console.log(
    "Torjuttavan aineen " + (tMäärä.yksikkö === "L" ? "tilavuus" : "massa") + " on: " + tMäärä.arvo + " " + tMäärä.yksikkö + " ja " + (tPitoisuus === 100 ? "aine on puhdasta" : "pitoisuus: " + tPitoisuus + " %")
);
console.log(
    "Aineen tiheys on: " + tTiheys + " g/ml" + " ja " + "sen moolisuus on: " + tMoolisuus + " mol/L"
);
console.log(
    "Torjuttavaa ainetta on: " + tAinemäärä + " mol"
);
// Käyttäjän syöttämän neutraloitavan aineen todellinen määrä (kilogrammoina tai litroina) ja ainemäärä moolina




















var nAine = window.prompt("Anna neutraloivan aineen nimi:");
if (nAine === null) {
    throw new Error("Käyttäjä peruutti syötteen.");
}
var nimi = nAine.trim().toLowerCase();
var nObj = aineet.find(function(item) {
    return [item.aNimi, item.yNimi, item.kaava].some(function(v) { return v && v.toLowerCase() === nimi; });
});
if (!nObj) {
    alert("Ainetta '" + nAine + "' ei löytynyt.");
    throw new Error("Ainetta ei löytynyt: " + nAine);
}
var nLuku = nObj.H || nObj.OH;

// Käyttäjän syöttämä neutraloivan aineen ominaisuudet


console.log(
    "Aineen " + nAine + " kaava on: " + nObj.kaava
);
console.log(
    "Aineen moolimassa on: " + nObj.M + " g/mol" + " ja sen " + (nObj.tyyppi === "happo" ? "anionin" : "kationin") + " varaus on: " + (nObj.tyyppi === "happo" ? "+" : "-") + nLuku
);
// Kertoo käyttäjän syöttämän neutraloivan aineen ja sen ominaisuudet


if (tObj.tyyppi == nObj.tyyppi) {
    alert("Torjuttava aine ja neutraloiva aine eivät voi olla samaa tyyppiä (kumpikin happo tai kumpikin emäs).");
    throw new Error("Sama tyyppi: " + tObj.tyyppi);
}
// Tarkistaa onko torjuttava aine ja neutraloiva aine eri tyyppiä


var nPitoisuus = window.prompt("Anna neutraloitavan aineen pitoisuus prosenteina (0-100)");
    if (nPitoisuus === null) {
        throw new Error("Käyttäjä peruutti syötteen.");
    }
nPitoisuus = nPitoisuus.replace(',', '.');
nPitoisuus = parseFloat(nPitoisuus);
    if (!isFinite(nPitoisuus) || nPitoisuus <= 0 || nPitoisuus > 100){ 
        alert("Anna pitoisuus massaprosentteina (0-100).");
        throw new Error("Virheellinen pitoisuus: " + nPitoisuus);
    }

function laskeTiheys(nObj, nPitoisuus) {
    if (typeof nObj.tiheys === "function") return nObj.tiheys(nPitoisuus);
    else return nObj.tiheys;
    } 
var nTiheys = laskeTiheys(
    nObj, nPitoisuus
);
var nMoolisuus = (
    1000 * nTiheys / nObj.M
);

// Käyttäjän syöttämän neutraloivan aineen pitoisuus, tiheys ja moolisuus


console.log(
    nPitoisuus === 100 ? "Neutraloiva aine on puhdasta" : "Neutraloivan aineen pitoisuus on: " + nPitoisuus + " %"
);
console.log(
    "Aineen tiheys on: " + nTiheys + " g/ml" + " ja " + "sen moolisuus on: " + nMoolisuus + " mol/L"
);

// Kertoo neutralioivan aineen pitoisuuden, tiheyden ja moolisuuden


var neutralointiKerroin = (
    tLuku / nLuku
);
var nAinemäärä = (
    neutralointiKerroin * tAinemäärä
);
var nTodellinenMäärä = (
    nAinemäärä * nObj.M / 1000
);
var nMassa = (
    nTodellinenMäärä / (nPitoisuus / 100)
);
var nTilavuus = (
    nMassa / nTiheys
);
// Laskettu neutraloivan aineen massa tai tilavuus











console.log("Neutraloivaa ainetta tarvitaan " + nAinemäärä + " moolia, eli " + nMassa + " kg  tai " + nTilavuus + " L");