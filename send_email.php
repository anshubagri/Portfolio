<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'config.php'; // Load EMAIL_USERNAME & EMAIL_PASSWORD
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = trim($_POST["message"]);

    if (empty($name) || empty($subject) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Please fill in all fields correctly.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = EMAIL_USERNAME;
        $mail->Password   = EMAIL_PASSWORD;
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Email Headers
        $mail->setFrom(EMAIL_USERNAME, 'Your Website');
        $mail->addAddress('yourdestination@email.com'); // Replace with your receiving email

        $mail->isHTML(false);
        $mail->Subject = "New Contact: $subject";
        $mail->Body    = "From: $name <$email>\n\nMessage:\n$message";

        $mail->send();
        echo "✅ Thank you! Your message has been sent.";
    } catch (Exception $e) {
        echo "❌ Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request.";
}
?>
