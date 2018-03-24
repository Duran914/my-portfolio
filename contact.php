<?php 
include "inc/header.php";
include "sendmail.php";
?>
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

<div class="container">
        <section class='contact mt-5 mb-5'>
          <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div class="section-header contactMe mb-3 ">CONTACT ME</div>
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
<?php include "inc/footer.php"?>