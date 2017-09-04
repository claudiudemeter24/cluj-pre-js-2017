function EvaluationsTableHeader(option) {
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
}

function EvaluationsTableRow(option) {
    return `
    <tr class="details_button">
        <td class="details_button">${option.CandName}</td>
        <td class="details_button">${option.dateForm}</td>
        <td class="details_button">${option.b}</td>
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
}

function EvaluationsTableBody(option) {
    /* const rowsElements = []
    option.items.forEach(function(rowObj){
        const generatedRow = EvaluationsTableRow(rowObj)
        rowsElements.push(generatedRow)
    })
    const rowsEl = rowsElements.join('')
    return `
    ${rowsEl}
    `
    */

    const rowsElements = option.items.map((rowObj) => 
         EvaluationsTableRow(rowObj)
        //rowsElements.push(generatedRow)
    );
    const rowsEl = rowsElements.join('');
    return `
    ${rowsEl}
    `;
}

function EvaluationsTable(option) {
    return `
    <section class="table_body_section">
    <table class="table">
            ${EvaluationsTableHeader({
        headings: option.itemHeadings,
    })}
            ${EvaluationsTableBody({
        items: option.items,
    })}
    </table>
    </section>
    `;
}

function EvaluationsPage(option) {
    const headings = ['Nume', 'Data', 'Nivel'];
    const rows = JSON.parse(localStorage.getItem('evaluationsList'));
    // const rows = [
    //     {
    //         name: 'Popescu Adrian',
    //         technology: 'Javascript',
    //         level: 'Mid 2',
    //     },
    //     {
    //         name: 'Dragan Roxana',
    //         technology: 'PHP',
    //         level: 'Mid 1',
    //     },
    //     {
    //         name: 'Florescu Mihai',
    //         technology: 'Javascript',
    //         level: 'Junior 3',
    //     },
    //     {
    //         name: 'Gheorghe Andrei',
    //         technology: 'Ruby',
    //         level: 'Senior 1',
    //     },
    // ];


    return `
    ${NAV('Eval')}
    ${EvaluationsTable({
        items: rows,
        itemHeadings: headings,
    })}
    ${Footer()}
    `;
}

// window.onload = function () {
//     const appEl = document.querySelector('#app');
//     appEl.innerHTML = EvaluationsPage();
// };
