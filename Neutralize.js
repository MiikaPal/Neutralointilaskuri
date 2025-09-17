const aineet = [
    {tyyppi: "happo", aNimi: "Suolahappo", yNimi: "Kloorivetyhappo", kaava: "HCl", anioni: "Cl", H: 1, M: 36.46, tiheys: (1 + (0.5 * tAinePitoisuus / 100))},
    {tyyppi: "happo", aNimi: "Fluorivetyhappo", yNimi: "Fluorivety", kaava: "HF", anioni: "F", H: 1, M: 20.01, tiheys: 1.23},
    {tyyppi: "happo", aNimi: "Typpihappo", yNimi: "Salpietarihappo", kaava: "HNO3", anioni: "NO3", H: 1, M: 63.01},
    {tyyppi: "happo", aNimi: "Rikkihappo", yNimi: "Vihtrilliöljy", kaava: "H2SO4", anioni: "SO4", H: 2, M: 98.08},
    {tyyppi: "happo", aNimi: "Kloorihappo", yNimi: "Kloorivety", kaava: "HClO3", anioni: "ClO3", H: 1, M: 84.46},
    {tyyppi: "happo", aNimi: "Etikkahappo", yNimi: "Karbokysyylihappo", kaava: "CH3COOH", anioni: "CH3COO", H: 1, M: 60.05},
    {tyyppi: "happo", aNimi: "Muurahaishappo", yNimi: "Metaanihappo", kaava: "HCOOH", anioni: "HCOO", H: 1, M: 46.03},
    {tyyppi: "happo", aNimi: "Vetyjodidi", yNimi: "Vetyjodihappo", kaava: "HI", anioni: "I", H: 1, M: 127.91},
    {tyyppi: "happo", aNimi: "Perkloorihappo", kaava: "HClO4", anioni: "ClO4", H: 1, M: 100.46},
    {tyyppi: "happo", aNimi: "Jodihappo", kaava: "HIO3", anioni: "IO3", H: 1, M: 175.91},
    {tyyppi: "happo", aNimi: "Dikloorietikkahappo", kaava: "CHCl2COOH", anioni: "CHCl2COO", H: 1, M: 128.94},
    {tyyppi: "happo", aNimi: "Trivetyfosfaatti", yNimi: "Fosforihappo", kaava: "H3PO4", anioni: "PO4", H: 3, M: 97.99},
    {tyyppi: "emäs", aNimi: "Natriumhydroksidi", yNimi: "Lipeä", kaava: "NaOH", kationi: "Na", OH: 1, M: 40.00},
    {tyyppi: "emäs", aNimi: "Kalsiumhydroksidi", yNimi: "Kalkkimaito", kaava: "Ca(OH)2", kationi: "Ca", OH: 2, M: 74.09},
    {tyyppi: "emäs", aNimi: "Kaliumhydroksidi", yNimi: "Kaliumlipeä", kaava: "KOH", kationi: "K", OH: 1, M: 56.11},
    {tyyppi: "emäs", aNimi: "Kalsiumkarbonaatti", yNimi: "Kalkki", kaava: "CaCO3", kationi: "Ca", OH: 2, M: 100.09}
];
// Lisää loput hapot ja emäkset



var tAine = window.prompt("Anna torjuttavan aineen nimi:");
if (tAine === null) {
    throw new Error("Käyttäjä peruutti syötteen.");
}
var nimi = tAine.trim().toLowerCase();
var tAineObj = aineet.find(function(item) {
    return [item.aNimi, item.yNimi, item.kaava].some(function(v) { return v && v.toLowerCase() === nimi; });
});
if (!tAineObj) {
    alert("Ainetta '" + tAine + "' ei löytynyt.");
    throw new Error("Ainetta ei löytynyt: " + tAine);
}
var tLuku = tAineObj.H || tAineObj.OH;
var tMolaarisuus = ((1000 * tAineObj.tiheys) / tAineObj.M);

console.log("Aineen " + tAine + " kaava on: " + tAineObj.kaava);
console.log("Aineen moolimassa on: " + tAineObj.M + " g/mol" + " ja sen " + (tAineObj.tyyppi === "happo" ? "anionin" : "kationin") + " varaus on: " + (tAineObj.tyyppi === "happo" ? "+" : "-") + tLuku);
// Käyttäjän syöttämän torjuttavan aineen ominaisuudet


var tAineMassa = null;
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
    tAineMassa = { arvo: num, yksikkö: unit };
    break;
}
// Käyttäjän syöttämän neutraloitavan aineen massa tai tilavuus


