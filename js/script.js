 // Variables
// hamburger menu
const hambugerMenu = document.querySelector('.fa.fa-bars');
      navBarToggler = document.querySelector('.navbar-toggler');
      navBarDropDown = document.querySelector('#navbarNavDropdown');

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

// Form submit button on contact page
const formSubmitBtn = document.querySelector('#sub-form-btn');


// Event listeners
// navBarToggler.addEventListener('click', rotateHambugerMenu);
// navbar.addEventListener('click', scrollToSection);



/**************************************
Typewritter effect for showcase
***************************************/

let typeWriteVar = '';
// let welcomeMessage = 'Hi, I\'m Johnny and I\'m a Software Quality Assurance Engineer';

window.onload = setTimeout( function typeWriter() {
    
  if (typeWriteVar != welcomeMessage.length) {
    document.querySelector('.type-writter-text').innerHTML += welcomeMessage.charAt(typeWriteVar);
    typeWriteVar++;
    setTimeout(typeWriter, 100);
  }
}, 1500);
 

/**************************************
Scrolling navbar-links function
***************************************/

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

/**************************************
Rotate menu funtion
***************************************/

function rotateHambugerMenu(){
    if(!navBarDropDown.classList.contains('show')){
        hambugerMenu.classList.add('rotate90');
        hambugerMenu.classList.remove('unRotate90');
    }
    else{
        hambugerMenu.classList.add('unRotate90');
        hambugerMenu.classList.remove('rotate90');
    }  
}

/**************************************
Error validation w/ RegEx
***************************************/

//input field eventlisteners

// Used to avoid errors for event listeners when not on current page for event listening
try {
    
document.querySelector('#first-name').addEventListener('keyup', validateFname);
document.querySelector('#last-name').addEventListener('keyup', validateLname);
document.querySelector('#email').addEventListener('keyup', validateEmail);
document.querySelector('#message').addEventListener('keyup', validateMessage);

} 
catch (error) {

}


// input fields vars
const fName = document.querySelector('#first-name');
      lName = document.querySelector('#last-name');
      email = document.querySelector('#email');
      message = document.querySelector('#message');

// validates form before running php script 
function validateForm(event){
    
    validateFname();
     validateLname();
      validateEmail();
       validateMessage();

    if (fName.classList.contains('is-invalid') || fName.value === '' ||
       lName.classList.contains('is-invalid') || lName.value === '' ||
       email.classList.contains('is-invalid') || email.value === '' ||
       message.classList.contains('is-invalid') || message.value === '') {
        event.preventDefault(); 
         formSubmitBtn.classList.add('animated', 'wobble');
          setTimeout(reRunSubmit, 1000);
       }
}

function reRunSubmit(){
   formSubmitBtn.classList.remove('animated', 'wobble');
  };

// validates first name
function validateFname(){
    
    const RegEx = /^[a-zA-Z- ]{2,25}$/;

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

//validates last name
function validateLname(){

    const RegEx = /^[a-zA-Z- ]{2,25}$/;

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

// validates email address
function validateEmail(){

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

// validates message
function validateMessage(){

    const characterCounter = document.querySelector('.characterCount');
    const RegEx = /^[a-zA-Z0-9\.\,\$\-?!' ]{20,250}$/;
    const characterCount = message.value.length;
    if (!RegEx.test(message.value)) {
        message.classList.add('is-invalid');
        message.style.border = '2px solid #ff5050';
        if ( message.value.length < 20) {
            document.querySelector('.err.message').innerHTML = 'Please tell me more!';
        }
        else{
        document.querySelector('.err.message').innerHTML = 'Only letters, numbers and punctuation.';
        }
        
    } else {
        message.classList.remove('is-invalid');
        message.style.border = '';
        document.querySelector('.err.message').innerHTML = '';
    }

    document.querySelector('.characterCount').innerHTML = `${characterCount}/250`
    characterCounterColor(characterCount);
}

//changes character counter color (0/250) depending on message length
function characterCounterColor(characterCount){

    if (characterCount === 250 ) {
        document.querySelector('.characterCount').style.color = "#ff5050";
    } 
    else if (characterCount >= 240){
        document.querySelector('.characterCount').style.color = "#FFC107";
    }  
    else{
        document.querySelector('.characterCount').style.color = "#66cc99";
    }
}

