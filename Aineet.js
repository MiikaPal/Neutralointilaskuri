const aineet = [
    {tyyppi: "happo", aNimi: "Suolahappo", yNimi: "Kloorivetyhappo", kaava: "HCl", anioni: "Cl", H: 1, M: 36.46, tiheys: function(pitoisuus) {
        return 0.99771 + 0.0050195 * pitoisuus
        + 3.2582 * Math.pow(10, -7) * Math.pow(pitoisuus, 2);}
    },
    {tyyppi: "happo", aNimi: "Vetyfluoridi", yNimi: "Fluorivetyhappo", kaava: "HF", anioni: "F", H: 1, M: 20.01, tiheys: function(pitoisuus) {
       return 0.98972 + 0.0063245 * pitoisuus
        - 1.8224 * Math.pow(10, -4) * Math.pow(pitoisuus, 2)
        + 4.0372 * Math.pow(10, -6) * Math.pow(pitoisuus, 3)
        - 2.8958 * Math.pow(10, -8) * Math.pow(pitoisuus, 4);}
    },
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
    {tyyppi: "emäs", aNimi: "Natriumhydroksidi", yNimi: "Lipeä", kaava: "NaOH", kationi: "Na", OH: 1, M: 40.00, tiheys: function(pitoisuus) {
        return 1.000 + 0.0113 * (pitoisuus);}
    },
    {tyyppi: "emäs", aNimi: "Kalsiumhydroksidi", yNimi: "Kalkkimaito", kaava: "Ca(OH)2", kationi: "Ca", OH: 2, M: 74.09},
    {tyyppi: "emäs", aNimi: "Kaliumhydroksidi", yNimi: "Kaliumlipeä", kaava: "KOH", kationi: "K", OH: 1, M: 56.11},
    {tyyppi: "emäs", aNimi: "Kalsiumkarbonaatti", yNimi: "Kalkki", kaava: "CaCO3", kationi: "Ca", OH: 2, M: 100.09, tiheys: 2.71},
];
// Lisää loput hapot ja emäkset

export { aineet };