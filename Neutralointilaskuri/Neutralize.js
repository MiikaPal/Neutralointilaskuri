const aineet = [
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
    H: 1,
    M: 63.01,
    tiheys: 1.5129,
  },
  {
    tyyppi: "happo",
    nimi: ["Rikkihappo", "Vihtrilliöljy"],
    YK: ["1830", "1832", "2796"],
    kaava: "H2SO4",
    H: 2,
    M: 98.08,
  },
  {
    tyyppi: "happo",
    nimi: ["Etikkahappo", "Karbokysyylihappo"],
    YK: ["2789", "2790"],
    kaava: "CH3COOH",
    H: 1,
    M: 60.05,
  },
  {
    tyyppi: "happo",
    nimi: ["Muurahaishappo", "Metaanihappo"],
    YK: ["1799", "3412"],
    kaava: "HCOOH",
    H: 1,
    M: 46.03,
  },
  {
    tyyppi: "happo",
    nimi: ["Vetyjodidi", "Vetyjodihappo"],
    YK: "2197",
    kaava: "HI",
    H: 1,
    M: 127.91,
  },
  {
    tyyppi: "happo",
    nimi: ["Perkloorihappo"],
    YK: ["1802", "1873"],
    kaava: "HClO4",
    H: 1,
    M: 100.46,
  },
  {
    tyyppi: "happo",
    nimi: ["Dikloorietikkahappo"],
    YK: "1764",
    kaava: "CHCl2COOH",
    H: 1,
    M: 128.94,
  },
  {
    tyyppi: "happo",
    nimi: ["Trivetyfosfaatti", "Fosforihappo"],
    YK: ["1805", "3453"],
    kaava: "H3PO4",
    H: 3,
    M: 97.99,
  },
  {
    tyyppi: "emäs",
    olomuoto: "kiinteä",
    nimi: ["Natriumhydroksidi", "Lipeä", "Natriumlipeä"],
    YK: ["1823", "1824"],
    kaava: "NaOH",
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
    OH: 2,
    M: 74.09,
  },
  {
    tyyppi: "emäs",
    nimi: ["Kaliumhydroksidi", "Kaliumlipeä"],
    YK: ["1813", "1814"],
    kaava: "KOH",
    OH: 1,
    M: 56.11,
  },
  {
    tyyppi: "emäs",
    nimi: "Kalsiumkarbonaatti",
    kaava: "CaCO3",
    OH: 2,
    M: 100.09,
    tiheys: 2.71,
  },
];
// Lisää loput hapot ja emäkset
function findAineByIdentifier(input) {
  if (!input) return null;
  var q = String(input).trim().toLowerCase();
  return (
    aineet.find(function (item) {
      var fields = [item.nimi, item.kaava, item.YK].filter((x) => x != null);
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
  if (val && typeof val === "number" && "value") val = val.value;
  if (val === null || val === undefined) return NaN;
  var s = String(val).trim().replace(",", ".");
  if (s === "") return NaN;
  return parseFloat(s);
}

function laskeTiheys(obj, pitoisuus) {
  if (typeof obj.tiheys === "function") return obj.tiheys(pitoisuus);
  return obj.tiheys;
}
function laskePuhdasTiheys(obj) {
  if (typeof obj.tiheys === "function") return obj.tiheys(100);
  return obj.tiheys;
}

function startCalculation() {
  try {
    var tAInput = document.getElementById("torjuttavat-aineet");
    if (!tAInput) {
      tAInput = window.prompt(
        "Torjuttavan aineen kenttä on tyhjä. Anna torjuttavan aineen nimi, kaava tai YK-numero:"
      );
    }
    if (tAInput === null) {
      alert("Käyttäjä peruutti syötteen.");
      return;
    }
    var tAineVal = tAInput.value || tAInput;
    if (!tAineVal) {
      alert("Torjuttavan aineen kenttä on tyhjä.");
      return;
    }
    tObj = findAineByIdentifier(tAineVal);
    if (!tObj) {
      alert("Torjuttavaa ainetta ei löytynyt: " + tAineVal);
      return;
    }

    var tMArv = parseNumber(
      document.getElementById("torjuttava-maara-arvo")?.value
    );
    if (!isFinite(tMArv) || tMArv <= 0) {
      alert("Torjuttavan aineen määrän tulee olla positiivinen numero.");
      return;
    }
    var tMYks =
      document.getElementById("torjuttava-maara-yksikko")?.value || "L";
  
    tMYks = tMYks === "kg" ? "kg" : "L";

    var tPArv = parseNumber(
      document.getElementById("torjuttava-pitoisuus-arvo")?.value
    );
    var tPYks =
      document.getElementById("torjuttava-pitoisuus-yksikko")?.value || "m";
    if (!isFinite(tPArv) || tPArv <= 0 || tPArv > 100) {
      alert("Anna torjuttavan aineen pitoisuus 0-100.");
      return;
    }
    tPYks = tPYks === "mas" ? "m" : "v";

    var tLuku = tObj.H || tObj.OH;

    var tKokTih = parseNumber(document.getElementById("torjuttava-tiheys")?.value);

    if (tPArv === 100) {
      if (tPYks === "m") { // Massa annettu
        tAM = (tMArv * 1000) / tObj.M;
        console.log(
          "Torj. aine mol:" + tAM.toFixed(4)
        );
      } else {
        // Tilavuus annettu
        var tTih = laskePuhdasTiheys(tObj);
        var tMas = tMArv * tTih;
        tAM = (tMas * 1000) / tObj.M;
        console.log(
          "Torj. aine tiheys: " + tTih.toFixed(4)
          );
        console.log(
          "Massa: " + tMas.toFixed(4)
          );
        console.log(
          "Ainemäärä (mol): " + tAM.toFixed(4)
          );
      
      }
    } else if (tPArv < 100) {
      if (tMYks === "L") {
        // Tilavuus annettu
        if (tPYks === "v") {
          // Pitoisuus vol%
          var tTodM = tMArv * (tPArv / 100);
          var tTih = laskePuhdasTiheys(tObj);
          var tMas = tTodM * tTih;
          tAM = (tMas * 1000) / tObj.M;
          console.log(
            "Torj. aine tilavuus: " + tTodM.toFixed(4)
            );
          console.log(
            "Tiheys: " + tTih.toFixed(4)
            );
          console.log(
            "Massa: " + tMas.toFixed(4)
            );
          console.log(
            "Ainemäärä (mol): " + tAM.toFixed(4)
            );
        } else {
          // Pitoisuus mass%
          var tTodM = tMArv * (tPArv / 100);
          var tTih = laskeTiheys(tObj, tPArv);
          var tMas = tTodM * tTih;
          tAM = (tMas * 1000) / tObj.M;
          console.log(
            "Torj. aine tilavuus: " + tTodM.toFixed(4)
            );
          console.log(
            "Tiheys: " + tTih.toFixed(4)
            );
          console.log(
            "Massa: " + tMas.toFixed(4)
            );
          console.log(
            "Ainemäärä (mol): " + tAM.toFixed(4)
            );
        }
      } else {
        // Massa annettu
        if (tPYks === "m") {
          // Pitoisuus mass%
          var tTodM = tMArv * (tPArv / 100);
          tAM = (tTodM * 1000) / tObj.M;
          console.log(
            "Torj. aine massa: " + tTodM.toFixed(4)
            );
          console.log(
            "Ainemäärä (mol): " + tAM.toFixed(4)
            );
        } else {
          // Pitoisuus vol%
          if (!isFinite(tKokTih) || tKokTih <= 0) {
            alert("Laskua ei voi suorittaa ilman tiheyttä, kun käytetään massaa ja tilavuus-%. Täytä torjuttavan aineen tiheyden kenttä (kg/L).");
            return;
          }
          var tTodV = (tMArv / tKokTih) * (tPArv / 100);
          var tMas = tTodV * tKokTih;
          tAM = (tMas * 1000) / tObj.M;
          console.log(
            "Torj. aine tilavuus: " + tTodV.toFixed(4)
            );
          console.log(
            "Massa: " + tMas.toFixed(4)
            );
          console.log(
            "Ainemäärä (mol): " + tAM.toFixed(4)
            );
        }
      }
    } else {
      throw new Error("Jokin meni pieleen. Tarkista kaikki syötteet.");
    }
    // Torjuttavan aineen ainemäärä kaikilla eri syöteyhdistelmillä
    

    var nAInput = document.getElementById("neutraloivat-aineet");
    if (!nAInput) {
      nAInput = window.prompt(
        "Neutraloivan aineen kenttä on tyhjä. Anna neutraloivan aineen nimi, kaava tai YK-numero:"
      );
    }
    if (nAInput === null) {
      alert("Käyttäjä peruutti syötteen.");
      return;
    }
    var nAine = nAInput.value || nAInput;
    if (!nAine) {
      alert("Neutraloivan aineen kenttä on tyhjä.");
      return;
    }
    var nObj = findAineByIdentifier(nAine);
    if (!nObj) {
      alert("Neutraloivaa ainetta ei löytynyt: " + nAine);
      return;
    }
    var nLuku = nObj.H || nObj.OH;
    var nKer = tLuku / nLuku;
    var nAM = tAM * nKer;

    if (tObj.tyyppi == nObj.tyyppi) {
      alert(
        "Aineet eivät voi olla samaa tyyppiä (kumpikin on " + tObj.tyyppi + ")."
      );
      return;
    }
    // Tarkistaa onko torjuttava aine ja neutraloiva aine eri tyyppiä

    nPArv = parseNumber(
      document.getElementById("neutraloiva-pitoisuus-arvo")?.value
    );
    nPYks =
      document.getElementById("neutraloiva-pitoisuus-yksikko")?.value || "m";
    if (!isFinite(nPArv) || nPArv <= 0 || nPArv > 100) {
      alert("Anna neutraloivan aineen pitoisuus 0-100.");
      return;
    }
    nPYks = nPYks === "mas" ? "m" : "v";
    var nMas = (nAM * nObj.M) / 1000;
    var nKokTih = parseNumber(document.getElementById("neutraloiva-tiheys")?.value);
    

    // Laskee ja tulostaa neutraloivan aineen massan

    if (nPArv === 100) {
      var nKokMas = nMas;
      var nTih = laskePuhdasTiheys(nObj);
      var nKokV = nMas / nTih;
      console.log(
        "Neut. aine tiheys: " + nTih.toFixed(4)
      );
      console.log(
        "Tulos: " +
          nKokMas.toFixed(4) +
          " kg, tai " +
          nKokV.toFixed(4) +
          " L."
      );
    } else if (nPArv < 100) {
      if (nPYks === "v") {
        // Pitoisuus vol%
        var nTih = laskePuhdasTiheys(nObj);
        var nTodV = nMas / nTih;
        var nKokV = nTodV / (nPArv / 100);
        if (!isFinite(nKokTih) || nKokTih <= 0) {
          alert("Laskettu vain tilavuus. Neutraloivan aineen massaa ei voi laskea ilman tiheyttä, kun käytetään tilavuus-%. Jos tarvitset aineen massaa, täytä neutraloivan aineen tiheyden kenttä (kg/L).");
        }
        var nKokMas = nKokV * nKokTih;
        console.log(
          "Neut. aine puhdas tiheys: " + nTih.toFixed(4)
          );
        console.log(
          "Tilavuus: " + nTodV.toFixed(4)
          );
        console.log(
          "Tulos: " +
          nKokMas.toFixed(4) +
          " kg, tai " +
          nKokV.toFixed(4) +
          " L."
        );
      } else {
        // Pitoisuus massa%
        var nKokMas = nMas / (nPArv / 100);
        var nTih = laskeTiheys(nObj, nPArv);
        var nKokV = nKokMas / nTih;
        console.log(
          "Neut. aine massa: " + nMas.toFixed(4)
        );
        console.log(
          "Tiheys: " + nTih.toFixed(4)
        );
        console.log(
          "Tulos: " +
          nKokMas.toFixed(4) +
          " kg, tai " +
          nKokV.toFixed(4) +
          " L."
        );
      }
    } else {
      throw new Error("Jokin meni pieleen. Tarkista kaikki syötteet.");
    }
    var result = {
      torjuttava: {
        input: tAineVal,
        aine: tObj.nimi[0],
        määrä: tMArv,
        määräYks: tMYks,
        pitoisuus: tPArv,
        pitoisuusYks: tPYks,
        ainemäärä: tAM,
      },
      neutraloiva: {
        input: nAine,
        aine: nObj.nimi[0],
        pitoisuus: nPArv,
        pitoisuusYks: nPYks,
        ainemäärä: nAM,
        puhdasmassa: typeof nMas !== "undefined" ? nMas : null,
        kokonaistilavuus: typeof nKokV !== "undefined" ? nKokV : null,
        kokonaismassa: typeof nKokMas !== "undefined" ? nKokMas : null,
      }
    }
    window.calculationResult = result;
    try {
      var ev = new CustomEvent("calculationDone", { detail: result });
      window.dispatchEvent(ev);
    } catch (err) {
      // fallback for very old browsers
      try {
        var ev2 = document.createEvent("CustomEvent");
        ev2.initCustomEvent("calculationDone", true, true, result);
        window.dispatchEvent(ev2);
      } catch (e) {
        // if dispatch fails, continue silently
      }
    }

    console.log("Lasku valmis:", result);
    return result;
  } catch (err) {
    console.error("Lasku epäonnistui:", err && err.message ? err.message : err);
    alert("Laskussa tapahtui virhe. Katso lisätiedot konsolista.");
  }
}

window.startCalculation = startCalculation;