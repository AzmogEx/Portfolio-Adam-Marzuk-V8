<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'contact@adam-marzuk.fr';
  $subject = 'Nouveau message depuis le formulaire de contact';
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-type: text/html\r\n";

  $body = "Nom/Prénom: $name <br>Email: $email <br>Message:<br>$message";

  if (mail($to, $subject, $body, $headers)) {
    echo 'Message envoyé avec succès.';
  } else {
    echo 'Une erreur s\'est produite lors de l\'envoi du message.';
  }
}
?>

<form method="post" action="sendmail.php">
  <div class="footer">
    <span class="header" id="contact">Me contacter</span>
    <div class="left">
      <input type="text" placeholder="Nom / Prénom" id="name" class="name" name="name">
      <input type="text" placeholder="Email" id="email" class="email" name="email">
    </div>
    <div class="right">
      <textarea placeholder="Message" id="message" class="msg" name="message"></textarea>
      <button type="submit" id="submitbtn" name="submit">Envoyer</button>
    </div>
    <hr>
    <div class="bottom">
      <div class="ftrlinks" id="start">
        <a href="https://github.com/AzmogEx" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
        </a>
      </div>
      <div class="ftrlinks">
        <a href="https://www.linkedin.com/in/adam-marzuk-93804828a/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>
        </a>
      </div>
      <div class="ftrlinks" id="end">
        <a href="https://youtube.com/azmogexe" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
          </svg>
        </a>
      </div>
    </div>
    <span class="ftrtxt">Copyright @Adam Marzuk</span>
  </div>
</form>



<script>
  const msg = document.querySelector(".msg");
  const sumbitbtn = document.getElementById("submitbtn");

  msg.addEventListener("focus", submsg);

  function submsg() {
    sumbitbtn.style.display = "block";
    sumbitbtn.style.animation = "slide 0.5s ease-in-out";
  }

  const submitbtn = document.getElementById("submitbtn");

  submitbtn.addEventListener("click", handleSubmit);

  function handleSubmit() {
    const name = document.querySelector(".name").value;
    const email = document.querySelector(".email").value;
    const message = document.querySelector(".msg").value;

    // Exemple d'affichage des valeurs dans la console
    console.log("Nom/Prénom:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  }
</script>

<style>
  :root {
    --lightblk: #252930;
    --azmog: #8000ff;

  }

  .header {
    font-size: 57px;
    color: white;
    font-family: "Varela Round", sans-serif;
    flex-basis: 100%;
  }

  .footer {
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 2em;
    gap: 10px;
    display: flex;
    bottom: 0;
    position: relative;
    width: 100%;
    background-color: var(--blk);
  }

  div.right {
    margin: 0;
    display: flex;
    width: 50%;
    flex-direction: row;
    gap: 10px;
    flex: 1;
  }

  div.left {
    flex-basis: 100%;
    margin: 0;
    display: flex;
    gap: 10px;
    width: 50%;
    flex-direction: column;
    flex: 1;
  }

  input,
  textarea {
    font-family: "Varela Round", sans-serif;
    box-sizing: border-box;
    color: whitesmoke;
    outline: none;
    resize: none;
    border: none;
    padding: 1em;
    border-radius: 10px;
    background-color: var(--lightblk);
  }

  #message {
    flex-basis: 100%;
  }

  div.bottom {
    min-width: 0;
    overflow-x: scroll;
    padding: 1em;
    gap: 2em;
    color: grey;
    width: 100%;
    flex-basis: 100%;
    display: flex;
  }

  .ftrtxt {
    flex-basis: 100%;
    font-size: 15px;
    text-align: center;
    font-family: "Varela Round", sans-serif;
    color: grey;
  }

  .ftrhead {
    font-size: 35px;
  }

  .ftrhead::after,
  .ftrtxt::after {
    content: "\a";
    white-space: pre;
  }

  .ftrlinks {
    flex-basis: 1;
  }

  hr {
    margin-top: 1em;
    margin-bottom: 1em;
    flex-basis: 100%;
    color: white;
  }

  svg {
    fill: white;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }

  svg:hover {
    transform: scale(1.1);
    fill: grey;
  }

  ::placeholder {
    font-family: "Varela Round", sans-serif;
  }

  #start {
    margin-left: auto;
  }

  #end {
    margin-right: auto;
  }

  ::-webkit-scrollbar {
    height: 5px;
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 10px;
    height: 5px;
    width: 2px;
  }

  #submitbtn {
    border-radius: 10px;
    border: none;
    font-family: "Varela Round", sans-serif;
    font-size: 15px;
    transition: 0.5s;
    background-color: #ffb525;
  }

  #submitbtn:hover {
    background-color: var(--lightblk);
    color: white;
  }

  @keyframes slide {
    0% {
      opacity: 0;
      height: 0%;
      border-radius: 10px;
    }

    100% {
      opacity: 1;
      height: 100%;
      border-radius: 10px;
    }
  }
</style>