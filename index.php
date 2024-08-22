<?php
session_start(); // Démarrez la session

// Afficher le message de succès s'il existe
if (isset($_SESSION['success_message'])) {
	echo '<div class="text-light">' . $_SESSION['success_message'] . '</div>';
	unset($_SESSION['success_message']); // Supprimer le message de la session pour qu'il n'apparaisse qu'une seule fois
}

// Afficher le message d'erreur s'il existe
if (isset($_SESSION['error_message'])) {
	echo '<div class="text-light">' . $_SESSION['error_message'] . '</div>';
	unset($_SESSION['error_message']); // Supprimer le message de la session pour qu'il n'apparaisse qu'une seule fois
}
?>



<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Portfolio: Adam Marzuk</title>
	<link rel="stylesheet" href="/css/style.css" />
	<link rel="icon" href="/img/favicon.jpg" type="image/x-icon" />
	<script src="https://kit.fontawesome.com/9b187fc558.js" crossorigin="anonymous"></script>
</head>

<body>
	<!-- NAVBAR-->
	<header>
		<nav>
			<div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
				<a class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
					<svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
						<use xlink:href="#bootstrap" />
					</svg>
				</a>

				<ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 pt-3" style="font-size: 18px">
					<li><a href="index.php" class="nav-link px-2 text-secondary">Accueil</a></li>
					<li><a href="#stages" class="nav-link px-2 text-white">Stages</a></li>
					<li><a href="#projet-nav" class="nav-link px-2 text-white">Projets</a></li>
					<!-- <li><a href="#" class="nav-link px-2 text-white">FAQ</a></li> -->
					<!-- <li><a href="#" class="nav-link px-2 text-white">About</a></li> -->
				</ul>

				<div class="text-end pt-3">
					<a href="#experience" class="btn btn-azmog rounded-5 mx-1">Mes experiences</a>
					<a href="#projet" class="btn btn-azmog rounded-5 mx-1">Projets</a>
					<a href="#veille" class="btn btn-azmog rounded-5 mx-1">Veille technologique</a>
					<a href="#contact" class="btn btn-azmog rounded-5 mx-1">Contact</a>
				</div>
			</div>
		</nav>
	</header>

	<!--FIN DE NAVBAR-->
	<div class="section text-light">
		<div class="text-center">
			<div class="intro-wrap">
				<!--TITRE-->
				<h1 class="titre-adam-h1 text-center text-white">Adam Marzuk</h1>

				<!--TXT ANIME-->
				<div class="text-anim text-light">
					<p id="typingtext"></p>
				</div>



				<!--MACBOOK-->
				<img src="img/Macbook-Pro---Copy1-1920x1080.png" loading="lazy" width="50%" sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 1919px) 94vw, 1140px" alt="img-Macbook" srcset="img/Macbook-Pro---Copy1-1920x1080-p-500.png 500w, img/Macbook-Pro---Copy1-1920x1080-p-800.png 800w, img/Macbook-Pro---Copy1-1920x1080-p-1080.png 1080w, img/Macbook-Pro---Copy1-1920x1080-p-1600.png 1600w, img/Macbook-Pro---Copy1-1920x1080.png 1920w" class="macbook pt-5" />
			</div>

			<section class="mt-5">
				<div class="d-flex justify-content-center align-items-center mx-4" style="height: 150vh">
					<div class="container col-xxl-8 px-4 py-5">
						<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
							<div class="col-12 col-lg-6">
								<img src="img/moi.jpg" class="d-block mx-lg-auto img-fluid rounded-circle profil w-100" alt="Photo de profil (moi)" loading="lazy" />
							</div>

							<div class="col-lg-6">
								<h1 class="display-5 fw-bold text-white lh-1 mb-3">👤 <span>Adam Marzuk</span></h1>
								<p class="lead text-white">Je suis étudiant en <b><span>BTS SIO (Service informatique aux organisations)</span></b> et passionné par l'informatique depuis le plus jeune âge, j'ai choisi ce domaine afin de me consacrer au développement logiciel.</p>
								<div class="cv-button-container justify-content-center d-flex flex-row align-items-baseline">
									<div class="cv-buttons-container" style="max-width: 150px;">
										<a href="documents/Portfolio-Adam-Marzuk.pdf" target="_blank" class="button-cv text-center">CV FR</a>
										<a href="documents/Portfolio-Adam-Marzuk-en.pdf" target="_blank" class="button-cv text-center">CV EN</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!--MES EXPERIENCES-->
			<div class="experience-div" id="experience">
				<h2 class="text-center">Mes expériences</h2>
				<img src="img/presentation.png" loading="lazy" sizes="(max-width: 1919px) 100vw, 1140px" srcset="img/presentation-500.png 500w, img/presentation-800.png 800w, img/presentation-1080.png 1080w" alt="image presentation" class="image-presentation" />
			</div>
		</div>
		<!--===============SECTION Projets===========-->
		<div id="projet-nav"></div>
		<h1 id="stages-id" class="heading-4 stages-class text-light text-center">Mes projets</h1>

		<div id="projet" class="container-card-projet">
			<card data-image="img-projet/gare.png">
				<h1 slot="header">Gare de France</h1>
				<p slot="content">J&#x27;ai Conçu un logiciel, qui va lister toutes les gares de France dans les différents département. <br>Avec des informations: est ce que la gare prend elle en charge des passager, du transport fairoviere etc...</p>
			</card>
			<card data-image="img-projet/fromage.png">
				<h1 slot="header">Fromage de France</h1>
				<p slot="content">J&#x27;ai conçu un logiciel, listant grâce à une base de données, tout les différents fromages des régions, permettant par la suite d'afficher la page wikipedia du fromage, ainsi que la localisation du département, et permettre l'achat du fromage</p>
			</card>
			<card data-image="img-projet/region.png">
				<h1 slot="header">Région de France</h1>
				<p slot="content">J&#x27;ai Conçu un logiciel permettant de lister toutes les régions, départements, villes de France avec un affichage via la carte, ainsi que les coordonée</p>
			</card>
			<card id="flowtech-card" data-image="img-projet/flowtech.png">
				<h1 slot="header">Flowtech</h1>
				<p slot="content">Projet de création d'une entreprise fictive FlowTech de montage de pc fait en js, html, css</p>
			</card>
		</div>

		<!--===============SECTION Lycee===========-->
		<h1 id="stages-id" class="heading-4 stages-class text-light text-center">Stages Lycée</h1>

		<div id="lycee" class="container-card-projet">
			<card data-image="img-projet/pc1.jpg">
				<h1 slot="header">Graphisme</h1>
				<p slot="content">J&#x27;ai conçu une maquette 3D pour une entreprise <br />J&#x27;ai appris la PAO (programmation assisté par ordinateur) sur Correl Draw,</p>
			</card>
			<card data-image="img-projet/montage.jpg">
				<h1 slot="header">Cablages</h1>
				<p slot="content">J&#x27;ai appris les différentes normes électriques ainsi que le câblage dans sa globalité avec les différentes techniques</p>
			</card>
			<card data-image="img-projet/adhesif.jpg">
				<h1 slot="header">Adhésif / Impression</h1>
				<p slot="content">J&#x27;ai appris la pose d&#x27;adhésifs sur des lettres, le lancement d&#x27;impressions sur les différentes machines, les découpes etc...</p>
			</card>
		</div>
		<!--============== SECTION CARD BTS===========-->
		<h1 id="stages-id" class="heading-4 stages-class text-light text-center">Stages BTS première année <br> muséeum d'histoire naturel de Nîmes</h1>

		<div id="bts" class="container-card-projet">
			<card data-image="img-projet/Zoovengers.png">
				<h1 slot="header">Zoovengers</h1>
				<p slot="content">J&#x27;ai conçu une application mobile pour le muséeum <br />C'est un escape game pour les visiteurs. Elle est développé en dart avec l'aide du framework Flutter</p>
			</card>
			<card data-image="img-projet/Compteur.png">
				<h1 slot="header">Compteur</h1>
				<p slot="content">J&#x27;ai conçu une application pour les tablettes android du musée<br />permettant au gardien des salles du musée de comptabiliser le nombre de visiteur total de la journée et actuel en temps réel</p>
			</card>
		</div>
		<!-- partial -->
		<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.1/vue.min.js'></script>
		<script src="script-card/script-card-bts.js"></script>
		<script src="script-card/script-card-lycee.js"></script>
		<script src="script-card/script-card-projets.js"></script>





		<!--============================================================FIN SECTION STAGES Mobiles============================================================================================================-->

		<?php include 'components/footer.php'; ?>
		<!--SCRIPT-->
		<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
		<!--ANIM TEXTE-->
		<script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
		<script src="js/texte-anim.js"></script>

		<!--ANIM BUTTON-->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.1/tilt.jquery.min.js"></script>
		<script>
			$(".button-cv").tilt({ scale: 1.1, speed: 1000 });
		</script>

		<!--NAVBAR-->
		<script src="js/nav.js"></script>
		<script>
			document.getElementById('flowtech-card').addEventListener('click', function () {
				window.open('https://flowtech-sio.fr', '_blank');
			});
		</script>
</body>

</html>