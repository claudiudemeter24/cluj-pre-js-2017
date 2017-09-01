const forLoginPage = function () {
    document.querySelector('#app').innerHTML = LoginPage();
    const form = document.querySelector('#loginFormId');
    form.addEventListener('submit', formEvent);
};

window.addEventListener('load', () => {
    const LoggedIn = !!sessionStorage.getItem('userName');
    if (!LoggedIn) {
        forLoginPage();
    } else {
        goEvalPag();
    }

    console.log(localStorage);
});

const logout = function () {
    sessionStorage.removeItem('userName');
    forLoginPage();
};

const detailForm = function () {
    // const div = document.createElement('div');
    // div.appendChild = document.getElementById('detailsDivId').innerHTML;
    // document.body.appendChild(div);

    // div.style.backgroundColor = 'black';
    // div.style.position = 'absolute';
    // div.style.left = '50px';
    // div.style.top = '50px';
    // div.style.height = '10px';
    // div.style.width = '10px';

    // const detailDiv = document.createElement('div');
    // detailDiv.style.backgroundColor = 'black';
    // detailDiv.style.position = 'absolute';
    // detailDiv.style.left = '50px';
    // detailDiv.style.top = '50px';
    // detailDiv.style.height = '10px';
    // detailDiv.style.width = '10px';
    // document.getElementById('detailsDivId')[0].appendChild(detailDiv);
};

const goEvalPag = function () {
    document.querySelector('#app').innerHTML = EvaluationsPage();
    const NAVnewEvalButton = document.querySelector('#newEvalButton');
    NAVnewEvalButton.addEventListener('click', goNewEvalPag);
    const logoutButton = document.querySelector('#logoutButton');
    logoutButton.addEventListener('click', logout);
    const detailsButton = document.querySelector('.detail_button');
    detailsButton.addEventListener('click', detailForm);
};

const goNewEvalPag = function () {
    document.querySelector('#app').innerHTML = NewEvaluationPage();
    const NAVEvalButton = document.querySelector('#EvalButton');
    NAVEvalButton.addEventListener('click', goEvalPag);
    const logoutButton = document.querySelector('#logoutButton');
    logoutButton.addEventListener('click', logout);
    const submitButton = document.querySelector('#submitButton');
    submitButton.addEventListener('click', aboutObject);
};

const formEvent = function (event) {
    event.stopPropagation();
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (checkUserDatas(username, password)) {
        goEvalPag();
    }
};

const checkUserDatas = function (user, pass) {
    if (user === '1' && pass === '1') {
        sessionStorage.setItem('userName', user);
        return true;
    }
    return false;
};

const aboutObject = function (event) {
    event.stopPropagation();
    event.preventDefault();

    const evalObject = {};
    const dropDowns = document.querySelectorAll('select');
    const textAreas = document.querySelectorAll('textarea');
    const candInputs = document.querySelectorAll('input');
    dropDowns.forEach((e) => {
        evalObject[e.name] = e.value;
    });
    textAreas.forEach((e) => {
        evalObject[e.name] = e.value;
    });
    candInputs.forEach((e) => {
        if (e.type === 'text' || e.type === 'date' || e.checked) {
            evalObject[e.name] = e.value;
        }
    });

    console.log(evalObject);

    const StorageLength = localStorage.length;
    let evaluationsList = [];
    if (StorageLength !== 0) {
        evaluationsList = JSON.parse(localStorage.getItem('evaluationsList'));
    }
    evaluationsList.push(evalObject);
    localStorage.setItem('evaluationsList', JSON.stringify(evaluationsList));
    goEvalPag();
};
