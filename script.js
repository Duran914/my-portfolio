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
// contactForm.addEventListener('submit', formValidation);
navbar.addEventListener('click', scrollToSection);


// Typewritter effect for showcase
let typeWriteVar = 0;
let welcomeMessage = 'Hello, Im Johnny And I Build Responsive User Interfaces'; /* Welcome message */

window.onload = setTimeout( function typeWriter() {
    
  if (typeWriteVar < welcomeMessage.length) {
    document.querySelector('.type-writter-text').innerHTML += welcomeMessage.charAt(typeWriteVar);
    typeWriteVar++;
    setTimeout(typeWriter, 100);
  }
}, 1500);
 
// scrolling navbar-links function
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
        document.querySelector('.err.fName').innerHTML = "Please enter a vaild first name";
    } 
    if (lName.value == "") {
        document.querySelector('.err.lName').innerHTML = "Please enter a vaild last name";
    } 
    if (email.value == "") {
        document.querySelector('.err.email').innerHTML = "Please enter a vaild email address";
    } 

    if (message.value == "") {
        document.querySelector('.err.message').innerHTML = "Please enter a message";
    }
        
e.preventDefault();   
}

// make alert disapear

const alert =  document.getElementById('alertMessage');
window.onload = setTimeout( function() {
        alert.remove();
  }, 8000);



