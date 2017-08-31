const CandidateDetailsForm = function (option) {
    return `
    <input id="CandName" class="textbox" type="text" placeholder="Candidate" name="CandName">
    <input id="IntervName" class="textbox" type="text" placeholder="Interviewer" name="IntervName">
    <input id="dateForm" class="textbox" type="date" name="dateForm">
    `;
};

const TechnicalLevelPickerHeader = function (option) {
    const levelTitle = option.headers.map(element => `
        <span class="technicalLevel_span"> ${element} </span>
        `);
    return levelTitle.join('');
};

const TechnicalLevelPickerInputs = function (option) {
    const inputsArr = option.map(element => `
             <input type="radio" class="b" name="b" value = "${element}">
            `);
    return `
        <div class="groupRadioButtons">
        ${inputsArr.join('')}
        </div>`;
};

const TechnicalLevelPickerBody = function (option) {
    const radioList = option.columnData.map(element => `
        ${TechnicalLevelPickerInputs(element.inputLevels)}
        `);
    return radioList.join('');
};

const TechnicalLevelPicker = function (option) {
    const obj = {
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
    };

    return `
    <h1 class="boxTitle">${obj.title}</h1>
    <div id="radio_select">
        <div id="radio_select_header">
            ${TechnicalLevelPickerHeader(obj)}
        </div>
            ${TechnicalLevelPickerBody(obj)}
    </div>
    `;
};

const textArea = function (option) {
    return `
    <h1 class="boxTitle" name="${option.name}">${option.title}</h1>
    <textarea id="${option.id}" placeholder="${option.placeholder}"></textarea>
    `;
};

const textAreaSection = function (option) {
    const obj = [
        {
            title: 'Workflow, Leadership &amp Soft Skills',
            placeholder: 'The type of project that is suitable for the candidate Is guidance required for the candidate',
            name: 'textBox1',
            id: 'workLeaderSkill',
        },
        {
            title: 'Should the candidate be hired?',
            placeholder: '*required',
            name: 'textBox2',
            id: 'beHired',
        },
        {
            title: 'General Impression',
            placeholder: 'Describe the environment in which the candidate works. Describe any guidance or management experience.',
            name: 'textBox3',
            id: 'impression',
        },
    ];

    const textAreas = obj.map(element => textArea(element)).join('');

    return `
        ${textAreas}
    `;
};

const DropDownListItem = function (option) {
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

const FieldSet = function (option) {
    const fieldSetList = option.items.map(element => DropDownListItem(element)).join('');

    return `
    <fieldset>
    <legend>${option.legend}</legend>
        <ul>
            ${fieldSetList}
        </ul>
    </fieldset>
    `;
};

const DropdownSelector = function (option) {
    const dropDowns = [{
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
    }];

    const fieldSetListString = dropDowns.map(element => FieldSet(element)).join('');
    return fieldSetListString;
};

const CandidatePage = function (option) {
    return `
    <section class="body_section">
    <form id="candForm">
    ${CandidateDetailsForm({})}
    ${TechnicalLevelPicker({})}
    ${textAreaSection({})}
    ${DropdownSelector({})}
    <input id="submitButton" type="submit" value="Submit" class="submit_button" />
    </form>
    </section>
    `
    newEvaluationPageValues;
};

const NewEvaluationPage = function (option) {
    return `
    ${NAV('newEval')}
    ${CandidatePage({})}
    ${Footer()}
    `;
};

// window.onload = function () {
//     document.querySelector('#app').innerHTML = NewEvaluationPage({});
// };
