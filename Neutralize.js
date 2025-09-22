const aineet = [
    {
        tyyppi: "happo",
        nimi: ["Suolahappo", "Kloorivetyhappo"],
        YK: "1789",
        kaava: "HCl", 
        H: 1, M: 36.46,
        tiheys: function(pitoisuus) {
            return 0.99785 + 0.0050063 * pitoisuus
                + 5.9451 * Math.pow(10, -7) * Math.pow(pitoisuus, 2);
            }
    },
    {
        tyyppi: "happo",
        nimi: ["Vetyfluoridi", "Fluorivetyhappo"],
        YK: "1790",
        kaava: "HF",
        anioni: "F", 
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
        nimi: ["Typpihappo", "Salpietarihappo"],
        YK: ["2031", "2032"],
        kaava: "HNO3", 
        anioni: "NO3", 
        H: 1, M: 63.01,
        tiheys: 1.5129
    },
    {
        tyyppi: "happo", 
        nimi: ["Rikkihappo", "Vihtrilliöljy"],
        YK: ["1830", "1832", "2796"],
        kaava: "H2SO4",
        anioni: "SO4",
        H: 2, M: 98.08
    },
    {
        tyyppi: "happo",
        nimi: ["Etikkahappo", "Karbokysyylihappo"],
        YK: ["2789", "2790"],
        kaava: "CH3COOH",
        anioni: "CH3COO",
        H: 1, M: 60.05
    },
    {
        tyyppi: "happo",
        nimi: ["Muurahaishappo", "Metaanihappo"],
        YK: ["1799", "3412"],
        kaava: "HCOOH",
        anioni: "HCOO",
        H: 1, M: 46.03
    },
    {
        tyyppi: "happo",
        nimi: ["Vetyjodidi", "Vetyjodihappo"],
        YK: "2197",
        kaava: "HI",
        anioni: "I",
        H: 1, M: 127.91
    },
    {
        tyyppi: "happo",
        nimi: ["Perkloorihappo"],
        YK: ["1802", "1873"],
        kaava: "HClO4",
        anioni: "ClO4",
        H: 1, M: 100.46
    },
    {
        tyyppi: "happo",
        nimi: ["Dikloorietikkahappo"],
        YK: "1764",
        kaava: "CHCl2COOH",
        anioni: "CHCl2COO",
        H: 1, M: 128.94
    },
    {
        tyyppi: "happo",
        nimi: ["Trivetyfosfaatti", "Fosforihappo"],
        YK: ["1805", "3453"],
        kaava: "H3PO4",
        anioni: "PO4",
        H: 3, M: 97.99
    },
    {
        tyyppi: "emäs",
        olomuoto: "kiinteä",
        nimi: ["Natriumhydroksidi", "Lipeä", "Natriumlipeä"],
        YK: ["1823", "1824"],
        kaava: "NaOH",
        kationi: "Na",
        OH: 1, M: 39.998, 
        tiheys: function(pitoisuus) {
            return 0.9982 + 0.011318 * (pitoisuus);
        }
    },
    {
        tyyppi: "emäs",
        nimi: ["Kalsiumhydroksidi", "Kalsiumvesi", "Kalkkimaito", "Kalsiumdihydroksidi"],
        kaava: "Ca(OH)2",
        kationi: "Ca",
        OH: 2, M: 74.09
    },
    {
        tyyppi: "emäs",
        nimi: ["Kaliumhydroksidi", "Kaliumlipeä"],
        YK: ["1813", "1814"],
        kaava: "KOH",
        kationi: "K",
        OH: 1, M: 56.11
    },
    {
        tyyppi: "emäs",
        nimi: "Kalsiumkarbonaatti",
        kaava: "CaCO3",
        kationi: "Ca",
        OH: 2, M: 100.09,
        tiheys: 2.71
    },
];
// Lisää loput hapot ja emäkset


