interviewApp.EvaluationsTableHeader = {
    init(option) {
        const headings = [];
        option.headings.forEach((el) => {
            const generatedEl = `<th class="details_button">${el}</th>`;
            headings.push(generatedEl);
        });
        const headingsEl = headings.join('');
        return `
        <tr style="background-color: #03a8f3; color: white; font-size: 150%">
            ${headingsEl}
            <th class="details_button"></th>
            <th style="width: 40px"></th>
        </tr>
        `;
    },
    destroy() {
        document.querySelector('#evaluationsTableHeader').innerHTML = '';
    },
};

interviewApp.EvaluationsTableRow = {
    init(option) {
        return `
        <tr class="details_button">
            <td class="details_button">${option.CandName}</td>
            <td class="details_button">${option.dateForm}</td>
            <td class="details_button">${option.radioInput}</td>
            <th style="text-align: right; margin-right: 10px">Detalii</th>
            <td style="width: 40px">
                <div id="${option.id}" class="detail_button">+</div>
                <div id="${`${option.id}popUp`}" class="PopUpForm">   
    
                  <div class="PopUpcontent">
                    <span class="closePopUp">&times;</span>
    
                    <table class="popUpTable">
                        <caption class="popUpTableCaption">Candidate details</caption>
                        <tr>
                            <th>Candidate</th>
                            <td colspan="2">${option.CandName}</td>
                        </tr>
                        <tr>
                            <th>Interviewer</th>
                            <td colspan="2">${option.IntervName}</td>
                        </tr>
                        <tr>
                        <th>Date</th>
                        <td colspan="2">${option.dateForm}</td>
                        </tr>
                        <tr>
                        <th>Technical Level</th>
                        <td colspan="2">${option.radioInput}</td>
                        </tr>
                        <tr>
                        <th>Should the candidate be hired?</th>
                        <td colspan="2">${option.beHired}</td>
                        </tr>
                        <tr>
                        <th>General Impression</th>
                        <td colspan="2">${option.impression}</td>
                        </tr>
                        <tr>
                        <th>Workflow, Leadership &amp Soft Skills</th>
                        <td colspan="2">${option.workLeaderSkill}</td>
                        </tr>
                        <tr>
                        <th rowspan="6">Technologies</th>
                        <td style="width: 15%">${option.legend}</td>
                        <td>${option}</td>
                        </tr>
                        <tr>
                        <td style="width: 15%">${option.legend}</td>
                        <td><p>afasdfasd fdasfdasf asdf adsf asdf dasf das das fdas fsad fdas fdsa fda fds gdfsg dfs dfsh dfsg dfs gdfs gdfs gdfs gdfs gdfs gdfs gdfs gdf grewr rg ewrg dfsb gdfsg dfsg dsfg dfsg dfs gdfs gdfs gdfs gdfs gdfs dfs gdsf gdfs gdsf gdfs gdfs </P></td>
                        </tr>
                        <tr>
                        <td style="width: 15%">${option.legend}</td>
                        <td>${option}</td>
                        </tr>
                        <tr>
                        <td style="width: 15%">${option.legend}</td>
                        <td>${option}</td>
                        </tr>
                        <tr>
                        <td style="width: 15%">${option.legend}</td>
                        <td>${option}</td>
                        </tr>
                        <tr>
                        <td style="width: 15%">${option.legend}</td>
                        <td>${option}</td>
                        </tr>
                  </table>
                  </div>
                </div>
            </td>
        </tr>
        `;
    },
};

interviewApp.EvaluationsTableBody = {
    init(option) {
        const rowsElements = option.items.map(rowObj =>
            interviewApp.EvaluationsTableRow.init(rowObj),
        );
        const rowsEl = rowsElements.join('');
        return `
        ${rowsEl}
        `;
    },
    destroy() {
        document.querySelector('#evaluationsTableBody').innerHTML = '';
    },
};

interviewApp.EvaluationsTable = {
    init(option) {
        document.querySelector('#evaluationsTable').innerHTML =
        `
        <section class="table_body_section">
            <table id="test" class="table">
                ${interviewApp.EvaluationsTableHeader.init({
        headings: option.itemHeadings,
    })}
                ${interviewApp.EvaluationsTableBody.init({
        items: option.items,
    })}
            </table>
        </section>
        `;
    },
    destroy() {
        document.querySelector('#evaluationsTable').innerHTML = '';
    },
};

interviewApp.EvaluationsPage = {
    init() {
        const headings = ['Nume', 'Data', 'Nivel'];
        const rows = JSON.parse(localStorage.getItem('evaluationsList'));
        document.querySelector('#evaluationsPage').innerHTML =
        `
        <div id="nav">
        </div>
        <div id="evaluationsTable">
        </div>
        <div id="footer">
        </div>
        `;
        interviewApp.NAV.init('Eval');
        interviewApp.EvaluationsTable.init({
            items: rows,
            itemHeadings: headings,
        });
        interviewApp.Footer.init();
    },
    destroy() {
        document.querySelector('#evaluationsPage').innerHTML = '';
    },
};
