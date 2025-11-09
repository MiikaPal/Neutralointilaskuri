const aineet = [
  {tyyppi: "happo", nimi: ["Suolahappo", "Kloorivetyhappo", "Vetykloridihappo"], 
    YK: ["1050", "1789", "2186"], CAS: ["7647-37-2", "22353-15-1"],
    kaava: ["HCl", "ClH"], Ekv: 1, M: 36.46, k: -22.4,
    tiheys: function (pitoisuus) {
      return (
        0.99847 + 
        0.0047585 * pitoisuus + 
        1.734 * Math.pow(10, -5) * Math.pow(pitoisuus, 2) - 
        2.8726 * Math.pow(10, -7) * Math.pow(pitoisuus, 3)
      );
    },
    p: 1,
  },
  {tyyppi: "happo", nimi: ["Vetyfluoridi", "Fluorivetyhappo"], 
    YK: ["1052", "1790"], CAS: ["7664-39-3", "12381-92-9"],
    kaava: "HF", Ekv: 1, M: 20.01, k: 12.76,
    tiheys: function (pitoisuus) {
      return (
        0.99347 + 
        0.0061691 * pitoisuus - 
        1.8874 * Math.pow(10, -4) * Math.pow(pitoisuus, 2) +
        4.0911 * Math.pow(10, -6) * Math.pow(pitoisuus, 3) - 
        2.8236 * Math.pow(10, -8) * Math.pow(pitoisuus, 4)
      );
    },
  },
  {tyyppi: "happo", nimi: ["Typpihappo", "Salpietarihappo", "Sievesi"], 
    YK: ["2031", "2032"], CAS: ["7697-37-2", "78989-43-2"],
    kaava: "HNO3", Ekv: 1, M: 63.01, k: 7.68,
    tiheys: function (pitoisuus) {
      if (pitoisuus <= 78.5) {
        return (
          0.99946 + 
          0.0049196 * pitoisuus + 
          5.5905 * Math.pow(10, -5) * Math.pow(pitoisuus, 2) -
          6.4148 * Math.pow(10, -7) * Math.pow(pitoisuus, 3) + 
          6.9011 * Math.pow(10, -10) * Math.pow(pitoisuus, 4)
        );
      } else {
        return (
          0.99895 + 
          0.0050916 * pitoisuus + 
          4.3955 * Math.pow(10, -5) * Math.pow(pitoisuus, 2) -
          3.6337 * Math.pow(10, -7) * Math.pow(pitoisuus, 3) - 
          1.3459 * Math.pow(10, -9) * Math.pow(pitoisuus, 4)
        );
      }
    },
  },
  {tyyppi: "happo", nimi: ["Rikkihappo", "Vihtrilliöljy"], 
    YK: ["1830", "1832", "2796"], CAS: ["7664-93-9", "12772-98-4"],
    kaava: ["H2SO4", "H2O4S"], Ekv: 2, M: 98.08, k: 7.68,
    tiheys: function (pitoisuus) {
      return (
        1.0012 + 
        0.0051875 * pitoisuus +
        1.5943 * Math.pow(10, -4) * Math.pow(pitoisuus, 2) -
        3.6871 * Math.pow(10, -6) * Math.pow(pitoisuus, 3) +
        7.4832 * Math.pow(10, -8) * Math.pow(pitoisuus, 4) -
        3.8716 * Math.pow(10, -10) * Math.pow(pitoisuus, 5)
      );
    },
  },
  {tyyppi: "happo", nimi: ["Bromivety", "Vetybromidi", "Bromivetyhappo"], 
    YK: ["1048", "1788"], CAS: ["10035-10-6", "10097-32-2"],
    kaava: ["HBr", "BrH"], Ekv: 1, M: 80.91, k: -18,
    tiheys: function (pitoisuus) {
      return (
        0.99818 + 0.0070426 * pitoisuus + 
        2.881 * Math.pow(10, -5) * Math.pow(pitoisuus, 2) + 
        9.9023 * Math.pow(10, -7) * Math.pow(pitoisuus, 3) - 
        4.7722 * Math.pow(10, -9) * Math.pow(pitoisuus, 4)
      );
    },
  },
 // {tyyppi: "happo", nimi: ["Etikkahappo", "Karbokysyylihappo"], YK: ["2789", "2790"], kaava: "CH3COOH", Ekv: 1, M: 60.05,},
 // {tyyppi: "happo", nimi: ["Muurahaishappo", "Metaanihappo"], YK: ["1799", "3412"], kaava: "HCOOH", Ekv: 1, M: 46.03,},
 // {tyyppi: "happo", nimi: ["Perkloorihappo"], YK: ["1802", "1873"], kaava: "HClO4", Ekv: 1, M: 100.46,},
  {tyyppi: "happo", nimi: ["Dikloorietikkahappo", "Bikloorietikkahappo", "Dikloorietaanihappo", "2,2-Dikloorietikkahappo", "DCA"], 
    YK: "1764", CAS: "79-43-6", 
    kaava: "CHCl2COOH", Ekv: 1, M: 128.94, k: 2.52,
    tiheys: function (pitoisuus) {
      return (
        0.9982 + 
        0.004427 * pitoisuus + 
        5.37 * Math.pow(10, -6) * Math.pow(pitoisuus, 2) + 
        7.534 * Math.pow(10, -8) * Math.pow(pitoisuus, 3)
      );
    },
  },
  {tyyppi: "happo", nimi: ["Fosforihappo", "Trivetyfosfaatti", "Ortofosforihappo", "Trihydroksididooksididofosfori"], 
    YK: ["1805", "3453"],  CAS: ["7664-38-2", "14265-44-2"],
    kaava: ["H3PO4", "H3O4P"], Ekv: 3, M: 97.995, k: 8.4,
    tiheys: function (pitoisuus) {
      return (
        0.99839 + 
        0.0052931 * pitoisuus + 
        1.7569 * Math.pow(10, -5) * Math.pow(pitoisuus, 2) + 
        2.9636 * Math.pow(10, -7) * Math.pow(pitoisuus, 3) - 
        1.3111 * Math.pow(10, -9) * Math.pow(pitoisuus, 4)
      );
    },
  },
  {tyyppi: "happo", nimi: "Muu happo", Ekv: undefined, M: undefined, tiheys: undefined,},
  {tyyppi: "emäs", nimi: ["Natriumhydroksidi", "Lipeä", "Natriumlipeä"], 
    YK: ["1823", "1824"], CAS: ["1310-73-2", "81133-20-2"],
    kaava: "NaOH", Ekv: 1, M: 39.998, k: 3.7,
    tiheys: function (pitoisuus) {
      return (
        0.99506 + 
        0.012028 * pitoisuus - 
        4.5829 * Math.pow(10, -5) * Math.pow(pitoisuus, 2) + 
        3.8996 * Math.pow(10, -7) * Math.pow(pitoisuus, 3)
      );
    },
  },
  {tyyppi: "emäs", nimi: ["Kalsiumhydroksidi", "Kalsiumvesi", "Kalkkimaito", "Kalsiumdihydroksidi", "Sammutettu kalkki"],
    kaava: "Ca(OH)2", Ekv: 2, M: 74.09,
  },
  {tyyppi: "emäs", nimi: ["Kaliumhydroksidi", "Kaliumlipeä"], 
    YK: ["1813", "1814"], CAS: "1310-58-3",
    kaava: "KOH", Ekv: 1, M: 56.11, k: -2.8,
     tiheys: function (pitoisuus) {
      return (
        0.99785 + 
        0.0091366 * pitoisuus +
        7.4082 * Math.pow(10, -7) * Math.pow(pitoisuus, 2) +
        7.5375 * Math.pow(10, -7) * Math.pow(pitoisuus, 3) -
        6.2866 * Math.pow(10, -9) * Math.pow(pitoisuus, 4)
      );
    },
  },
  // {tyyppi: "emäs", nimi: "Kalsiumkarbonaatti", kaava: "CaCO3", Ekv: 2, M: 100.09, tiheys: 2.71,},
  {tyyppi: "emäs", nimi: "Muu emäs", Ekv: undefined, M: undefined, tiheys: undefined,
  },
];
// Lisää loput hapot ja emäkset
function findAineByIdentifier(input) {
  if (!input) return null;
  var q = String(input).trim().toLowerCase();
  return (
    aineet.find(function (item) {
      var fields = [item.nimi, item.kaava, item.YK, item.CAS].filter((x) => x != null);
      return fields.some(function (v) {
        if (Array.isArray(v)) {
          return v.some((el) => String(el).trim().toLowerCase() === q);
        }
        return String(v).trim().toLowerCase() === q;
      });
    }) || null
  );
}