var tAine = window.prompt("Anna torjuttavan aineen nimi, kaava tai YK-numero:");
if (tAine === null) {
    throw new Error("Käyttäjä peruutti syötteen.");
}
var tNimi = String(tAine).trim().toLowerCase();
var tObj = aineet.find(function(item) {
    var candidates = [item.nimi, item.kaava, item.YK].filter(x => x != null);
    return candidates.some(function(v) {
        if (Array.isArray(v)) {
            return v.some(el => String(el).trim().toLowerCase() === tNimi);
        }
        return String(v).trim().toLowerCase() === tNimi;
    });
});
if (!tObj) {
    alert("Ainetta '" + tAine + "' ei löytynyt.");
    throw new Error("Ainetta ei löytynyt: " + tAine);
}
var tLuku = tObj.H || tObj.OH;

// Käyttäjän syöttämän torjuttava aine ja ominaisuudet


console.log(
    "Aineen " + (typeof tObj.nimi === "string" ? tObj.nimi : tObj.nimi.join(", ")) + " kaava on: " + tObj.kaava + (tObj.YK === null || tObj.YK === undefined ? ". Aineella ei ole YK-numeroa." : " ja sen YK-numero on: " + (typeof tObj.YK === "string" ? tObj.YK : tObj.YK.join(", ")))
);
console.log(
    "Aineen moolimassa on: " + tObj.M + " g/mol" + " ja sen " + (tObj.tyyppi === "happo" ? "anionin" : "kationin") + " varaus on: " + (tObj.tyyppi === "happo" ? "+" : "-") + tLuku
);
// Tulostaa käyttäjän syöttämän torjuttavan aineen ja sen ominaisuudet


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
    if (unit !== "l" && unit !== "kg") { alert("Yksikkö voi olla vain 'L' tai 'kg'."); continue; }
    unit = unit === "l" ? "L" : "kg";
    tMäärä = { arvo: num, yksikkö: unit };
    break;
};
// Käyttäjän syöttämän torjuttavan aineen massa tai tilavuus

console.log(
    "Torjuttavaa ainetta on " + tMäärä.arvo + " " + tMäärä.yksikkö + "."
);

var tPitoisuus = null;
while (true) {
    var raw = window.prompt("Anna torjuttavan aineen pitoisuus prosenteina (0-100) ja lisää perään 'm' jos aine on massaprosenttinen (esim. 32 m) tai 'v' jos tilavuusprosenttinen (esim. 70 v). Oletuksena on massaprosentti.");
    if (raw === null) {
        throw new Error("Käyttäjä peruutti syötteen")}
    raw = raw.trim();
    var m = raw.match(/^([\d.,]+)\s*(m|M|v|V)?$/);
    if (!m) { alert("Virheellinen syöte. Käytä muotoa '32 m' tai '70 v'."); continue; }
    var num = parseFloat(m[1].replace(',', '.'));
    if (!isFinite(num) || num <= 0 || num > 100) { alert("Anna pitoisuus prosentteina (0-100)."); continue; }
    var unit = (m[2] || "m").toLowerCase();
    if (unit !== "m" && unit !== "v") { alert("Yksikkö voi olla vain 'm' tai 'v'."); continue; }
    unit = unit === "m" ? "m" : "v";
    tPitoisuus = { arvo: num, yksikkö: unit };
    break;
};
// Käyttäjän syöttämän torjuttavan aineen pitoisuus ja pitoisuuden yksikkö

console.log(
    tPitoisuus.arvo === 100 ? "Torjuttava aine on puhdasta ainetta." : "Torjuttavan aineen pitoisuus on: " + tPitoisuus.arvo + (tPitoisuus.yksikkö === "m" ? " massa%" : " vol%")
);
// Tulostaa käyttäjän syöttämän torjuttavan aineen pitoisuuden ja pitoisuuden yksikön

