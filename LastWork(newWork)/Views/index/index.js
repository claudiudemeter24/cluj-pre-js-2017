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

const goEvalPag = function () {
    document.querySelector('#app').innerHTML = EvaluationsPage();
    const NAVnewEvalButton = document.querySelector('#newEvalButton');
    NAVnewEvalButton.addEventListener('click', goNewEvalPag);
    const logoutButton = document.querySelector('#logoutButton');
    logoutButton.addEventListener('click', logout);
    // const detailsButton = document.querySelector('.detail_button');
    // detailsButton.addEventListener('click', detailForm);
    detailForm();
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
    evalObject.id = (evalObject.CandName + evalObject.dateForm).replace(/\s/g, '');
    evaluationsList.push(evalObject);
    localStorage.setItem('evaluationsList', JSON.stringify(evaluationsList));
    goEvalPag();
};

const detailForm = function () {
    const popUpForm = document.getElementById('PopUp');

    const btns = document.getElementsByClassName('detail_button');
    const btnsArray = Array.prototype.slice.call(btns);
    const span = document.querySelector('.closePopUp');

    btnsArray.forEach((btn) => {
        const buttonDetails = function () {
            popUpForm.style.display = 'block';
        };
        btn.addEventListener('click', buttonDetails);
    });

    const PopUpExit = function () {
        popUpForm.style.display = 'none';
    };
    span.addEventListener('click', PopUpExit);

    window.onclick = function (event) {
        if (event.target === popUpForm) {
            popUpForm.style.display = 'none';
        }
    };
};
