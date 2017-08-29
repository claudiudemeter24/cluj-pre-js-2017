const Footer = function (option) {
    return `
    <section class="footer_section">
    <footer>
        <p>Copyright@Softvision 2017</p>
    </footer>		
    </section>	
    `;
};

const NAV = function (option) {
    var evalSelected;
    var newEvalSelected;
    if (option === 'Eval') {evalSelected = 'button_focus'; }
    else if (option === 'newEval')
    { newEvalSelected = 'button_focus'; }
    return `
    <section class="header">
    <img src="assets/logo.jpg" class="logo">
    <div class="header_div">
        <input id="EvalButton" name="evalButton" value="Evaluations" class="NAV_buttons ${evalSelected}" />
        <input id="newEvalButton" name="newEvalButton" value="New Evaluation" class="NAV_buttons ${newEvalSelected}" />
    </div>
    <span id="logoutButton" class="logout">Logout</span>
    </section>
    `;
};
