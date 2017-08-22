const NAV = function(option){
    return `
    <section class="header">
    <img src="Images/logo.jpg" class="image">
    <div class="header_div">
        <h1 style="margin-bottom: 0px"><a href="Evaluations_page.html" target="_self" class="eval_button">Evaluations</a></h1>
        <h1 style="margin-bottom: 0px"><a href="NewEvaluation_page.html" target="_self" class="neweval_button"> New Evaluation</a></h1>
    </div>
    <h2><a href="Login_page.html" target="_self" class="logout">Logout</a></h2>
    </section>
    `
}

const CandidateDetailsForm = function(option){
    return `
    <input class="textbox" type="text" placeholder="Candidate" name="CandName">
    <input class="textbox" type="text" placeholder="Interviewer" name="IntervName">
    <input class="textbox" type="date" name="ddate">
    `
}

const TechnicalLevelPicker = function(option){
    return `
    <h1 class="boxTitle">Technical Level</h1>
    <div id="radio_select">
        <div id="radio_select_header">
            <span> Trainee </span>
            <span> Junior </span>
            <span> Middle </span>
            <span> Senior </span>
        </div>

            <input type="radio" name="b" value="Trainee" style="margin-left: 55px; margin-right: 295px">
            <input type="radio" name="b" value="Junior1">
            <input type="radio" name="b" value="Junior2">
            <input type="radio" name="b" value="Junior3" style="margin-right: 270px">
            <input type="radio" name="b" value="Middle1">
            <input type="radio" name="b" value="Middle2">
            <input type="radio" name="b" value="Middle3" style="margin-right: 270px">
            <input type="radio" name="b" value="Senior1">
            <input type="radio" name="b" value="Senior2">
            <input type="radio" name="b" value="Senior3">
    </div>
    `
}

const Textarea = function(option){
    return `
    <h1 class="boxTitle">Workflow, Leadership &amp Soft Skills</h1>
    <textarea placeholder="The type of project that is suitable for the candidate Is guidance required for the candidate"></textarea>

    <h1 class="boxTitle">Should the candidate be hired?</h1>
    <textarea placeholder="*required"></textarea>

    <h1 class="boxTitle">General Impression</h1>
    <textarea placeholder="Describe the environment in which the candidate works. Describe any guidance or management experience."></textarea>
    `
}

const DropdownSelector = function(option){
    return `
<fieldset>
    <legend>OOP, Design Patterns</legend>
        <ul>
            <li>Classes
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>					
                </select>
            </li>
            <li>Exception handling
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>					
                </select>
            </li>
            <li>Version Control
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>					
                </select>
            </li>
            <li>Access modifiers
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
            <li>Design Patterns
                <select>
                       <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
            <li>Issue Tracking
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
            <li>Polymorphism
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
            <li>RegEx
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
        </ul>
</fieldset>

<fieldset>
    <legend>HTTP</legend>
        <ul>
            <li>Protocol
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>					
                </select>
            </li>
            <li>Response codes
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>					
                </select>
            </li>
            <li>REST
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>					
                </select>
            </li>
            <li>Headers
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
            <li>Request methods
                <select>
                       <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
            <li>Sessions &amp Cookies
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
        </ul>
</fieldset>

<fieldset>
    <legend>HTML</legend>
        <ul>
            <li>Doctype
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>					
                </select>
            </li>
            <li>Tags
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>					
                </select>
            </li>
            <li>Basic SEO
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>					
                </select>
            </li>
            <li>Syntax rules
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
            <li>Attributes
                <select>
                       <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
        </ul>
</fieldset>

<fieldset>
    <legend>CSS</legend>
        <ul>
            <li>Usage
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>					
                </select>
            </li>
            <li>Box modeling
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>					
                </select>
            </li>
            <li>CSS 3.0
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>					
                </select>
            </li>
            <li>Selectors
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
            <li>Styling
                <select>
                       <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
            <li>Dynamic Stylesheets
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
        </ul>
</fieldset>

<fieldset>
    <legend>Javascript</legend>
        <ul>
            <li>Data types &amp variables
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>					
                </select>
            </li>
            <li>Object manipulation
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>					
                </select>
            </li>
            <li>DOM Manipulation
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>					
                </select>
            </li>
            <li>Functions
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
            <li>Templating
                <select>
                       <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
            <li>Event Handling
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
            <li>Prototype &amp OOP
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
            <li>Testing(unit, E2E)
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
            <li>Ajax
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
            <li>Debugging
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
            <li>Websockets
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
            <li>Tooling
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
            <li>Libraries
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
            <li>Promises
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
            <li>Browser Engines
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
            <li>Frameworks
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
        </ul>
</fieldset>

<fieldset>
    <legend>NodeJS</legend>
        <ul>
            <li>Backend frameworks
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>					
                </select>
            </li>
            <li>Templating
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>					
                </select>
            </li>
            <li>DOM Manipulation
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>					
                </select>
            </li>
            <li>Unit Testing
                <select>
                    <option selected disabled> Choose </option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                </select>
            </li>
        </ul>
</fieldset>
    <input type="submit" value="Submit" class="submit_button" />
    `
}

const CandidatePage = function(option){
    return `
    <section class="body_section">
    <form action="Evaluations_page.html">
    ${CandidateDetailsForm({})}
    ${TechnicalLevelPicker({})}
    ${Textarea({})}
    ${DropdownSelector({})}
    </form>
</section>
    `
}

const Footer = function(option){
    return `
    <section class="footer_section">
    <footer>
        <p>Copyright@Softvision 2017</p>
    </footer>		
    </section>
    `
}

const NewEvaluationPage = function(option){
    return `
    ${NAV({})}
    ${CandidatePage({})}
    ${Footer({})}
    `
}

window.onload = function(){
    document.querySelector('body').innerHTML=NewEvaluationPage({});
}