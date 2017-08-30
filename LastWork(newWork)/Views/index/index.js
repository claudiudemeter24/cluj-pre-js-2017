window.addEventListener('load', () => {
    document.querySelector('#app').innerHTML = LoginPage();
    const form = document.querySelector('#loginFormId');
    form.addEventListener('submit', formEvent);
});

const logpage = function () {
    document.querySelector('#app').innerHTML = LoginPage();
};

const goEvalPag = function () {
    document.querySelector('#app').innerHTML = EvaluationsPage();
    const NAV_newEvalButton = document.querySelector('#newEvalButton');
    NAV_newEvalButton.addEventListener('click', goNewEvalPag);
    const logoutButton = document.querySelector('#logoutButton');
    logoutButton.addEventListener('click', logpage);
};

const goNewEvalPag = function () {
    document.querySelector('#app').innerHTML = NewEvaluationPage();
    const NAV_EvalButton = document.querySelector('#EvalButton');
    NAV_EvalButton.addEventListener('click', goEvalPag);
    const logoutButton = document.querySelector('#logoutButton');
    logoutButton.addEventListener('click', logpage);
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
        return true;
    }
    return false;
};

const aboutObject = function (event) {
    event.stopPropagation();
    event.preventDefault();

    const dynamic = {};
    const dropDowns = document.querySelectorAll('select');
    const textAreas = document.querySelectorAll('textarea');
    const candInputs = document.querySelectorAll('input');
    console.log(dropDowns);
    dropDowns.forEach((e) => {
        dynamic[e.name] = e.value;
    });
    textAreas.forEach((e) => {
        dynamic[e.name] = e.value;
    });
    candInputs.forEach((e) => {
        if (e.type === 'text' || e.type === 'date' || e.checked) {
            dynamic[e.name] = e.value;
        }
    });

    console.log(dynamic);

    const StorageLength = localStorage.length;
    let evaluationsList = [];
    if (StorageLength !== 0) {
        evaluationsList = JSON.parse(localStorage.getItem('evaluationsList'));
    }
    evaluationsList.push(dynamic);
    localStorage.setItem('evaluationsList', JSON.stringify(evaluationsList));
};
