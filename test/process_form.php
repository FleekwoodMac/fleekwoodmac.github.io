<?php
require 'PHPMailerAutoload.php'; // Adjust the path to PHPMailer

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recipient = "mjwalkerprojects@gmail.com"; // Replace with your email address

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $mail = new PHPMailer;
    
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // Replace with your SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'mjwalkerprojects@gmail.com'; // Replace with your SMTP username
    $mail->Password = 'qz2tJFI7'; // Replace with your SMTP password
    $mail->SMTPSecure = 'tls'; // Use 'ssl' if needed
    $mail->Port = 587; // SMTP port

    $mail->setFrom($email, $name);
    $mail->addAddress($recipient);
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body = $message;

    if ($mail->send()) {
        echo "Thank you for your message!";
    } else {
        echo "Sorry, there was an error sending your message. Error: " . $mail->ErrorInfo;
    }
}
?>
