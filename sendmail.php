<?php
session_start(); // Démarrez la session

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Vérifier si les clés existent dans $_POST
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        // Adresse e-mail à laquelle vous souhaitez envoyer le message
        $to = 'contact@adam-marzuk.fr';

        // Sujet du message
        $subject = 'Nouveau message depuis le formulaire de contact';

        // En-têtes du message
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-type: text/html\r\n";

        // Corps du message
        $body = "Nom/Prénom: $name <br>Email: $email <br>Message:<br>$message";

        // Envoi de l'e-mail
        if (mail($to, $subject, $body, $headers)) {
            // Définir le message de succès dans la session
            $_SESSION['success_message'] = 'Message envoyé avec succès.';
        } else {
            // Définir le message d'erreur dans la session
            $_SESSION['error_message'] = 'Une erreur s\'est produite lors de l\'envoi du message.';
        }
    } else {
        // Afficher un message d'erreur si des clés sont manquantes dans $_POST
        $_SESSION['error_message'] = 'Une erreur s\'est produite lors de la soumission du formulaire.';
    }
}

// Rediriger vers la page index.php
header('Location: index.php');
exit();
?>