if (tPitoisuus.arvo === 100 && tPitoisuus.yksikkö === "m") {
    var tAinemäärä = (tMäärä.arvo * 1000) / tObj.M;
    console.log("Torjuttavaa ainetta on " + tAinemäärä.toFixed(2) + " moolia.");
} else if (tPitoisuus.arvo === 100 && tPitoisuus.yksikkö === "v") {
    var tTiheys = laskePuhdasTiheys(tObj);
    console.log("Torjuttavan aineen tiheys on " + tTiheys.toFixed(2) + " kg/L.");
    var tMassa = tMäärä.arvo * tTiheys;
    console.log("Torjuttavan aineen massa on " + tMassa.toFixed(2) + " kg.");
    var tAinemäärä = (tMassa * 1000) / tObj.M;
    console.log("Torjuttavaa ainetta on " + tAinemäärä.toFixed(2) + " moolia.");
} else if (tMäärä.yksikkö === "L" && tPitoisuus.yksikkö === "v") {
    var tTodellinenMäärä = tMäärä.arvo * (tPitoisuus.arvo / 100);
    console.log("Torjuttavan aineen todellinen määrä on " + tTodellinenMäärä.toFixed(2) + " L.");
    var tTiheys = laskePuhdasTiheys(tObj);
    console.log("Torjuttavan aineen tiheys on " + tTiheys.toFixed(2) + " kg/L.");
    var tMassa = tTodellinenMäärä * tTiheys;
    console.log("Torjuttavan aineen massa on " + tMassa.toFixed(2) + " kg.");
    var tAinemäärä = (tMassa * 1000) / tObj.M;
    console.log("Torjuttavaa ainetta on " + tAinemäärä.toFixed(2) + " moolia.");
}
else if (tMäärä.yksikkö === "L" && tPitoisuus.yksikkö === "m") {
    var tTodellinenMäärä = tMäärä.arvo * (tPitoisuus.arvo / 100);
    console.log("Torjuttavan aineen todellinen määrä on " + tTodellinenMäärä.toFixed(2) + " kg.");
    var tTiheys = laskeTiheys(tObj, tPitoisuus);
    console.log("Torjuttavan aineen tiheys on " + tTiheys.toFixed(2) + " kg/L.");
    var tMassa = tTodellinenMäärä * tTiheys;
    console.log("Torjuttavan aineen massa on " + tMassa.toFixed(2) + " kg.");
    var tAinemäärä = (tMassa * 1000) / tObj.M;
    console.log("Torjuttavaa ainetta on " + tAinemäärä.toFixed(2) + " moolia.");
}
else if (tMäärä.yksikkö === "kg" && tPitoisuus.yksikkö === "m") {
    var tTodellinenMäärä = tMäärä.arvo * (tPitoisuus.arvo / 100);
    console.log("Torjuttavan aineen todellinen määrä on " + tTodellinenMäärä.toFixed(2) + " kg.");
    var tAinemäärä = (tTodellinenMäärä * 1000) / tObj.M;
    console.log("Torjuttavaa ainetta on " + tAinemäärä.toFixed(2) + " moolia.");
}
else if (tMäärä.yksikkö === "kg" && tPitoisuus.yksikkö === "v") {
    var tKokonaisTiheys = window.prompt("Laskua ei voi toteuttaa ilman aineen tiheyttä. Anna torjuttavan aineen tiheys (kg/L):");
        if (tKokonaisTiheys === null) {
            throw new Error("Käyttäjä peruutti syötteen.")}
        tKokonaisTiheys = tKokonaisTiheys.replace(',', '.');
        tKokonaisTiheys = parseFloat(tKokonaisTiheys);
        if (!isFinite(tKokonaisTiheys) || tKokonaisTiheys <= 0) throw new Error("Anna positiivinen numero.");
    var tTodellinenMäärä = (tMäärä.arvo / tKokonaisTiheys) * (tPitoisuus.arvo / 100);
    console.log("Torjuttavan aineen todellinen määrä on " + tTodellinenMäärä.toFixed(2) + " L.");
    var tTiheys = laskePuhdasTiheys(tObj);
    console.log("Torjuttavan aineen tiheys on " + tTiheys.toFixed(2) + " kg/L.");
    var tMassa = tTodellinenMäärä * tTiheys;
    console.log("Torjuttavan aineen massa on " + tMassa.toFixed(2) + " kg.");
    var tAinemäärä = (tMassa * 1000) / tObj.M;
    console.log("Torjuttavaa ainetta on " + tAinemäärä.toFixed(2) + " moolia.");
}
else {
    throw new Error("Jokin meni pieleen. Tarkista kaikki syötteet.");
}
// Torjuttavan aineen ainemäärä kaikilla eri syöteyhdistelmillä











