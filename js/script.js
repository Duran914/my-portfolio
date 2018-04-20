
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

