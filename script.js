//UL variables

// hamburger menu
const hambugerMenu = document.querySelector('.fa.fa-bars.unRotate90');
    
//forms
const  fName = document.querySelector('#first-name');
       lName = document.querySelector('#last-name');
       email = document.querySelector('#email');
       message = document.querySelector('#message');
       subBtn = document.querySelector('#sub-form-btn');
       contactForm = document.querySelector('#contact-form');

// html page sections
const showCase = document.querySelector('.show-case');
      aboutMe = document.querySelector('.about-me');
      myWork = document.querySelector('.my-work');
      contactMe = document.querySelector('.contact');



// navbar links
const navbar = document.querySelector('#navBar');
      navHome = document.querySelector('#home');
      navProjects = document.querySelector('#projects');
      navAbout = document.querySelector('#about');
      navContact = document.querySelector('#contact');


// Event listeners
hambugerMenu.addEventListener('click', rotateHambugerMenu);
contactForm.addEventListener('submit', formValidation);
navbar.addEventListener('click', scrollToSection);
 
function scrollToSection(goto){
    let link = goto.target;
    console.log(link);
    
    if (link == navHome) {
        showCase.scrollIntoView(
            {behavior: "smooth",
            block: "start"});
    } 
    else if(link == navProjects){        
        myWork.scrollIntoView(
        {behavior: "smooth",
        block: "start"});
    }
    else if(link == navAbout){        
        aboutMe.scrollIntoView(
        {behavior: "smooth",
        block: "start"});
    }
    else if(link == navContact){        
        contactMe.scrollIntoView(
        {behavior: "smooth",
        block: "start"});
    }
}
// menu rotate funtion
function rotateHambugerMenu(){
    if(hambugerMenu.className === "fa fa-bars unRotate90"){
        hambugerMenu.className = "fa fa-bars rotate90";
    }
    else{
        hambugerMenu.className = "fa fa-bars unRotate90";
    }  
}
// client side form validation

function formValidation(e){
    if (fName.value == "") {
        document.querySelector('.err.fName').innerHTML = "Please enter a first name";
    } 
    if (lName.value == "") {
        document.querySelector('.err.lName').innerHTML = "Please enter a last name";
    } 
    if (email.value == "") {
        document.querySelector('.err.email').innerHTML = "Please enter an email address";
    } 
    if (message.value == "") {
        document.querySelector('.err.message').innerHTML = "Please enter a message";  
    } 
e.preventDefault();   
}



