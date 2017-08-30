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
    submitButton.addEventListener('click', conslog);
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

function check(elem) {
    return elem.checked === true;
}

const conslog = function (event) {
    event.stopPropagation();
    event.preventDefault();

    const CandidateName = document.querySelector('#CandName').value;
    const InterviewerName = document.querySelector('#IntervName').value;
    const IntervDate = document.querySelector('#dateForm').value;

    const TechnicalLevel = document.querySelectorAll('#b');
    const TechnicalLevelRadios = Array.prototype.slice.call(TechnicalLevel);
    const radioChecked = TechnicalLevelRadios.find(check).value;

    console.log(document.querySelector('#workLeaderSkill'));
    const WorkflowLeadershipSkills = document.querySelector('#workLeaderSkill').value;
    const Hired = document.querySelector('#beHired').value;
    const Impression = document.querySelector('#impression').value;

    const OOPDesignPattern = document.querySelector()

    const newEvaluationPageValues = {
        IntroDetails: {
            Candidate: CandidateName,
            Interviewer: InterviewerName,
            IntervDate: IntervDate,
        },
        TechnicalLevel: {
            Level: radioChecked,
        },
        WorkflowLeadershipSkills: {
            text: WorkflowLeadershipSkills,
        },
        Hired: {
            text: Hired,
        },
        Impression: {
            text: Impression,
        },
        OOPDesignPattern: {
            ${label}: ${value},

        }
    };

    console.log(newEvaluationPageValues);
};

const evalSubmit = function () {
    const submitButton = document.querySelector('#submitButton');
    submitButton.addEventListener('click', conslog);
};
