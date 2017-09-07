interviewApp.newEvalObj = {
    TechnicalObj: {
        title: 'Technical level',
        headers: ['Trainee', 'Junior', 'Middle', 'Senior'],
        columnData: [
            {
                inputLevels: ['Trainee'],
            },
            {
                inputLevels: ['Junior 1', 'Junior 2', 'Junior 3'],
            },
            {
                inputLevels: ['Middle 1', 'Middle 2', 'Middle 3'],
            },
            {
                inputLevels: ['Senior 1', 'Senior 2', 'Senior 3'],
            },
        ],
    },


    textAreaobj: [
        {
            title: 'Should the candidate be hired?',
            placeholder: '*required',
            name: 'beHired',
            id: 'beHired',
        },
        {
            title: 'General Impression',
            placeholder: 'Describe the environment in which the candidate works. Describe any guidance or management experience.',
            name: 'impression',
            id: 'impression',
        },
        {
            title: 'Workflow, Leadership &amp Soft Skills',
            placeholder: 'The type of project that is suitable for the candidate.&#10;Is guidance required for the candidate',
            name: 'workLeaderSkill',
            id: 'workLeaderSkill',
        },
    ],

    dropDownsObj: [{
        legend: 'OOP, Design Patterns',
        items: [{
            label: 'Classes',
            name: 'classes',
        },
        {
            label: 'Exception handling',
            name: 'exceptionHandling',
        },
        {
            label: 'Version Control',
            name: 'versionControl',
        },
        {
            label: 'Access Modifiers',
            name: 'accessModifier',
        },
        {
            label: 'Design Patterns',
            name: 'designPatterns',
        },
        {
            label: 'Issue Tracking',
            name: 'issueTracking',
        },
        {
            label: 'Polymorphism',
            name: 'polymorphism',
        },
        {
            label: 'RegEx',
            name: 'regEx',
        }],
    },
    {
        legend: 'HTTP',
        items: [{
            label: 'Protocol',
            name: 'protocol',
        },
        {
            label: 'Response Codes',
            name: 'responseCodes',
        },
        {
            label: 'REST',
            name: 'rest',
        },
        {
            label: 'Headers',
            name: 'headers',
        },
        {
            label: 'Request Methods',
            name: 'requestMethods',
        },
        {
            label: 'Sessions &amp; Cookies',
            name: 'sessions',
        }],
    },
    {
        legend: 'HTML',
        items: [{
            label: 'Doctype',
            name: 'doctype',
        },
        {
            label: 'Tags',
            name: 'tags',
        },
        {
            label: 'Basic SEO',
            name: 'basicSeo',
        },
        {
            label: 'Syntax rules',
            name: 'syntaxRules',
        },
        {
            label: 'Attributes',
            name: 'attributes',
        }],
    }, {
        legend: 'CSS',
        items: [{
            label: 'Usage',
            name: 'usage',
        },
        {
            label: 'Box Modeling',
            name: 'boxModeling',
        },
        {
            label: 'CSS 3.0',
            name: 'css',
        },
        {
            label: 'Selectors',
            name: 'selectors',
        },
        {
            label: 'Styling',
            name: 'styling',
        },
        {
            label: 'Dynamic Stylesheets',
            name: 'dynamicStylesheet',
        }],
    }, {
        legend: 'Javascript',
        items: [{
            label: 'Data types &amp; variables',
            name: 'dataTypesAndVariables',
        },
        {
            label: 'Object Manipulation',
            name: 'objectManipulation',
        },
        {
            label: 'DOM Manipulation',
            name: 'domManipulation',
        },
        {
            label: 'Functions',
            name: 'functions',
        },
        {
            label: 'Templating',
            name: 'templating',
        },
        {
            label: 'Event Handling',
            name: 'eventHandling',
        },
        {
            label: 'Prototype &amp; OOP',
            name: 'prototype',
        },
        {
            label: 'Testing(unit, E2E)',
            name: 'testing',
        },
        {
            label: 'AJAX',
            name: 'ajax',
        },
        {
            label: 'Debugging',
            name: 'debugging',
        },
        {
            label: 'Websockets',
            name: 'websockets',
        },
        {
            label: 'Tooling',
            name: 'tooling',
        }, {
            label: 'Libraries',
            name: 'libraries',
        }, {
            label: 'Promises',
            name: 'promises',
        }, {
            label: 'Browser Engines',
            name: 'browserEngines',
        }, {
            label: 'Frameworks',
            name: 'frameworks',
        }],
    }, {
        legend: 'NodeJs',
        items: [{
            label: 'Backend Frameworks',
            name: 'backendFrameworks',
        },
        {
            label: 'Templating',
            name: 'ntemplating',
        },
        {
            label: 'DOM Manipulation',
            name: 'domM',
        },
        {
            label: 'Unit Testing',
            name: 'unitT',
        }],
    }],
};

