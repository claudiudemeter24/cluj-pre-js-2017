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
