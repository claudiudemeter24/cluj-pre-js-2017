const LoginForm = {
    init(option) {
        document.querySelector('#loginForm').innerHTML =
    `<div class="loginform_div col1">
    <div class="loginform_header">
        <h1>Interview Feedback</h1>
    </div>
    <div class="loginform_body">
        <form id="loginFormId">
            <input type="text" id="username" placeholder="Username" name="name_box" class="loginform_body_input" />
            <input type="password" id="password" placeholder="Password" name="pass_box" class="loginform_body_input" />
            <input type="submit" name="loginButton" value="Login" class="loginform_body_button" />
        </form> 
    </div>  
    </div>
    `;
    },
    destroy(option) {
        document.querySelector('#loginForm').innerHTML = '';
    },
};

const LoginHeader = {
    init(option) {
        document.querySelector('#loginHeader').innerHTML =
    `
    <section class="head_section">
    <header class="grid">
    ${LoginForm({})}
    </header>
    </section>
    `;
    },
    destroy(option) {
        document.querySelector('#loginHeader').innerHTML = '';
    },
};

const SubmitFeedbackSection = {
    init(option) {
        document.querySelector('#submitFeedbackSection').innerHTML =
    `
    <section class="section_height">
    <div class="grid div_padding">
        <img src="assets/new-feedback.jpg" class="col1 image">
        <article class="col2">
            <h1 class="text_title">Submit new feedback</h1>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra
            nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus,
            tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque
            nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in
            tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis
            sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit
            amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque
            arcu mauris, malesuada quis ornare accumsan, blandit sed diam.
            </p>
        </article>
    </div>
    </section>
    `;
    },
    destroy(option) {
        document.querySelector('#submitFeedbackSection').innerHTML = '';
    },
};

const SubmitFeedbackResults = {
    init(option) {
        document.querySelector('#submitFeedbackResults').innerHTML =
    ` 
    <section class="section_height body_section2">
    <div class="grid div_padding">
        <article class="col2">
            <h1 class="text_title">View feedback results</h1>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra
            nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus,
            tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque
            nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in
            tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis
            sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit
            amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque
            arcu mauris, malesuada quis ornare accumsan, blandi
            </p>
        </article>
        <img src="assets/results.jpg" class="image">
    </div>
    </section>
    `;
    },
    destroy(option) {
        document.querySelector('#submitFeedbackResults').innerHTML = '';
    },
};

const LoginPage = {
    init(option) {
        document.querySelector('#loginPage').innerHTML =
    ` 
    ${LoginHeader({})}
    ${SubmitFeedbackSection({})}
    ${SubmitFeedbackResults({})}
    ${Footer({})}
    `;
    },
    destroy(option) {
        document.querySelector('#loginPage').innerHTML = '';
    },
};