var tAinePitoisuus = window.prompt("Anna neutraloitavan aineen pitoisuus prosenteina (0-100)");
    if (tAinePitoisuus === null) {
        throw new Error("Käyttäjä peruutti syötteen.");
    tAinePitoisuus = replace(',', '.');
    tAinePitoisuus = parseFloat(tAinePitoisuus);
    if (!isFinite(tAinePitoisuus) || tAinePitoisuus <= 0 || tAinePitoisuus > 100) 
        alert("Anna pitoisuus massaprosentteina (0-100).");
        throw new Error("Virheellinen pitoisuus: " + tAinePitoisuus);
    }
console.log("Torjuttavan aineen " + (tAineMassa.yksikkö === "L" ? "tilavuus" : "massa") + " on: " + tAineMassa.arvo + " " + tAineMassa.yksikkö + " ja " + (tAinePitoisuus === 100 ? "aine on puhdasta" : "pitoisuus: " + tAinePitoisuus + " %"));
console.log("Aineen tiheys on: " + tAineObj.tiheys + " g/ml" + " ja " + "sen molaarisuus on: " + (1000 * tAineObj.tiheys / tAineObj.M) + " mol/L");
// Käyttäjän syöttämän neutraloitavan aineen pitoisuus


var tAineTodellinenMassa = (tAinePitoisuus % tAineMassa.arvo);
var tAineMäärä = (tAineMassa.yksikkö === "l" ? (tAineTodellinenMassa * tMolaarisuus) : (tAineTodellinenMassa * 1000 / tAineObj.M));

console.log("Torjuttavaa ainetta on liuoksessa: " + tAineTodellinenMassa + " " + tAineMassa.yksikkö + " tai " + tAineMäärä + " mol");
// Käyttäjän syöttämän neutraloitavan aineen todellinen määrä (kilogrammoina tai litroina) ja ainemäärä moolina







var nAine = window.prompt("Anna neutraloivan aineen nimi:");
if (nAine === null) {
    throw new Error("Käyttäjä peruutti syötteen.");
}
var nimi = nAine.trim().toLowerCase();
var nAineObj = aineet.find(function(item) {
    return [item.aNimi, item.yNimi, item.kaava].some(function(v) { return v && v.toLowerCase() === nimi; });
});
if (!nAineObj) {
    alert("Ainetta '" + nAine + "' ei löytynyt.");
    throw new Error("Ainetta ei löytynyt: " + nAine);
}
var nLuku = nAineObj.H || nAineObj.OH;
var nMolaarisuus = (1000 * nAineObj.tiheys / nAineObj.M);

console.log("Aineen " + nAine + " kaava on: " + nAineObj.kaava);
console.log("Aineen moolimassa on: " + nAineObj.M + " g/mol" + " ja sen " + (nAineObj.tyyppi === "happo" ? "anionin" : "kationin") + " varaus on: " + (nAineObj.tyyppi === "happo" ? "+" : "-") + nLuku);
console.log("Aineen tiheys on: " + nAineObj.tiheys + " g/ml" + " ja " + "sen molaarisuus on: " + (1000 * nAineObj.tiheys / nAineObj.M) + " mol/L");
// Käyttäjän syöttämä neutraloivan aineen ominaisuudet


if (tAineObj.tyyppi == nAineObj.tyyppi) {
    alert("Torjuttava aine ja neutraloiva aine eivät voi olla samaa tyyppiä (kumpikin happo tai kumpikin emäs).");
    throw new Error("Sama tyyppi: " + tAineObj.tyyppi);
}
// Tarkistaa onko torjuttava aine ja neutraloiva aine eri tyyppiä


var nAinePitoisuus = window.prompt("Anna neutraloivan aineen pitoisuus prosentteina (0-100):");
    if (nAinePitoisuus === null) {
        throw new Error("Käyttäjä peruutti syötteen.");
    nAinePitoisuus = replace(',', '.');
    nAinePitoisuus = parseFloat(nAinePitoisuus);
    if (!isFinite(nAinePitoisuus) || nAinePitoisuus <= 0 || nAinePitoisuus > 100) 
        alert("Anna pitoisuus massaprosentteina (0-100).");
        throw new Error("Virheellinen pitoisuus: " + nAinePitoisuus);
    }
console.log(nAinePitoisuus === 100 ? "Neutraloitava aine on puddasta" : "Neutraloivan aineen pitoisuus on: " + nAinePitoisuus + " %");
// Käyttäjän syöttämän neutraloivan aineen pitoisuus



var neutralointiKerroin = (tLuku / nLuku);
var nAineMäärä = (neutralointiKerroin * tAineMäärä);
var nAineTodellinenMäärä = (nAineMäärä * nAineObj.M / 1000);
var nAineMassa = (nAineTodellinenMäärä / (nAinePitoisuus / 100));
// Laskettu neutraloivan aineen massa tai tilavuus












console.log(nAineMassa);