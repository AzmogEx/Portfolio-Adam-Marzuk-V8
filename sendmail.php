<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Vérifier si les clés nécessaires existent dans $_POST
    if (isset($_POST['name'], $_POST['email'], $_POST['message'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $to = 'recipient@example.com'; // Remplacez par l'adresse e-mail du destinataire
        $subject = 'Nouveau message de contact';

        // Valider l'adresse e-mail
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $_SESSION['error_message'] = 'Adresse e-mail invalide.';
            header('Location: index.php');
            exit();
        }

        // En-têtes de l'e-mail
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