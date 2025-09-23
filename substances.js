            const CHEMICAL_SUBSTANCES = [
                {
                    tyyppi: "happo",
                    nimi: ["Suolahappo", "Kloorivetyhappo"],
                    YK: "1789",
                    kaava: "HCl",
                    H: 1,
                    M: 36.46,
                    tiheys: function (pitoisuus) {
                        return (
                            0.99785 +
                            0.0050063 * pitoisuus +
                            5.9451 * Math.pow(10, -7) * Math.pow(pitoisuus, 2)
                        );
                    },
                },
                {
                    tyyppi: "happo",
                    nimi: ["Vetyfluoridi", "Fluorivetyhappo"],
                    YK: "1790",
                    kaava: "HF",
                    H: 1,
                    M: 20.01,
                    tiheys: function (pitoisuus) {
                        return (
                            0.98972 +
                            0.0063245 * pitoisuus -
                            1.8224 * Math.pow(10, -4) * Math.pow(pitoisuus, 2) +
                            4.0372 * Math.pow(10, -6) * Math.pow(pitoisuus, 3) -
                            2.8958 * Math.pow(10, -8) * Math.pow(pitoisuus, 4)
                        );
                    },
                },
                {
                    tyyppi: "happo",
                    nimi: ["Typpihappo", "Salpietarihappo"],
                    YK: ["2031", "2032"],
                    kaava: "HNO3",
                    anioni: "NO3",
                    H: 1,
                    M: 63.01,
                    tiheys: 1.5129,
                },
                {
                    tyyppi: "happo",
                    nimi: ["Rikkihappo", "Vihtrilliöljy"],
                    YK: ["1830", "1832", "2796"],
                    kaava: "H2SO4",
                    anioni: "SO4",
                    H: 2,
                    M: 98.08,
                },
                {
                    tyyppi: "happo",
                    nimi: ["Etikkahappo", "Karbokysyylihappo"],
                    YK: ["2789", "2790"],
                    kaava: "CH3COOH",
                    anioni: "CH3COO",
                    H: 1,
                    M: 60.05,
                },
                {
                    tyyppi: "happo",
                    nimi: ["Muurahaishappo", "Metaanihappo"],
                    YK: ["1799", "3412"],
                    kaava: "HCOOH",
                    anioni: "HCOO",
                    H: 1,
                    M: 46.03,
                },
                {
                    tyyppi: "happo",
                    nimi: ["Vetyjodidi", "Vetyjodihappo"],
                    YK: "2197",
                    kaava: "HI",
                    anioni: "I",
                    H: 1,
                    M: 127.91,
                },
                {
                    tyyppi: "happo",
                    nimi: ["Perkloorihappo"],
                    YK: ["1802", "1873"],
                    kaava: "HClO4",
                    anioni: "ClO4",
                    H: 1,
                    M: 100.46,
                },
                {
                    tyyppi: "happo",
                    nimi: ["Dikloorietikkahappo"],
                    YK: "1764",
                    kaava: "CHCl2COOH",
                    anioni: "CHCl2COO",
                    H: 1,
                    M: 128.94,
                },
                {
                    tyyppi: "happo",
                    nimi: ["Trivetyfosfaatti", "Fosforihappo"],
                    YK: ["1805", "3453"],
                    kaava: "H3PO4",
                    anioni: "PO4",
                    H: 3,
                    M: 97.99,
                },
                {
                    tyyppi: "emäs",
                    olomuoto: "kiinteä",
                    nimi: ["Natriumhydroksidi", "Lipeä", "Natriumlipeä"],
                    YK: ["1823", "1824"],
                    kaava: "NaOH",
                    kationi: "Na",
                    OH: 1,
                    M: 39.998,
                    tiheys: function (pitoisuus) {
                        return 0.9982 + 0.011318 * pitoisuus;
                    },
                },
                {
                    tyyppi: "emäs",
                    nimi: [
                        "Kalsiumhydroksidi",
                        "Kalsiumvesi",
                        "Kalkkimaito",
                        "Kalsiumdihydroksidi",
                    ],
                    kaava: "Ca(OH)2",
                    kationi: "Ca",
                    OH: 2,
                    M: 74.09,
                },
                {
                    tyyppi: "emäs",
                    nimi: ["Kaliumhydroksidi", "Kaliumlipeä"],
                    YK: ["1813", "1814"],
                    kaava: "KOH",
                    kationi: "K",
                    OH: 1,
                    M: 56.11,
                },
                {
                    tyyppi: "emäs",
                    nimi: "Kalsiumkarbonaatti",
                    kaava: "CaCO3",
                    kationi: "Ca",
                    OH: 2,
                    M: 100.09,
                    tiheys: 2.71,
                },
            ];

// Database class for accessing chemical substances
class SubstanceDatabase {
    getAllSubstances() {
        return CHEMICAL_SUBSTANCES;
    }
    calculateDensity(substance, concentration) {
        if (typeof substance.tiheys === 'function') {
            return substance.tiheys(concentration);
        } else if (typeof substance.tiheys === 'number') {
            return substance.tiheys;
        }
        return 1;
    }
    calculatePureDensity(substance) {
        if (typeof substance.tiheys === 'number') {
            return substance.tiheys;
        }
        return 1;
    }
}

const substanceDB = new SubstanceDatabase();
