function EvaluationsTableHeader(option){
    const headings = []
    option.headings.forEach(function(el){
        const generatedEl = `<th>${el}</th>`
        headings.push(generatedEl)
    })
    const headingsEl = headings.join('')

    return`
    <tr style="background-color: #03a8f3; color: white; font-size: 150%">
    ${headingsEl}
    <th></th>
    </tr>
    `
}

function EvaluationsTableRow(option){
    return `
    <tr>
        <td>${option.name}</td>
        <td>${option.technology}</td>
        <td>${option.level}</td>
        <th>Detalii</th>
    </tr>
    `
}

function EvaluationsTableBody(option){
  
    /*const rowsElements = []
    option.items.forEach(function(rowObj){
        const generatedRow = EvaluationsTableRow(rowObj)
        rowsElements.push(generatedRow)
    })
    const rowsEl = rowsElements.join('')
    return `
    ${rowsEl}
    `
    */

    const rowsElements = option.items.map(function(rowObj){
        return EvaluationsTableRow(rowObj)
        //rowsElements.push(generatedRow)
    })
    const rowsEl = rowsElements.join('')
    return `
    ${rowsEl}
    `
}

function EvaluationsTable(option){

    return`
    <section class="body_section">
    <table class="table">
            ${EvaluationsTableHeader({ 
                headings: option.itemHeadings
            })}
            ${EvaluationsTableBody({
                items: option.items
            })}
    </table>
    </section>
    `
}

function EvaluationsPage(option){
    const headings= ['Nume', 'Tehnologie', 'Nivel']
    const rows = [
        {
            name: 'Popescu Adrian',
            technology: 'Javascript',
            level: 'Mid 2'
        },
        {
            name: 'Dragan Roxana',
            technology: 'PHP',
            level: 'Mid 1'
        },       
        {
            name: 'Florescu Mihai',
            technology: 'Javascript',
            level: 'Junior 3'
        },        
        {
            name: 'Gheorghe Andrei',
            technology: 'Ruby',
            level: 'Senior 1'
        },
    ]


    return `
    ${NAV()}
    ${EvaluationsTable({
        items: rows,
        itemHeadings: headings
    })}
    ${Footer()}
    `
}

window.onload = function(){
    const appEl = document.querySelector('#app')
    appEl.innerHTML = EvaluationsPage()
}