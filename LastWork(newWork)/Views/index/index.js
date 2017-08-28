window.addEventListener('load', () => { 
    document.querySelector('#app').innerHTML = LoginPage({});
    const form = document.querySelector("#loginFormId");
    form.addEventListener("submit", formEvent); 
});

const formEvent = function (event){
    event.stopPropagation ();
    event.preventDefault ();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    if(checkUserDatas(username, password)){
        event.target.submit();
    }
};

const checkUserDatas = function(user, pass){
    if(user === 'claudiu' && pass === '12345'){
        return true;
    } else {
        return false;
    }
}