function parseNumber(val) {
  if (val && typeof val === "object" && "value" in val) val = val.value;
  if (val === null || val === undefined) return NaN;
  var s = String(val).trim().replace(",", ".");
  if (s === "") return NaN;
  var v = Math.abs(parseFloat(s));
  return isFinite(v) ? v : NaN;
}

function fmt(num, digits = 8) {
  return isFinite(num) ? Number(num).toFixed(digits) : "—";
}

function laskeTiheys(obj, pitoisuus, kokonaisTiheys) {
  if (typeof obj.tiheys === "function") return obj.tiheys(pitoisuus);
  if (obj.tiheys === undefined) {
    tiheys = parseNumber(kokonaisTiheys);
    if (kokonaisTiheys === undefined) {
      tiheys = parseNumber(
        window.prompt("Anna mukautetun liuoksen tiheys (kg/L):")
      );
    }
  if (!isFinite(tiheys)) {
    alert("Aineen tiheyttä ei ole määritetty oikein.");
    throw new Error("Aineen tiheyttä ei ole määritetty oikein.");
  }}
  return tiheys;
}

function laskePuhdasTiheys(obj, pitoisuus, kokonaisTiheys) {
  if (typeof obj.tiheys === "function") return obj.tiheys(100);
  if (obj.tiheys === undefined) {
    tiheys = parseNumber(kokonaisTiheys);
    if (kokonaisTiheys === undefined) {
    if (pitoisuus === 100)
      tiheys = parseNumber(
        window.prompt("Anna mukautetun aineen tiheys (kg/L):")
      );
    else
      tiheys = parseNumber(
        window.prompt("Anna mukautetun aineen puhdas tiheys (kg/L):")
      );
  if (!isFinite(tiheys)) {
    alert("Aineen tiheyttä ei ole määritetty oikein.");
    throw new Error("Aineen tiheyttä ei ole määritetty oikein.");
  }}
  return tiheys;
  }}

