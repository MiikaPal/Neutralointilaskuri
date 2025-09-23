<!doctype html>
<html lang="fi">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Neutralointilaskuri</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                max-width: 1200px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f5f5f5;
            }
            .container {
                background: white;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                margin-bottom: 20px;
            }
            h1 {
                color: #2c3e50;
                text-align: center;
                margin-bottom: 30px;
            }
            h2 {
                color: #34495e;
                border-bottom: 2px solid #3498db;
                padding-bottom: 10px;
            }
            .buttons {
                text-align: center;
                margin: 20px 0;
            }
            button {
                background-color: #3498db;
                color: white;
                border: none;
                padding: 12px 24px;
                margin: 0 10px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
                transition: background-color 0.3s;
            }
            button:hover {
                background-color: #2980b9;
            }
            .results {
                background-color: #ecf0f1;
                padding: 20px;
                border-radius: 5px;
                margin: 20px 0;
                border-left: 4px solid #3498db;
            }
            .results h3 {
                margin-top: 0;
                color: #2c3e50;
            }
            .results p {
                margin: 10px 0;
                line-height: 1.6;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
                background: white;
            }
            th,
            td {
                border: 1px solid #ddd;
                padding: 12px;
                text-align: left;
            }
            th {
                background-color: #3498db;
                color: white;
                font-weight: bold;
            }
            tr:nth-child(even) {
                background-color: #f9f9f9;
            }
            tr:hover {
                background-color: #e8f4f8;
            }
            .acid {
                border-left: 4px solid #e74c3c;
            }
            .base {
                border-left: 4px solid #27ae60;
            }
            .toggle-table {
                background-color: #95a5a6;
            }
            .toggle-table:hover {
                background-color: #7f8c8d;
            }
            #substanceTable {
                display: none;
            }
            .error {
                background-color: #e74c3c;
                color: white;
                padding: 10px;
                border-radius: 5px;
                margin: 10px 0;
            }
            .form-section {
                background-color: #f8f9fa;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
                border: 1px solid #e9ecef;
            }
            .form-section h3 {
                margin-top: 0;
                color: #2c3e50;
                border-bottom: 1px solid #bdc3c7;
                padding-bottom: 8px;
            }
            .form-group {
                margin: 15px 0;
                display: flex;
                align-items: center;
                gap: 10px;
                flex-wrap: wrap;
            }
            .form-group label {
                font-weight: bold;
                color: #34495e;
                min-width: 120px;
                flex-shrink: 0;
            }
            .form-group input,
            .form-group select {
                padding: 8px 12px;
                border: 1px solid #bdc3c7;
                border-radius: 4px;
                font-size: 14px;
                flex: 1;
                min-width: 100px;
            }
            .form-group input:focus,
            .form-group select:focus {
                outline: none;
                border-color: #3498db;
                box-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
            }
            .form-group select[id$="Unit"],
            .form-group select[id$="Type"] {
                flex: 0 0 auto;
                width: auto;
                min-width: 80px;
            }

            /* Styling for substance select options */
            select option[data-type="happo"] {
                background-color: #ffeaea;
                color: #c0392b;
            }

            select option[data-type="emäs"] {
                background-color: #eafaf1;
                color: #27ae60;
            }

            /* Enhance substance selects */
            #targetSubstance,
            #neutralizingSubstance {
                font-family: monospace;
                font-size: 13px;
            }

            @media (max-width: 768px) {
                .form-group {
                    flex-direction: column;
                    align-items: stretch;
                }
                .form-group label {
                    min-width: auto;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🧪 Neutralointilaskuri</h1>
            <p style="text-align: center; color: #7f8c8d">
                Laske kuinka paljon neutraloivaa ainetta tarvitset kemiallisen
                aineen neutralointiin
            </p>

            <form id="calculationForm">
                <h2>📝 Laskentaparametrit</h2>

                <div class="form-section">
                    <h3>🧪 Torjuttava aine</h3>
                    <div class="form-group">
                        <label for="targetSubstance">Valitse aine:</label>
                        <select id="targetSubstance" required>
                            <option value="">-- Valitse aine --</option>
                        </select>
                    </div>
                    <small
                        style="
                            color: #7f8c8d;
                            margin-left: 130px;
                            display: block;
                        "
                    >
                        🔴 = Happo, 🟢 = Emäs. Valitse eri tyyppisiä aineita
                        neutralointiin.
                    </small>
                    <div class="form-group">
                        <label for="targetAmount">Määrä:</label>
                        <input
                            type="number"
                            id="targetAmount"
                            step="0.01"
                            min="0.01"
                            required
                        />
                        <select id="targetAmountUnit">
                            <option value="L">L</option>
                            <option value="kg">kg</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="targetConcentration">Pitoisuus (%):</label>
                        <input
                            type="number"
                            id="targetConcentration"
                            step="0.01"
                            min="0.01"
                            max="100"
                            value="100"
                            required
                        />
                        <select id="targetConcentrationType">
                            <option value="m">massa%</option>
                            <option value="v">tilavuus%</option>
                        </select>
                    </div>
                    <div
                        class="form-group"
                        id="targetDensityGroup"
                        style="display: none"
                    >
                        <label for="targetDensity">Tiheys (kg/L):</label>
                        <input
                            type="number"
                            id="targetDensity"
                            step="0.001"
                            min="0.001"
                        />
                    </div>
                </div>

                <div class="form-section">
                    <h3>⚗️ Neutraloiva aine</h3>
                    <div class="form-group">
                        <label for="neutralizingSubstance">Valitse aine:</label>
                        <select id="neutralizingSubstance" required>
                            <option value="">-- Valitse aine --</option>
                        </select>
                    </div>
                    <small
                        style="
                            color: #7f8c8d;
                            margin-left: 130px;
                            display: block;
                        "
                    >
                        Valitse eri tyyppi kuin torjuttava aine (happo ↔ emäs).
                    </small>
                    <div class="form-group">
                        <label for="neutralizingConcentration"
                            >Pitoisuus (%):</label
                        >
                        <input
                            type="number"
                            id="neutralizingConcentration"
                            step="0.01"
                            min="0.01"
                            max="100"
                            value="100"
                            required
                        />
                        <select id="neutralizingConcentrationType">
                            <option value="m">massa%</option>
                            <option value="v">tilavuus%</option>
                        </select>
                    </div>
                    <div
                        class="form-group"
                        id="neutralizingDensityGroup"
                        style="display: none"
                    >
                        <label for="neutralizingDensity">Tiheys (kg/L):</label>
                        <input
                            type="number"
                            id="neutralizingDensity"
                            step="0.001"
                            min="0.001"
                        />
                    </div>
                </div>

                <div class="buttons">
                    <button type="submit">Laske neutralointi</button>
                    <button type="reset">Tyhjennä lomake</button>
                    <button
                        type="button"
                        onclick="toggleTable()"
                        class="toggle-table"
                    >
                        Näytä/Piilota ainetaulukko
                    </button>
                </div>
            </form>

            <div id="substanceTable">
                <h2>📋 Saatavilla olevat aineet</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Tyyppi</th>
                            <th>Nimi</th>
                            <th>Kaava</th>
                            <th>YK-numero</th>
                            <th>Moolimassa (g/mol)</th>
                            <th>H+ / OH-</th>
                        </tr>
                    </thead>
                    <tbody id="substanceTableBody"></tbody>
                </table>
            </div>

            <div id="results"></div>
        </div>

        <script src="substances.js"></script>
        <script>
            // Get substances from external database
            const aineet = substanceDB.getAllSubstances();

            function displayResult(message) {
                const resultsDiv = document.getElementById("results");
                if (!resultsDiv.querySelector(".results")) {
                    resultsDiv.innerHTML =
                        '<div class="results"><h3>📊 Laskennan tulos</h3></div>';
                }
                const resultsContent = resultsDiv.querySelector(".results");
                resultsContent.innerHTML += `<p>${message}</p>`;
            }

            function clearResults() {
                document.getElementById("results").innerHTML = "";
            }

            function showError(message) {
                const resultsDiv = document.getElementById("results");
                resultsDiv.innerHTML = `<div class="error">❌ Virhe: ${message}</div>`;
            }

            function toggleTable() {
                const table = document.getElementById("substanceTable");
                if (
                    table.style.display === "none" ||
                    table.style.display === ""
                ) {
                    table.style.display = "block";
                    populateTable();
                } else {
                    table.style.display = "none";
                }
            }

            function populateTable() {
                const tbody = document.getElementById("substanceTableBody");
                tbody.innerHTML = "";

                aineet.forEach((aine) => {
                    const row = tbody.insertRow();
                    row.className = aine.tyyppi === "happo" ? "acid" : "base";

                    const typeCell = row.insertCell(0);
                    typeCell.textContent =
                        aine.tyyppi === "happo" ? "🔴 Happo" : "🟢 Emäs";

                    const nameCell = row.insertCell(1);
                    nameCell.textContent = Array.isArray(aine.nimi)
                        ? aine.nimi.join(", ")
                        : aine.nimi;

                    const formulaCell = row.insertCell(2);
                    formulaCell.textContent = aine.kaava;

                    const ukCell = row.insertCell(3);
                    ukCell.textContent = aine.YK
                        ? Array.isArray(aine.YK)
                            ? aine.YK.join(", ")
                            : aine.YK
                        : "-";

                    const massCell = row.insertCell(4);
                    massCell.textContent = aine.M;

                    const ionCell = row.insertCell(5);
                    ionCell.textContent = aine.H || aine.OH;
                });
            }

            function laskeTiheys(obj, pitoisuus) {
                return substanceDB.calculateDensity(obj, pitoisuus.arvo);
            }

            function laskePuhdasTiheys(obj) {
                return substanceDB.calculatePureDensity(obj);
            }

            function populateSubstanceDropdowns() {
                const targetSelect = document.getElementById("targetSubstance");
                const neutralizingSelect = document.getElementById(
                    "neutralizingSubstance",
                );

                // Clear existing options
                targetSelect.innerHTML =
                    '<option value="">-- Valitse aine --</option>';
                neutralizingSelect.innerHTML =
                    '<option value="">-- Valitse aine --</option>';

                aineet.forEach((aine, index) => {
                    const name = Array.isArray(aine.nimi)
                        ? aine.nimi[0]
                        : aine.nimi;

                    // Add color indicator based on substance type
                    const indicator = aine.tyyppi === "happo" ? "🔴" : "🟢";
                    const typeText = aine.tyyppi === "happo" ? "Happo" : "Emäs";

                    const optionText = `${indicator} ${name} (${aine.kaava}) - ${typeText}`;
                    const option = new Option(optionText, index);

                    // Add data attribute for easier filtering/styling
                    option.setAttribute("data-type", aine.tyyppi);

                    targetSelect.appendChild(option.cloneNode(true));
                    neutralizingSelect.appendChild(option);
                });
            }

            function handleFormSubmit(event) {
                event.preventDefault();
                clearResults();

                try {
                    // Get form values
                    const targetIndex = parseInt(
                        document.getElementById("targetSubstance").value,
                    );
                    const targetAmount = parseFloat(
                        document.getElementById("targetAmount").value,
                    );
                    const targetAmountUnit =
                        document.getElementById("targetAmountUnit").value;
                    const targetConcentration = parseFloat(
                        document.getElementById("targetConcentration").value,
                    );
                    const targetConcentrationType = document.getElementById(
                        "targetConcentrationType",
                    ).value;
                    const targetDensity =
                        document.getElementById("targetDensity").value;

                    const neutralizingIndex = parseInt(
                        document.getElementById("neutralizingSubstance").value,
                    );
                    const neutralizingConcentration = parseFloat(
                        document.getElementById("neutralizingConcentration")
                            .value,
                    );
                    const neutralizingConcentrationType =
                        document.getElementById(
                            "neutralizingConcentrationType",
                        ).value;
                    const neutralizingDensity = document.getElementById(
                        "neutralizingDensity",
                    ).value;

                    // Validate inputs
                    if (isNaN(targetIndex) || isNaN(neutralizingIndex)) {
                        throw new Error(
                            "Valitse sekä torjuttava että neutraloiva aine.",
                        );
                    }

                    const tObj = aineet[targetIndex];
                    const nObj = aineet[neutralizingIndex];

                    if (tObj.tyyppi === nObj.tyyppi) {
                        const tName = Array.isArray(tObj.nimi)
                            ? tObj.nimi[0]
                            : tObj.nimi;
                        const nName = Array.isArray(nObj.nimi)
                            ? nObj.nimi[0]
                            : nObj.nimi;
                        const typeText =
                            tObj.tyyppi === "happo" ? "happoja" : "emäksiä";
                        throw new Error(
                            `Virhe: Sekä ${tName} että ${nName} ovat ${typeText}. Neutralointiin tarvitset yhden hapon ja yhden emäksen.`,
                        );
                    }

                    // Create data objects similar to original code
                    const tMäärä = {
                        arvo: targetAmount,
                        yksikkö: targetAmountUnit,
                    };
                    const tPitoisuus = {
                        arvo: targetConcentration,
                        yksikkö: targetConcentrationType,
                    };
                    const nPitoisuus = {
                        arvo: neutralizingConcentration,
                        yksikkö: neutralizingConcentrationType,
                    };

                    // Calculate neutralization
                    calculateNeutralization(
                        tObj,
                        nObj,
                        tMäärä,
                        tPitoisuus,
                        nPitoisuus,
                        targetDensity,
                        neutralizingDensity,
                    );
                } catch (error) {
                    showError(error.message);
                }
            }

            function calculateNeutralization(
                tObj,
                nObj,
                tMäärä,
                tPitoisuus,
                nPitoisuus,
                targetDensity,
                neutralizingDensity,
            ) {
                const tLuku = tObj.H || tObj.OH;
                const nLuku = nObj.H || nObj.OH;

                displayResult(
                    "🧪 <strong>Torjuttava aine:</strong> " +
                        (typeof tObj.nimi === "string"
                            ? tObj.nimi
                            : tObj.nimi.join(", ")) +
                        " (" +
                        tObj.kaava +
                        ")" +
                        (tObj.YK
                            ? ", YK: " +
                              (typeof tObj.YK === "string"
                                  ? tObj.YK
                                  : tObj.YK.join(", "))
                            : ""),
                );
                displayResult(
                    "⚖️ <strong>Moolimassa:</strong> " +
                        tObj.M +
                        " g/mol, <strong>" +
                        (tObj.tyyppi === "happo" ? "Anionin" : "Kationin") +
                        " varaus:</strong> " +
                        (tObj.tyyppi === "happo" ? "+" : "-") +
                        tLuku,
                );

                displayResult(
                    "📏 <strong>Torjuttavan aineen määrä:</strong> " +
                        tMäärä.arvo +
                        " " +
                        tMäärä.yksikkö,
                );

                displayResult(
                    "🔬 <strong>Torjuttavan aineen pitoisuus:</strong> " +
                        (tPitoisuus.arvo === 100
                            ? "100% (puhdas aine)"
                            : tPitoisuus.arvo +
                              (tPitoisuus.yksikkö === "m"
                                  ? " massa%"
                                  : " vol%")),
                );

                // Calculate target substance amount
                let tAinemäärä = calculateSubstanceAmount(
                    tObj,
                    tMäärä,
                    tPitoisuus,
                    targetDensity,
                );

                displayResult("<hr>");

                displayResult(
                    "🧪 <strong>Neutraloiva aine:</strong> " +
                        (typeof nObj.nimi === "string"
                            ? nObj.nimi
                            : nObj.nimi.join(", ")) +
                        " (" +
                        nObj.kaava +
                        ")" +
                        (nObj.YK
                            ? ", YK: " +
                              (typeof nObj.YK === "string"
                                  ? nObj.YK
                                  : nObj.YK.join(", "))
                            : ""),
                );
                displayResult(
                    "⚖️ <strong>Moolimassa:</strong> " +
                        nObj.M +
                        " g/mol, <strong>" +
                        (nObj.tyyppi === "happo" ? "Anionin" : "Kationin") +
                        " varaus:</strong> " +
                        (nObj.tyyppi === "happo" ? "+" : "-") +
                        nLuku,
                );

                displayResult(
                    "🔬 <strong>Neutraloivan aineen pitoisuus:</strong> " +
                        (nPitoisuus.arvo === 100
                            ? "100% (puhdas aine)"
                            : nPitoisuus.arvo +
                              (nPitoisuus.yksikkö === "m"
                                  ? " massa%"
                                  : " vol%")),
                );

                // Calculate neutralizing substance amount
                const neutralointiKerroin = tLuku / nLuku;
                const nAinemäärä = tAinemäärä * neutralointiKerroin;
                const nMassa = (nAinemäärä * nObj.M) / 1000;

                displayResult(
                    "⚖️ <strong>Neutraloivan aineen massa:</strong> " +
                        nMassa.toFixed(2) +
                        " kg",
                );
                displayResult(
                    "🧮 <strong>Neutraloivan aineen ainemäärä:</strong> " +
                        nAinemäärä.toFixed(2) +
                        " moolia",
                );

                // Calculate final result
                calculateFinalResult(
                    nObj,
                    nMassa,
                    nPitoisuus,
                    neutralizingDensity,
                );
            }

            function calculateSubstanceAmount(
                obj,
                määrä,
                pitoisuus,
                customDensity,
            ) {
                let ainemäärä;

                if (pitoisuus.arvo === 100) {
                    if (pitoisuus.yksikkö === "m") {
                        ainemäärä = (määrä.arvo * 1000) / obj.M;
                        displayResult(
                            "🧮 <strong>Torjuttavan aineen ainemäärä:</strong> " +
                                ainemäärä.toFixed(2) +
                                " moolia",
                        );
                    } else {
                        const tiheys = laskePuhdasTiheys(obj);
                        displayResult(
                            "📊 <strong>Torjuttavan aineen tiheys:</strong> " +
                                tiheys.toFixed(2) +
                                " kg/L",
                        );
                        const massa = määrä.arvo * tiheys;
                        displayResult(
                            "⚖️ <strong>Torjuttavan aineen massa:</strong> " +
                                massa.toFixed(2) +
                                " kg",
                        );
                        ainemäärä = (massa * 1000) / obj.M;
                        displayResult(
                            "🧮 <strong>Torjuttavan aineen ainemäärä:</strong> " +
                                ainemäärä.toFixed(2) +
                                " moolia",
                        );
                    }
                } else {
                    if (määrä.yksikkö === "L") {
                        if (pitoisuus.yksikkö === "v") {
                            const todellinenMäärä =
                                määrä.arvo * (pitoisuus.arvo / 100);
                            displayResult(
                                "📐 <strong>Torjuttavan aineen todellinen määrä:</strong> " +
                                    todellinenMäärä.toFixed(2) +
                                    " L",
                            );
                            const tiheys = laskePuhdasTiheys(obj);
                            displayResult(
                                "📊 <strong>Torjuttavan aineen tiheys:</strong> " +
                                    tiheys.toFixed(2) +
                                    " kg/L",
                            );
                            const massa = todellinenMäärä * tiheys;
                            displayResult(
                                "⚖️ <strong>Torjuttavan aineen massa:</strong> " +
                                    massa.toFixed(2) +
                                    " kg",
                            );
                            ainemäärä = (massa * 1000) / obj.M;
                        } else {
                            const todellinenMäärä =
                                määrä.arvo * (pitoisuus.arvo / 100);
                            displayResult(
                                "📐 <strong>Torjuttavan aineen todellinen määrä:</strong> " +
                                    todellinenMäärä.toFixed(2) +
                                    " L",
                            );
                            const tiheys = laskeTiheys(obj, pitoisuus);
                            displayResult(
                                "📊 <strong>Torjuttavan aineen tiheys:</strong> " +
                                    tiheys.toFixed(2) +
                                    " kg/L",
                            );
                            const massa = todellinenMäärä * tiheys;
                            displayResult(
                                "⚖️ <strong>Torjuttavan aineen massa:</strong> " +
                                    massa.toFixed(2) +
                                    " kg",
                            );
                            ainemäärä = (massa * 1000) / obj.M;
                        }
                        displayResult(
                            "🧮 <strong>Torjuttavan aineen ainemäärä:</strong> " +
                                ainemäärä.toFixed(2) +
                                " moolia",
                        );
                    } else {
                        if (pitoisuus.yksikkö === "m") {
                            const todellinenMäärä =
                                määrä.arvo * (pitoisuus.arvo / 100);
                            displayResult(
                                "📐 <strong>Torjuttavan aineen todellinen määrä:</strong> " +
                                    todellinenMäärä.toFixed(2) +
                                    " kg",
                            );
                            ainemäärä = (todellinenMäärä * 1000) / obj.M;
                            displayResult(
                                "🧮 <strong>Torjuttavan aineen ainemäärä:</strong> " +
                                    ainemäärä.toFixed(2) +
                                    " moolia",
                            );
                        } else {
                            if (!customDensity) {
                                throw new Error(
                                    "Tiheys vaaditaan kun käytetään kg ja tilavuusprosenttia.",
                                );
                            }
                            const kokonaisTiheys = parseFloat(customDensity);
                            if (
                                !isFinite(kokonaisTiheys) ||
                                kokonaisTiheys <= 0
                            ) {
                                throw new Error(
                                    "Anna positiivinen numero tiheydelle.",
                                );
                            }
                            const todellinenMäärä =
                                (määrä.arvo / kokonaisTiheys) *
                                (pitoisuus.arvo / 100);
                            displayResult(
                                "📐 <strong>Torjuttavan aineen todellinen määrä:</strong> " +
                                    todellinenMäärä.toFixed(2) +
                                    " L",
                            );
                            const tiheys = laskePuhdasTiheys(obj);
                            displayResult(
                                "📊 <strong>Torjuttavan aineen tiheys:</strong> " +
                                    tiheys.toFixed(2) +
                                    " kg/L",
                            );
                            const massa = todellinenMäärä * tiheys;
                            displayResult(
                                "⚖️ <strong>Torjuttavan aineen massa:</strong> " +
                                    massa.toFixed(2) +
                                    " kg",
                            );
                            ainemäärä = (massa * 1000) / obj.M;
                            displayResult(
                                "🧮 <strong>Torjuttavan aineen ainemäärä:</strong> " +
                                    ainemäärä.toFixed(2) +
                                    " moolia",
                            );
                        }
                    }
                }
                return ainemäärä;
            }

            function calculateFinalResult(
                nObj,
                nMassa,
                nPitoisuus,
                neutralizingDensity,
            ) {
                if (nPitoisuus.arvo === 100) {
                    const nKokonaisMassa = nMassa;
                    const nKokonaisTilavuus = nMassa / laskePuhdasTiheys(nObj);
                    displayResult("<hr>");
                    displayResult(
                        "🎯 <strong>LOPPUTULOS:</strong> Neutraloivaa ainetta tarvitaan <strong>" +
                            nKokonaisMassa.toFixed(2) +
                            " kg</strong>, eli <strong>" +
                            nKokonaisTilavuus.toFixed(2) +
                            " L</strong>.",
                    );
                } else {
                    if (nPitoisuus.yksikkö === "v") {
                        const nTiheys = laskePuhdasTiheys(nObj);
                        displayResult(
                            "📊 <strong>Neutraloivan aineen tiheys:</strong> " +
                                nTiheys.toFixed(2) +
                                " kg/L",
                        );
                        const nTilavuus = nMassa / nTiheys;
                        displayResult(
                            "📐 <strong>Neutraloivan aineen tilavuus:</strong> " +
                                nTilavuus.toFixed(2) +
                                " L",
                        );
                        const nKokonaisTilavuus =
                            nTilavuus / (nPitoisuus.arvo / 100);

                        if (!neutralizingDensity) {
                            throw new Error(
                                "Neutraloivan aineen tiheys vaaditaan.",
                            );
                        }
                        const nKokonaisTiheys = parseFloat(neutralizingDensity);
                        if (
                            !isFinite(nKokonaisTiheys) ||
                            nKokonaisTiheys <= 0
                        ) {
                            throw new Error(
                                "Anna positiivinen numero neutraloivan aineen tiheydelle.",
                            );
                        }
                        const nKokonaisMassa =
                            nKokonaisTilavuus * nKokonaisTiheys;
                        displayResult("<hr>");
                        displayResult(
                            "🎯 <strong>LOPPUTULOS:</strong> Neutraloivaa ainetta tarvitaan <strong>" +
                                nKokonaisMassa.toFixed(2) +
                                " kg</strong>, eli <strong>" +
                                nKokonaisTilavuus.toFixed(2) +
                                " L</strong>.",
                        );
                    } else {
                        const nKokonaisMassa = nMassa / (nPitoisuus.arvo / 100);

                        if (!neutralizingDensity) {
                            throw new Error(
                                "Neutraloivan aineen tiheys vaaditaan.",
                            );
                        }
                        const nKokonaisTiheys = parseFloat(neutralizingDensity);
                        if (
                            !isFinite(nKokonaisTiheys) ||
                            nKokonaisTiheys <= 0
                        ) {
                            throw new Error(
                                "Anna positiivinen numero neutraloivan aineen tiheydelle.",
                            );
                        }
                        const nKokonaisTilavuus =
                            nKokonaisMassa / nKokonaisTiheys;
                        displayResult("<hr>");
                        displayResult(
                            "🎯 <strong>LOPPUTULOS:</strong> Neutraloivaa ainetta tarvitaan <strong>" +
                                nKokonaisMassa.toFixed(2) +
                                " kg</strong>, eli <strong>" +
                                nKokonaisTilavuus.toFixed(2) +
                                " L</strong>.",
                        );
                    }
                }
            }

            function handleDensityFieldVisibility() {
                // Show/hide density fields based on concentration type and amount unit
                const targetConcentration = parseFloat(
                    document.getElementById("targetConcentration").value,
                );
                const targetConcentrationType = document.getElementById(
                    "targetConcentrationType",
                ).value;
                const targetAmountUnit =
                    document.getElementById("targetAmountUnit").value;
                const targetDensityGroup =
                    document.getElementById("targetDensityGroup");

                const neutralizingConcentration = parseFloat(
                    document.getElementById("neutralizingConcentration").value,
                );
                const neutralizingConcentrationType = document.getElementById(
                    "neutralizingConcentrationType",
                ).value;
                const neutralizingDensityGroup = document.getElementById(
                    "neutralizingDensityGroup",
                );

                // Target substance density field
                if (
                    targetConcentration < 100 &&
                    targetAmountUnit === "kg" &&
                    targetConcentrationType === "v"
                ) {
                    targetDensityGroup.style.display = "block";
                } else {
                    targetDensityGroup.style.display = "none";
                }

                // Neutralizing substance density field
                if (neutralizingConcentration < 100) {
                    neutralizingDensityGroup.style.display = "block";
                } else {
                    neutralizingDensityGroup.style.display = "none";
                }
            }

            // Initialize page on load
            window.onload = function () {
                populateTable();
                populateSubstanceDropdowns();

                // Add form event listener
                document
                    .getElementById("calculationForm")
                    .addEventListener("submit", handleFormSubmit);

                // Add event listeners for dynamic density field visibility
                document
                    .getElementById("targetConcentration")
                    .addEventListener("input", handleDensityFieldVisibility);
                document
                    .getElementById("targetConcentrationType")
                    .addEventListener("change", handleDensityFieldVisibility);
                document
                    .getElementById("targetAmountUnit")
                    .addEventListener("change", handleDensityFieldVisibility);
                document
                    .getElementById("neutralizingConcentration")
                    .addEventListener("input", handleDensityFieldVisibility);
                document
                    .getElementById("neutralizingConcentrationType")
                    .addEventListener("change", handleDensityFieldVisibility);

                // Initial call to set proper visibility
                handleDensityFieldVisibility();
            };
        </script>
    </body>
</html>
