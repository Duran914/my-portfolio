<?php
$msg = '';
$msgClass = '';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load composer's autoloader
require 'vendor/autoload.php';

$mail = new PHPMailer(true);  
try {


    if (isset($_POST['submit']))
      $firstName = htmlspecialchars($_POST['firstName']);
      $lastName = htmlspecialchars($_POST['lastName']);
      $email = htmlspecialchars($_POST['email']);
      $message = htmlspecialchars($_POST['message']);
      
      

    $mail->setFrom($email);
    $mail->addAddress('jd91435@gmail.com', 'Johnny');
    $mail->isHTML(true); 
    $mail->Subject = 'Portfolio Inquiry';
    $mail->Body  = <<<EOT
          <h3> From: {$_POST['firstName']}&nbsp{$_POST['lastName']}<br></h3>
          <h4>Message</h4>{$_POST['message']}
EOT;

    $mail->send();
    $msg = 'Message has been sent';
    $msgClass = 'alert-success';

}
  catch (Exception $e) {
    $msg = 'Message could not be sent. Try again';
    $msgClass = "alert-danger";
}
?>