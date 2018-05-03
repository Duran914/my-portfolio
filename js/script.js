
// hamburger menu
const hambugerMenu = document.querySelector('.fa.fa-bars.unRotate90');

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
navbar.addEventListener('click', scrollToSection);


// Typewritter effect for showcase
let typeWriteVar = '';
let welcomeMessage = 'Hello, Im Johnny And I Build Responsive User Interfaces';

window.onload = setTimeout( function typeWriter() {
    
  if (typeWriteVar != welcomeMessage.length) {
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

// Error validation 
document.querySelector('#first-name').addEventListener('keyup', validateFname);
document.querySelector('#last-name').addEventListener('keyup', validateLname);
document.querySelector('#email').addEventListener('keyup', validateEmail);
document.querySelector('#message').addEventListener('keyup', validateMessage);

function validateFname(){
    const fName = document.querySelector('#first-name');
    const RegEx = /^[a-zA-Z]{2,20}$/;

    if (!RegEx.test(fName.value)) {
        fName.classList.add('is-invalid');
        fName.style.border = '2px solid #ff5050';
        document.querySelector('.err.fName').innerHTML = 'Please enter your first name';
    } else {
        fName.classList.remove('is-invalid');
        fName.style.border = '';
        document.querySelector('.err.fName').innerHTML = '';
    }
}

function validateLname(){
    const lName = document.querySelector('#last-name');
    const RegEx = /^[a-zA-Z]{2,20}$/;

    if (!RegEx.test(lName.value)) {
        lName.classList.add('is-invalid');
        lName.style.border = '2px solid #ff5050';
        document.querySelector('.err.lName').innerHTML = 'Please enter your last name';
    } else {
        lName.classList.remove('is-invalid');
        lName.style.border = '';
        document.querySelector('.err.lName').innerHTML = '';
    }
}

function validateEmail(){
    const email = document.querySelector('#email');
    const RegEx = /^([a-zA-Z0-9\-\./com]+)@([a-zA-Z0-9\-\./com]+)\.([a-zA-Z]{2,5})$/;

    if (!RegEx.test(email.value)) {
        email.classList.add('is-invalid');
        email.style.border = '2px solid #ff5050';
        document.querySelector('.err.email').innerHTML = 'Please enter a valid email';
    } else {
        email.classList.remove('is-invalid');
        email.style.border = '';
        document.querySelector('.err.email').innerHTML = '';
    }
}

function validateMessage(){
    const message = document.querySelector('#message');
    const RegEx = /^[a-zA-Z0-9\.\,\$\-/ )]{10,200}$/;
    const characterCount = message.value.length;
    if (!RegEx.test(message.value)) {
        message.classList.add('is-invalid');
        message.style.border = '2px solid #ff5050';
        if ( message.value.length < 11) {
            document.querySelector('.err.message').innerHTML = 'Please tell me more!';
        }
        else{
        document.querySelector('.err.message').innerHTML = 'Only letters, numbers and ( . , $)';
        }
        
    } else {
        message.classList.remove('is-invalid');
        message.style.border = '';
        document.querySelector('.err.message').innerHTML = '';
    }
    document.querySelector('.characterCount').innerHTML = `${characterCount}/200`
}

function validateForm(){

}