interviewApp.CandidateDetailsForm = {
    init() {
        return `
    <input id="CandName" class="textbox" type="text" placeholder="Candidate" name="CandName">
    <input id="IntervName" class="textbox" type="text" placeholder="Interviewer" name="IntervName">
    <input id="dateForm" class="textbox" type="date" name="dateForm">
    `;
    },
    destroy() {
        document.querySelector('#candidateDetailsForm').innerHTML = '';
    },
};

interviewApp.TechnicalLevelPickerHeader = function (option) {
    const levelTitle = option.headers.map(element => `
        <span class="technicalLevel_span"> ${element} </span>
        `);
    return levelTitle.join('');
};

interviewApp.TechnicalLevelPickerInputs = function (option) {
    const inputsArr = option.map(element => `
             <input type="radio" class="radioInput" name="radioInput" value = "${element}">
            `);
    return `
        <div class="groupRadioButtons">
        ${inputsArr.join('')}
        </div>`;
};

interviewApp.TechnicalLevelPickerBody = function (option) {
    const radioList = option.columnData.map(element => `
        ${interviewApp.TechnicalLevelPickerInputs(element.inputLevels)}
        `);
    return radioList.join('');
};

interviewApp.TechnicalLevelPicker = {
    init() {
        const obj = interviewApp.newEvalObj.TechnicalObj;

        return `
    <h1 class="boxTitle">${obj.title}</h1>
    <div id="radio_select">
        <div id="radio_select_header">
            ${interviewApp.TechnicalLevelPickerHeader(obj)}
        </div>
            ${interviewApp.TechnicalLevelPickerBody(obj)}
    </div>
    `;
    },
    destroy() {
        document.querySelector('#technicalLevelPicker').innerHTML = '';
    },
};

interviewApp.textArea = function (option) {
    return `
    <h1 class="boxTitle">${option.title}</h1>
    <textarea id="${option.id}" name="${option.name}" placeholder="${option.placeholder}"></textarea>
    `;
};

interviewApp.textAreaSection = {
    init() {
        const obj = interviewApp.newEvalObj.textAreaobj;

        const textAreas = obj.map(element => interviewApp.textArea(element)).join('');
        return `
        ${textAreas}
        `;
    },
};

interviewApp.DropDownListItem = function (option) {
    return `
    <li>
    <label>${option.label}</label>
    <select id="${option.name}" name = "${option.name}">
        <option selected disabled> Choose </option>
        <option value="0">None</option>
        <option value="1">Low</option>
        <option value="2">Medium</option>
        <option value="3">High</option>					
    </select>
    </li>
    `;
};

interviewApp.FieldSet = function (option) {
    const fieldSetList = option.items.map(element => interviewApp.DropDownListItem(element)).join('');

    return `
    <fieldset>
    <legend id="${option.legend}">${option.legend}</legend>
        <ul>
            ${fieldSetList}
        </ul>
    </fieldset>
    `;
};

interviewApp.DropdownSelector = {
    init() {
        const dropDowns = interviewApp.newEvalObj.dropDownsObj;

        const fieldSetListString = dropDowns.map(element => interviewApp.FieldSet(element)).join('');
        return fieldSetListString;
    },
};

interviewApp.CandidatePage = {
    init() {
        return `
    <section class="body_section">
    <form id="candForm">
    <div id="candidateDetailsForm">
    ${interviewApp.CandidateDetailsForm.init()}
    </div>
    <div id="technicalLevelPicker">
    ${interviewApp.TechnicalLevelPicker.init()}
    </div>
    <div id="textAreaSection">
    ${interviewApp.textAreaSection.init()}
    </div>
    <div id="dropdownSelector">
    ${interviewApp.DropdownSelector.init()}
    </div>
    <input id="submitButton" type="submit" value="Submit" class="submit_button" />
    </form>
    </section>
    `;
    },
    destroy() {
        document.querySelector('#candidatePage').innerHTML = '';
    },
};

interviewApp.NewEvaluationPage = {
    init() {
        document.querySelector('#newEvaluationPage').innerHTML =
    `
    <div id="nav">
    </div>
    <div id="candidatePage">
    ${interviewApp.CandidatePage.init()}
    </div>
    <div id="footer">
    </div>
    `;
        interviewApp.NAV.init('newEval');
        interviewApp.Footer.init();
    },
    destroy() {
        document.querySelector('#newEvaluationPage').innerHTML = '';
    },
};