var nAine = window.prompt("Anna neutraloivan aineen nimi:");
if (nAine === null) {
    throw new Error("Käyttäjä peruutti syötteen.");
}
var nNimi = String(nAine).trim().toLowerCase();
var nObj = aineet.find(function(item) {
    var candidates = [item.nimi, item.kaava, item.YK].filter(x => x != null);
    return candidates.some(function(v) {
        if (Array.isArray(v)) {
            return v.some(el => String(el).trim().toLowerCase() === nNimi);
        }
        return String(v).trim().toLowerCase() === nNimi;
    });
});
if (!nObj) {
    alert("Ainetta '" + nAine + "' ei löytynyt.");
    throw new Error("Ainetta ei löytynyt: " + nAine);
};
var nLuku = nObj.H || nObj.OH;
var neutralointiKerroin = (tLuku / nLuku);
var nAinemäärä = tAinemäärä * neutralointiKerroin;

// Käyttäjän syöttämä neutraloivan aineen ominaisuudet


console.log(
    "Aineen " + nAine + " kaava on: " + nObj.kaava + ". " + (nObj.YK === null || nObj.YK === undefined ? "Aineella ei ole YK-numeroa." : " ja sen YK-numero(t) on: " + (typeof nObj.YK === "string" ? nObj.YK : nObj.YK.join(", ")))
);
console.log(
    "Aineen moolimassa on: " + nObj.M + " g/mol" + " ja sen " + (nObj.tyyppi === "happo" ? "anionin" : "kationin") + " varaus on: " + (nObj.tyyppi === "happo" ? "+" : "-") + nLuku
);
// Tulostaa käyttäjän syöttämän neutraloivan aineen ja sen ominaisuudet


if (tObj.tyyppi == nObj.tyyppi) {
    alert("Torjuttava aine ja neutraloiva aine eivät voi olla samaa tyyppiä (kumpikin happo tai kumpikin emäs).");
    throw new Error("Sama tyyppi: " + tObj.tyyppi);
}
// Tarkistaa onko torjuttava aine ja neutraloiva aine eri tyyppiä


var nPitoisuus = null;
while (true) {
    var raw = window.prompt("Anna neutraloitavan aineen pitoisuus prosenteina (0-100) ja lisää perään 'm' jos aine on massaprosenttinen (esim. 32 m) tai 'v' jos tilavuusprosenttinen (esim. 70 v). Oletuksena on massaprosentti.");
    if (raw === null) {
        throw new Error("Käyttäjä peruutti syötteen.")}
    raw = raw.trim();
    var m = raw.match(/^([\d.,]+)\s*(m|M|v|V)?$/);
    if (!m) { alert("Virheellinen syöte. Käytä muotoa '32 m' tai '70 v'."); continue; }
    var num = parseFloat(m[1].replace(',', '.'));
    if (!isFinite(num) || num <= 0 || num > 100) { alert("Anna pitoisuus prosentteina (0-100)."); continue; }
    var unit = (m[2] || "m").toLowerCase();
    if (unit !== "m" && unit !== "v") { alert("Yksikkö voi olla vain 'm' tai 'v'."); continue; }
    unit = unit === "m" ? "m" : "v";
    nPitoisuus = { arvo: num, yksikkö: unit };
    break;
};
// Käyttäjän syöttämän neutraloivan aineen pitoisuus ja pitoisuuden yksikkö


