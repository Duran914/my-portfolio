<?php
include "sendmail.php";
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://use.fontawesome.com/c5b9554837.js"></script>
    <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">
    <link rel="shortcut icon" href="assets/IMG/meSm.ico">
    <title>Johnny Duran</title>
    <link rel="stylesheet" href="CSS/app.css">
  </head>
 
  <body>
      <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#"><img src="assets/IMG/me.png" class="my-image" alt=""><span class="navbar-name">Johnny Duran</span></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
            <span class="toggle"><i id="menuBars" class="fa fa-bars unRotate90"></i></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul id="navBar" class="navbar-nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link" id="home">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="about">About Me</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" id="contact">Contact</a>
                </li>
            </ul>
          </div>
        </nav>

 <?php if($msg == 'Message has been sent'): ?>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div id='alertMessage' class= "alert <?php echo $msgClass;?> alert-dismissible fade show">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
          <?php echo $msg; ?>
          </div>
        </div>
      </div>
    </div>
 <?php endif; ?>
        <div class="container-fluid">
          <section class="show-case">
          <div class="row text-center">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div class="showcase-text">
                  <h1> &ltWeb-Developer&gt<br> 
                   <span class="type-writter-text"></span> <br>
                   &lt/Web-Developer&gt</h1>
                </div>
                </div>
            </div>
          </section>
          </div>

          <div class="container" id="aboutContainer">
          <section class="about-me mt-3">
          <div class="row">
              <div class="col-sm-12 col-md-7 col-lg-8 col-xl-9">
              <div class="section-header about">ABOUT ME</div>
                <div class="about-us-content mt-4">
                    <div class="card main-card">
                        <div class="card-body">
                  <p>Hello, Im Johnny and im a Front-End developer from Ventura County, CA.  
                    I am currently in my senior year at Cal State Northridge majoring in
                    Computer Information Technology. I have a passion for creating dynamic 
                    web sites/applications and all things web related. 
                  </p>
                  </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-5 col-lg-4 col-xl-3">
                <div class="livePic mt-5 mb-5">
                <img class="livePicture" src="assets/IMG/livePic.jpg" alt="">
                </div>
                </div>
          </div>
        </section>
        </div>

        <div class="container">
        <section class="tech-stack">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div class="section-header techLabel mt-5">DEVELOPMENT STACK</div>
              <div class="card main-card mt-5 mb-5">
                <div class="card-body">
              <div class="stack-icons">
                <i class="devicon devicon-html5-plain-wordmark colored"></i>
                <i class="devicon devicon-css3-plain-wordmark colored"></i>
                <i class="devicon devicon-javascript-plain colored"></i>
                <i class="devicon devicon-bootstrap-plain-wordmark colored"></i>
                <i class="devicon devicon-sass-original colored"></i>
                <i class="devicon devicon-php-plain colored"></i>
                <i class="devicon devicon-mysql-plain-wordmark colored"></i>
                <i class="devicon devicon-amazonwebservices-original colored"></i>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
        <div class="container">
        <section class="my-work" id="my-workjs">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div class="section-header myWork">MY WORK</div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div class="project1 mt-4 mb-4">
                <div class="card main-card">
                  <div class="card-body">
                      <div class="section-sm-header">PokeDex</div>
                    <img class="pokemonPic mt-4 mb-4" src="assets/IMG/pokedex.png" alt="">
                    <p><strong>ABOUT:</strong><br> 
                      A pokedex which lists Genereation 1 pokemon. Displays their attributes and statistics.</p>
                    <a class="btn btn-primary btn-dark-grey" href="projects/PokeDex">See App</a>
                    <a class="btn btn-primary btn-dark-grey github-btn" href="https://github.com/Duran914/PokeDex">View on GitHub <i class="fa fa-github" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div class="project1 mt-4 mb-4">
                  <div class="card main-card">
                    <div class="card-body">
                        <div class="section-sm-header">Level</div>
                      <img class="levelPic mt-4 mb-4" src="assets/IMG/levelUp.png" alt="">
                      <p><strong>ABOUT:</strong><br> 
                        Level is a project based on a fictitious Travel company. Front-End only.</p>
                      <a class="btn btn-primary btn-dark-grey" href="projects/Level-Up">See App</a>
                      <a class="btn btn-primary btn-dark-grey github-btn" href="https://github.com/Duran914/Level-Up">View on GitHub <i class="fa fa-github" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 m-auto">
              <div class="project1 mt-4 mb-4">
                <div class="card main-card">
                  <div class="card-body">
                      <div class="section-sm-header">Meteor</div>
                    <img class="meteorPic mt-4 mb-4" src="assets/IMG/meteor.png" alt="">
                    <p><strong>ABOUT:</strong><br> 
                      Meteor is project based on a fictitious photography company. Front-End only.</p>
                    <a class="btn btn-primary btn-dark-grey" href="projects/Meteor">See App</a>
                    <a class="btn btn-primary btn-dark-grey github-btn" href="https://github.com/Duran914/Meteor">View on GitHub <i class="fa fa-github" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="container">
        <section class='contact mb-3'>
          <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div class="section-header contactMe mb-3">CONTACT ME</div>
                  <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" id="contact-form">
                      <div class="row">
                      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                      <div class="form-group">
                          <label for="first-name">First Name:</label><span class="err fName"></span>
                          <input type="text" class="form-control" name="firstName" id="first-name" placeholder="Enter first name" required>
                      </div>
                      <div class="form-group">
                          <label for="last-name">Last Name:</label><span class="err lName"></span>
                          <input type="text" class="form-control" name="lastName" id="last-name" placeholder="Enter last name" required>
                      </div>
            
                      <div class="form-group">
                        <label for="email">Email Address:</label><span class="err email"></span>
                        <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" required>
                      </div>
                      </div>
                      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                      <div class="form-group">
                          <label for="message">Enter a Message</label><span class="err message"></span>
                          <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button type="submit" id="sub-form-btn" class="btn my-btn">Submit</button>
                        </div>
                      </div>
                    </form>
            </div>
          </div>
        </section>
      </div>

        <footer class="foot bg-dark mt-5">
            <div class="row">
             <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div class="footer-text">Copyright © 2018 Johnny Duran <img src="assets/IMG/me-white.png" class="my-image-sm" alt=""></div>
             </div>
             <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
             <div class="social-icons">
               <a href="https://github.com/Duran914"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
               <a href="https://www.instagram.com/j_duranz_/"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
               <a href="https://www.linkedin.com/in/jonathan-duran-166037105/"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
             </div>
             </div>
            </div>
          </footer>
    <script src="script.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>