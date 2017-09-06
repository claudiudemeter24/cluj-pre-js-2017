const EvaluationsTableHeader = {
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

const EvaluationsTableRow = {
    init(option) {
        return `
        <tr class="details_button">
            <td class="details_button">${option.CandName}</td>
            <td class="details_button">${option.dateForm}</td>
            <td class="details_button">${option.radioInput}</td>
            <th style="text-align: right; margin-right: 10px">Detalii</th>
            <td style="width: 40px">
                <div class="detail_button">+</div>
                <div id="PopUp" class="PopUpForm">   
    
                  <div class="PopUpcontent">
                    <span class="closePopUp">&times;</span>
    
                    <table class="popUpTable">
                        <caption class="popUpTableCaption">Candidate details</caption>
                        <tr>
                            <th>Candidate</th>
                            <td>...</td>
                        </tr>
                        <tr>
                            <th>Interviewer</th>
                            <td>...</td>
                        </tr>
                        <tr>
                        <th>Date</th>
                        <td>...</td>
                        </tr>
                        <tr>
                        <th>Technical Level</th>
                        <td>...</td>
                        </tr>
                        <tr>
                        <th>Workflow, Leadership &amp Soft Skills</th>
                        <td>...</td>
                        </tr>
                        <tr>
                        <th>Should the candidate be hired?</th>
                        <td>...</td>
                        </tr>
                        <tr>
                        <th>General Impression</th>
                        <td>...</td>
                        </tr>
                        <tr>
                        <th>Workflow, Leadership &amp Soft Skills</th>
                        <td></td>
                        </tr>
                        <tr>
                        <th>Technologies</th>
                        <td><p></p></td>
                        </tr>
                  </table>
                  </div>
                
                </div>
            </td>
        </tr>
        `;
    },
};

const EvaluationsTableBody = {
    init(option) {
        const rowsElements = option.items.map(rowObj =>
            EvaluationsTableRow.init(rowObj),
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

const EvaluationsTable = {
    init(option) {
        document.querySelector('#evaluationsTable').innerHTML =
        `
        <section class="table_body_section">
            <table id="test" class="table">
                ${EvaluationsTableHeader.init({
        headings: option.itemHeadings
    })}
                ${EvaluationsTableBody.init({
        items: option.items
    })}
            </table>
        </section>
        `;
    },
    destroy() {
        document.querySelector('#evaluationsTable').innerHTML = '';
    },
};

const EvaluationsPage = {
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
        NAV.init('Eval');
        EvaluationsTable.init({
            items: rows,
            itemHeadings: headings,
        });
        Footer.init();
    },
    destroy() {
        document.querySelector('#evaluationsPage').innerHTML = '';
    },
};