console.log(
    nPitoisuus.arvo === 100 ? "Neutraloiva aine on puhdasta ainetta." : "Neutraloivan aineen pitoisuus on: " + nPitoisuus.arvo + (nPitoisuus.yksikkö === "m" ? " massa%" : " vol%")
);
// Tulostaa käyttäjän syöttämän neutraloivan aineen pitoisuuden ja pitoisuuden yksikön

var nMassa = (nAinemäärä * nObj.M) / 1000;
console.log("Neutraloivan aineen massa on " + nMassa.toFixed(2) + " kg.");

// Laskee ja tulostaa neutraloivan aineen massan

if (nPitoisuus.arvo === 100) {
    var nKokonaisMassa = nMassa;
    var nKokonaisTilavuus = nMassa / laskePuhdasTiheys(nObj);
    console.log("Neutraloitavaa ainetta tarvitaan " + nKokonaisMassa.toFixed(2) + " kg, eli " + nKokonaisTilavuus.toFixed(2) + " L.");
}
else if (nPitoisuus.yksikkö === "v" && nPitoisuus.arvo < 100) {
    var nTiheys = laskePuhdasTiheys(nObj);
    console.log("Neutraloivan aineen tiheys on " + nTiheys.toFixed(2) + " kg/L.");
    var nTilavuus = nMassa / nTiheys;
    console.log("Neutraloivan aineen  tilavuus on " + nTilavuus.toFixed(2) + " L.");
    var nKokonaisTilavuus = nTilavuus / (nPitoisuus.arvo / 100);
    var nKokonaisTiheys = window.prompt("Laskua ei voi toteuttaa ilman aineen tiheyttä. Anna neutraloivan aineen tiheys (kg/L):");
        if (nKokonaisTiheys === null) {
            throw new Error("Käyttäjä peruutti syötteen.")}
        nKokonaisTiheys = nKokonaisTiheys.replace(',', '.');
        nKokonaisTiheys = parseFloat(nKokonaisTiheys);
        if (!isFinite(nKokonaisTiheys) || nKokonaisTiheys <= 0) throw new Error("Anna positiivinen numero.");
    var nKokonaisMassa = nKokonaisTilavuus * nKokonaisTiheys;
    console.log("Neutraloitavaa ainetta tarvitaan " + nKokonaisMassa.toFixed(2) + " kg, eli " + nKokonaisTilavuus.toFixed(2) + " L.");
}
else if (nPitoisuus.yksikkö === "m" && nPitoisuus.arvo < 100) {
    var nKokonaisMassa = nMassa / (nPitoisuus.arvo / 100);
    var nKokonaisTiheys = window.prompt("Laskua ei voi toteuttaa ilman aineen tiheyttä. Anna neutraloivan aineen tiheys (kg/L):");
        if (nKokonaisTiheys === null) {
            throw new Error("Käyttäjä peruutti syötteen.")}
        nKokonaisTiheys = nKokonaisTiheys.replace(',', '.');
        nKokonaisTiheys = parseFloat(nKokonaisTiheys);
        if (!isFinite(nKokonaisTiheys) || nKokonaisTiheys <= 0) throw new Error("Anna positiivinen numero.");
    var nKokonaisTilavuus = nKokonaisMassa / nKokonaisTiheys;
    console.log("Neutraloitavaa ainetta tarvitaan " + nKokonaisMassa.toFixed(2) + " kg, eli " + nKokonaisTilavuus.toFixed(2) + " L.");
}
else {
    throw new Error("Jokin meni pieleen. Tarkista kaikki syötteet.");
}
// Laskee ja tulostaa neutraloivan aineen massan ja tilavuuden kaikilla eri syöteyhdistelmillä


function laskeTiheys(obj, pitoisuus) {
    if (typeof obj.tiheys === "function") return obj.tiheys(pitoisuus.arvo);
    return obj.tiheys;
}
function laskePuhdasTiheys(obj) {
    if (typeof obj.tiheys === "function") return obj.tiheys(100);
    return obj.tiheys;
}