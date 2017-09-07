const interviewApp = {};
interviewApp.forLoginPage = {
    init() {
        document.querySelector('#app').innerHTML =
    `
    <div id="loginPage">
    </div>
    `;
        interviewApp.LoginPage.init();
        const form = document.querySelector('#loginFormId');
        form.addEventListener('submit', interviewApp.formEvent);
    },
    destroy() {
        document.querySelector('#app').innerHTML = '';
    },
};

window.addEventListener('load', () => {
    const LoggedIn = !!sessionStorage.getItem('userName');
    if (!LoggedIn) {
        interviewApp.forLoginPage.init();
    } else {
        interviewApp.goEvalPag.init();
    }

    console.log(localStorage);
});

interviewApp.logout = function () {
    sessionStorage.removeItem('userName');
    interviewApp.forLoginPage.init();
};

interviewApp.goEvalPag = {
    init() {
        document.querySelector('#app').innerHTML =
        `
        <div id="evaluationsPage">
        </div>
        `;
        interviewApp.EvaluationsPage.init();
        const NAVnewEvalButton = document.querySelector('#newEvalButton');
        NAVnewEvalButton.addEventListener('click', interviewApp.goNewEvalPag.init);
        const logoutButton = document.querySelector('#logoutButton');
        logoutButton.addEventListener('click', interviewApp.logout);
        interviewApp.detailForm();
    },
    destroy() {
        document.querySelector('#app').innerHTML = '';
    },
};

interviewApp.goNewEvalPag = {
    init() {
        document.querySelector('#app').innerHTML =
        `
        <div id="newEvaluationPage">
        </div>
        `;
        interviewApp.NewEvaluationPage.init();
        const NAVEvalButton = document.querySelector('#EvalButton');
        NAVEvalButton.addEventListener('click', interviewApp.goEvalPag.init);
        const logoutButton = document.querySelector('#logoutButton');
        logoutButton.addEventListener('click', interviewApp.logout);
        const submitButton = document.querySelector('#submitButton');
        submitButton.addEventListener('click', interviewApp.aboutObject);
    },
    destroy() {
        document.querySelector('#app').innerHTML = '';
    },
};

interviewApp.formEvent = function (event) {
    event.stopPropagation();
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    let logPromise = new Promise(((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'src/Data/loginDatas.json', true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status < 400) {
                    let loginDataResponse = xhr.responseText;
                    try {
                        loginDataResponse = JSON.parse(loginDataResponse);
                        resolve(loginDataResponse);
                    } catch (e) {
                        reject('Cannot parse JSON');
                    }
                } else {
                    reject('Cannot get JSON info');
                }
            }
        }
    }));

    logPromise.then((loginData) => {
        if (interviewApp.checkUserDatas(username, password, loginData)) {
            interviewApp.goEvalPag.init();
        }
        else{
            alert('Invalid user datas')
        }
    }).catch((err) => {
        alert(err);
    });
};

interviewApp.checkUserDatas = function (user, pass, UserDataObject) {
    if (user === UserDataObject.username && pass === UserDataObject.password) {
        sessionStorage.setItem('userName', user);
        return true;
    }
    return false;
};

interviewApp.aboutObject = function (event) {
    event.stopPropagation();
    event.preventDefault();

    const evalObject = {};
    evalObject.selectors = {};
    const dropDowns = document.querySelectorAll('select');
    const textAreas = document.querySelectorAll('textarea');
    const candInputs = document.querySelectorAll('input');
    dropDowns.forEach((e) => {
        evalObject.selectors[e.name] = e.value;
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
    interviewApp.goEvalPag.init();
};

interviewApp.detailForm = function () {
    const btns = document.getElementsByClassName('detail_button');
    const btnsArray = Array.prototype.slice.call(btns);


    btnsArray.forEach((btn) => {
        const buttonDetails = function (e) {
            const idButton = e.target.id;
            const popUpForm = document.getElementById(`${idButton}popUp`);
            popUpForm.style.display = 'block';
            const span = popUpForm.querySelector('.closePopUp');
            const PopUpExit = function () {
                popUpForm.style.display = 'none';
            };
            span.addEventListener('click', PopUpExit);
        };
        btn.addEventListener('click', buttonDetails);
    });


    window.onclick = function (event) {
        // if (event.target === popUpForm) {
        //     popUpForm.style.display = 'none';
        // }
    };
};
