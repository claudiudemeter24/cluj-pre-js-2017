const LoginForm = function(option){
    return ` 
    <div class="loginform_div col1">
    <div class="loginform_header">
        <h1>Interview Feedback</h1>
    </div>
    <div class="loginform_body">
        <form action="Evaluations_page.html">
            <input type="text" placeholder="Username" name="name_box" class="loginform_body_input" />
            <input type="password" placeholder="Password" name="pass_box" class="loginform_body_input" />
            <!--<a href="ex2.html">Login</a>
            <button type="button">Login</button>-->
            <input type="submit" value="Login" class="loginform_body_button" />
        </form> 
    </div>  
</div>
`
}

const LoginHeader = function(option){
    return `
    <section class="head_section">
    <header class="grid">
    ${LoginForm({})}
    </header>
    </section>
   `
}

const SubmitFeedbackSection = function(option){
    return ` 
    <section class="section_height">
    <div class="grid div_padding">
        <img src="Images/new-feedback.jpg" class="col1 image">
        <article class="col2">
            <h1>Submit new feedback</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra
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
`
}

const SubmitFeedbackResults = function(option){
    return ` 
    <section class="section_height body_section2">
    <div class="grid div_padding">
        <article class="col2">
            <h1>View feedback results</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra
               nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus,
               tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque
               nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in
               tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis
               sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit
               amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque
               arcu mauris, malesuada quis ornare accumsan, blandi
            </p>
        </article>
        <img src="Images/results.jpg" class="image">
    </div>
</section>
`
}

const Footer = function(option){
    return ` 
    <section class="footer_section">
    <footer class="grid">
        <p>Copyright@Softvision 2017</p>
    </footer>		
</section>
`
}

const LoginPage = function(option){
    return `
    ${LoginHeader({})}
    ${SubmitFeedbackSection({})}
    ${SubmitFeedbackResults({})}
    ${Footer({})}
    `
}

window.onload = function(){
    document.querySelector('body').innerHTML=LoginPage({});
}