function arvioiTiheys(pitoisuus, aineTiheys) {
  const vesiPitoisuus = 100 - pitoisuus;
  const vesiTiheys = 0.9982;
  const arvioituTiheys =
    (aineTiheys * pitoisuus + vesiTiheys * vesiPitoisuus) / 100;
  return arvioituTiheys;
  }

// n (mol) = m (kg) * 1000 / M (g/mol)
function moolitMassasta(massa, moolimassa) {
  return (massa * 1000) / moolimassa;
}

// V(aine) (L) = V(kok) (L) * (pitoisuus / 100)
// m(aine) (kg) = m(kok) (kg) * (pitoisuus / 100)
function todMäärä(määrä, pitoisuus) {
  return (määrä * pitoisuus) / 100;
}

// V(kok) (L) = V(aine) (L) / (pitoisuus / 100)
// m(kok) (kg) = m(aine) (kg) / (pitoisuus / 100)
function kokMäärä(määrä, pitoisuus) {
  return määrä / (pitoisuus / 100);
}

function resetCalculation() {
  tTih = undefined;
  nTih = undefined;
  tEkv = undefined;
  nEkv = undefined;
  tObj = undefined;
  nObj = undefined;
  var muuh = findAineByIdentifier("Muu happo");
  if (muuh) {
    muuh.M = undefined;
    muuh.tiheys = undefined;
  }
  var muue = findAineByIdentifier("Muu emäs");
  if (muue) {
    muue.M = undefined;
    muue.tiheys = undefined;
  }
}

function startCalculation() {
  try {
    let tAM, tMas, tKokM, tVol, tKokV;
    let nAM, nMas, nKokV, nKokM;
    let tTih, nTih, tKokT, nKokT;

    var tInput = document.getElementById("torjuttavat-aineet");
    if (!tInput) {
      alert("Torjuttavan aineen valinnassa tapahtui virhe.");
      return;
    }

    var tAine = (tInput && "value" in tInput) ? String(tInput.value).trim() : String(tInput).trim();
    if (!tAine) {
      window.alert("Torjuttavan aineen kenttä on tyhjä.");
      tAine = window.prompt(
        "Anna torjuttavan aineen nimi, kaava tai YK-numero:"
      );
      if (tAine === null) {
        alert("Nimeä ei syötetty.");
        return;
      }
    }
    console.log("tAine: " + tAine);

    const tObjOrig = findAineByIdentifier(tAine);
    if (!tObjOrig) {
      alert("Torjuttavaa ainetta ei löytynyt: " + tAine);
      return;
    }
    let tObj = Object.assign({}, tObjOrig);

    var tMArv = parseNumber(
      document.getElementById("torjuttava-maara-arvo")?.value
    );
    if (!isFinite(tMArv)) {
      alert("Torjuttavan aineen määrää ei ole määritetty.");
      tMArv = parseNumber(
        window.prompt("Anna torjuttavan aineen määrä (kg tai L):")
      );
      if (!isFinite(tMArv)) {
        alert("Aineen määrää ei määritetty oikein.");
        return;
      }
    }
    console.log ("tMarv: " +tMArv);

    var tMYks =
      document.getElementById("torjuttava-maara-yksikko")?.value || "L";
    tMYks = tMYks === "kg" ? "kg" : "L";
    console.log("tMYks: " + tMYks)

    var tPArv = parseNumber(
      document.getElementById("torjuttava-pitoisuus-arvo")?.value
    );
    if (!isFinite(tPArv) || tPArv > 100) {
      alert("Torjuttavan aineen pitoisuutta ei ole määritetty.");
      tPArv = parseNumber(
        window.prompt("Anna torjuttavan aineen pitoisuus (0-100):")
      );
      if (!isFinite(tPArv) || tPArv > 100) {
        alert("Pitoisuutta ei määritetty oikein.");
        return;
      }
    }
    console.log("tPArv: " +tPArv)

    var tPYks =
      document.getElementById("torjuttava-pitoisuus-yksikko")?.value || "m";
    tPYks = tPYks === "mas" ? "m" : "v";
    console.log("tPYks: " + tPYks)

    var tEkv = tObj.Ekv;
    if (tEkv   === undefined) {
      raw = document.getElementById("torjuttava-ekvivalentti")?.value;
      tEkv = parseNumber(raw);
      if (!isFinite(tEkv)) {
        alert("Torjuttavan aineen ekvivalenttia ei ole määritetty.");
        tEkv = parseNumber(
          window.prompt("Anna torjuttavan aineen ekvivalentti:")
        );
        if (!isFinite(tEkv)) {
          alert("Ekvivalenttia ei määritetty oikein.");
          return;
        }
      }
    }
    console.log("tEkv: " + tEkv);

    var tMol = tObj.M
    if (tObj.M === undefined) {
      raw = document.getElementById("torjuttava-moolimassa")?.value;
      tMol = parseNumber(raw);
      if (!isFinite(tMol)) {
        alert("Torjuttavan aineen moolimassaa ei ole määritetty.");
        tMol = parseNumber(
          window.prompt("Anna torjuttavan aineen moolimassa (g/mol):")
        );
        if (!isFinite(tMol)) {
          alert("Moolimassaa ei määritetty oikein.");
          return;
        }
      }
    }
    console.log("tMol: " + tMol);

    tKokT = parseNumber(
      document.getElementById("torjuttava-tiheys")?.value
    );
    if (!tObj.tiheys && !isFinite(tKokT)) {
      alert("Torjuttavan aineen tiheyttä ei ole määritetty.");
      tKokT = parseNumber(
        window.prompt("Anna torjuttavan aineen tiheys (kg/L):")
      );
      if (!isFinite(tKokT)) {
        alert("Tiheyttä ei määritetty oikein.");
        return;
      }
    }
    console.log("tKokT: " + tKokT);

    if (tPArv === 100) {
      if (tMYks === "kg") {
        // Massa annettu
        tAM = moolitMassasta(tMArv, tMol);
        console.log("tAM:" + tAM);
      } else {
        // Tilavuus annettu
        tTih = laskePuhdasTiheys(tObj, tPArv, tKokT);
        tMas = tMArv * tTih;                                            // m (kg) = V (L) * rhoo (kg/L)
        tAM = moolitMassasta(tMas, tMol);
        console.log("tTih: " + tTih);
        console.log("tMas: " + tMas);
        console.log("tAM: " + tAM);
      }
    } else if (tPArv < 100) {
      if (tMYks === "L") {
        // Tilavuus annettu
        if (tPYks === "v") {
          // Pitoisuus vol%
          tVol = todMäärä(tMArv, tPArv);
          tTih = laskePuhdasTiheys(tObj, tPArv, tKokT);
          tMas = tVol * tTih;                                           // m (kg) = V(aine) (L) * rhoo (kg/L)
          tAM = moolitMassasta(tMas, tMol);
          console.log("tVol: " + tVol);
          console.log("tTih: " + tTih);
          console.log("tMas: " + tMas);
          console.log("tAM: " + tAM);
        } else {
          // Pitoisuus mass%
          tTih = laskeTiheys(tObj, tPArv, tKokT);
          tKokM = tMArv * tTih;                                         // m(kok) (kg) = V(kok) (L) * rhoo (kg/L)
          tMas = todMäärä(tKokM, tPArv);
          tAM = moolitMassasta(tMas, tMol);
          console.log("tMas: " + tMas);
          console.log("tTih: " + tTih);
          console.log("tAM: " + tAM);
        }
      } else {
        // Massa annettu
        if (tPYks === "m") {
          // Pitoisuus mass%
          tMas = todMäärä(tMArv, tPArv);                                // m(aine) (kg) = m(kok) (kg) * (pitoisuus / 100)
          tAM = moolitMassasta(tMas, tMol);
          console.log("tMas: " + tMas);
          console.log("tAM: " + tAM);
        } else {
          // Pitoisuus vol%
          tTih = laskePuhdasTiheys(tObj, tPArv, tKokT);
          tKokT = arvioiTiheys(tPArv, tTih);
          tKokV = tMArv / tKokT;                                        // V(kok) (L) = m(kok) (kg) / rhoo (kg/L)
          tVol = todMäärä(tKokV, tPArv);
          tMas = tVol * tTih;                                           // m(aine) (kg) = V(aine) (L) * rhoo (kg/L)
          tAM = moolitMassasta(tMas, tMol);
          console.log("tVol: " + tVol);
          console.log("tMas: " + tMas);
          console.log("tAM: " + tAM);
        }
      }
    } else {
      throw new Error("Jokin meni pieleen. Tarkista kaikki syötteet.");
    }
    // Torjuttavan aineen ainemäärä kaikilla eri syöteyhdistelmillä

    var nInput = document.getElementById("neutraloivat-aineet");
    if (!nInput) {
      alert("Neutraloivan aineen valinnassa tapahtui virhe.");
      return;
    }

    var nAine = (nInput && "value" in nInput) ? String(nInput.value).trim() : String(nInput).trim();
    if (!nAine) {
      alert("Neutraloivaa aineetta ei ole valittu.");
      nAine = window.prompt(
        "Anna neutraloivan aineen nimi, kaava tai YK-numero:"
      );
      if (nAine === null) {
        alert("Nimen syöttö keskeytettiin.");
        return;
      }
    }
    console.log("nAine: " + nAine);

    const nObjOrig = findAineByIdentifier(nAine);
    if (!nObjOrig) {
      alert("Neutraloivaa ainetta ei löytynyt: " + nAine);
      return;
    }
    let nObj = Object.assign({}, nObjOrig);

    if (tObj.tyyppi === nObj.tyyppi) {
      alert(
        "Aineet eivät voi olla samaa tyyppiä (kumpikin on " + tObj.tyyppi + ")."
      );
      return;
    }

    var nEkv = nObj.Ekv;
    if (nEkv === undefined) {
      var raw = document.getElementById("neutraloiva-ekvivalentti").value;
      nEkv = parseNumber(raw);
      if (!isFinite(nEkv)) {
        alert("Neutraloivan aineen ekvivalenttia ei ole määritetty.");
        nEkv = parseNumber(
          window.prompt("Anna neutraloivan aineen ekvivalentti:")
        );
        if (!isFinite(nEkv)) {
          alert("Ekvivalenttia ei määritetty oikein.");
          return;
        }
      }
    }
    console.log("nEkv: " + nEkv);

    var kerroin = tEkv / nEkv;                                           // neutralointikerroin = ekvivalentti(torj) / ekvivalentti(neut)
    console.log("kerroin: " + kerroin);
    nAM = tAM * kerroin;                                                   // n(neut) (mol) = n(torj) (mol) * neutralointikerroin
    console.log("nAM: " + nAM);

    var nMol = nObj.M
    if (nObj.M === undefined) {
      raw = document.getElementById("neutraloiva-moolimassa").value;
      nMol = parseNumber(raw);
      if (!isFinite(nMol)) {
        alert("Neutraloivan aineen moolimassaa ei ole määritetty.");
        nMol = parseNumber(
          window.prompt("Anna neutraloivan aineen moolimassa (g/mol):")
        );
        if (!isFinite(nMol)) {
          alert("Moolimassaa ei määritetty oikein.");
          return;
        }
      }
    }
    console.log("nMol: " + nMol);

    var nPArv = parseNumber(
      document.getElementById("neutraloiva-pitoisuus-arvo")?.value
    );
    if (!isFinite(nPArv)) {
      alert("Neutraloivan aineen pitoisuutta ei ole määritetty.");
      nPArv = parseNumber(
        window.prompt("Anna neutraloivan aineen pitoisuus (0-100):")
      );
      if (!isFinite(nPArv) || nPArv > 100) {
        alert("Pitoisuutta ei määritetty oikein.");
        return;
      }
    };
    console.log("nPArv: " + nPArv);

    var nPYks =
      document.getElementById("neutraloiva-pitoisuus-yksikko")?.value || "m";
    if (!isFinite(nPArv) || nPArv > 100) {
      alert("Anna neutraloivan aineen pitoisuus 0-100.");
      return;
    }
    nPYks = nPYks === "mas" ? "m" : "v";
    console.log("nPYks: " + nPYks);
    
    nMas = (nAM * nMol) / 1000;                                       // m (kg) = n (mol) * M (g/mol) / 1000
    console.log("nMas: " + nMas);

    nKokT = parseNumber(
      document.getElementById("neutraloiva-tiheys")?.value
    );
    if (!nObj.tiheys && !isFinite(nKokT)) {
      alert("Neutraloivan aineen tiheyttä ei ole määritetty.");
      nKokT = parseNumber(
        window.prompt("Anna neutraloivan aineen tiheys (kg/L):")
      );
      if (!isFinite(nKokT)) {
        alert("Tiheyttä ei määritetty oikein.");
        return;
      }
    }
    console.log("nKokT: " + nKokT);

    if (nPArv === 100) {
      nKokM = nMas;
      nTih = laskePuhdasTiheys(nObj, nPArv, nKokT);
      nKokV = nMas / nTih;                                              // V (L) = m (kg) / rhoo (kg/L)
      console.log("nTih: " + nTih);
      console.log("nKokM: " + nKokM);
      console.log("nKokV: " + nKokV);
    } else if (nPArv < 100) {
      if (nPYks === "v") {
        // Pitoisuus vol%
        nTih = laskePuhdasTiheys(nObj, nPArv, nKokT);
        nVol = nMas / nTih;                                             // V(aine) (L) = m (kg) / rhoo (kg/L)
        nKokV = kokMäärä(nVol, nPArv);
        if (!isFinite(nKokT) || nKokT <= 0) {
          alert(
            "Laskettu vain tilavuus. Neutraloivan aineen massaa ei voi laskea ilman tiheyttä, kun käytetään tilavuus-%. Jos tarvitset aineen massaa, täytä neutraloivan aineen tiheyden kenttä (kg/L)."
          );
        }
        nKokM = nKokV * nKokT;                                          // m(kok) (kg) = V(kok) (L) * rhoo (kg/L)
        console.log("nTih: " + nTih);
        console.log("nVol: " + nVol);
        console.log("nKokM: " + nKokM);
        console.log("nKokV: " + nKokV);
      } else {
        // Pitoisuus massa%
        nKokM = kokMäärä(nMas, nPArv);
        nTih = laskeTiheys(nObj, nPArv, nKokT);
        nKokV = nKokM / nTih;                                           // V(kok) (L) = m(kok) (kg) / rhoo (kg/L)
        console.log("nMas: " + nMas);
        console.log("nTih: " + nTih);
        console.log("nKokV: " + nKokV);
        console.log("nKokM: " + nKokM);
      }
    } else {
      throw new Error("Jokin meni pieleen. Tarkista kaikki syötteet.");
    }
    var result = {
      torjuttava: {
        input: tAine,
        aine: tObj.nimi,
        määrä: tMArv,
        määräYks: tMYks,
        pitoisuus: tPArv,
        pitoisuusYks: tPYks,
        ainemäärä: tAM,
      },
      neutraloiva: {
        input: nAine,
        aine: nObj.nimi,
        pitoisuus: nPArv,
        pitoisuusYks: nPYks,
        ainemäärä: nAM,
        puhdasmassa: typeof nMas !== "undefined" ? nMas : null,
        kokonaistilavuus: typeof nKokV !== "undefined" ? nKokV : null,
        kokonaismassa: typeof nKokM !== "undefined" ? nKokM : null,
      },
    };
    window.calculationResult = result;
    try {
      var ev = new CustomEvent("calculationDone", { detail: result });
      window.dispatchEvent(ev);
    } catch (err) {
      try {
        var ev2 = document.createEvent("CustomEvent");
        ev2.initCustomEvent("calculationDone", true, true, result);
        window.dispatchEvent(ev2);
      } catch (e) {
        console.warn(
          "CustomEvent not supported, cannot dispatch calculationDone event."
        );
      }
    }
    console.log("Lasku valmis:", result);
    return result;
  } catch (err) {
    console.error("Lasku epäonnistui:", err && err.message ? err.message : err);
    alert("Laskussa tapahtui virhe. Katso lisätiedot konsolista.");
  } finally {
      resetCalculation();
  }
}

window.resetCalculation = resetCalculation;
window.startCalculation = startCalculation;
