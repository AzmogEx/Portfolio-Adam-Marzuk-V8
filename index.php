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
					<li><a href="#projets" class="nav-link px-2 text-white">Projets</a></li>
					<!-- <li><a href="#" class="nav-link px-2 text-white">FAQ</a></li> -->
					<!-- <li><a href="#" class="nav-link px-2 text-white">About</a></li> -->
				</ul>

				<div class="text-end pt-3">
					<a href="#experience" class="btn btn-azmog rounded-5 mx-1">Mes experiences</a>
					<a href="#projets" class="btn btn-azmog rounded-5 mx-1">Projets</a>
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

			<section>
				<div class="d-flex justify-content-center align-items-center mx-4" style="height: 100vh">
					<div class="container col-xxl-8 px-4 py-5">
						<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
							<div class="col-12 col-lg-6">
								<img src="img/azmog.png" class="d-block mx-lg-auto img-fluid rounded-circle profil w-100" alt="Photo de profil (ma tête)" loading="lazy" />
							</div>

							<div class="col-lg-6">
								<h1 class="display-5 fw-bold text-white lh-1 mb-3">👤 <span>Adam Marzuk</span></h1>
								<p class="lead text-white">Je suis étudiant en <span>BTS SIO</span> et passionné par l'informatique depuis le plus jeune âge, j'ai choisi ce domaine afin de me consacrer au développement web.</p>
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
		<!--============================================================SECTION PROJETS============================================================================================================-->
		<div id="projets" class="projet-web section pt-5">
			<h1 id="projet-id" class="heading-4 projet-class">Mes Projets</h1>
			<div id="projet-grille" class="w-layout-grille projet-grille">
				<div id="pc">
					<img src="img/fromage-full.png" loading="lazy" width="100%" height="60%" alt="" class="image-pc" />
					<div class="projet-texte">
						<a class="projet-titre">Logiciel base de données Fromages de France<br /></a>
						<div class="paragraph-light">J&#x27;ai conçu un logiciel, listant grâce à une base de données, tout les différents fromages des régions, permettant par la suite d'afficher la page wikipedia du fromage, ainsi que la localisation du département, et permettre l'achat du fromage</div>
					</div>
				</div>
				<div id="cablage">
					<div class="projet-texte">
						<img src="img/gare-full.png" loading="lazy" width="50%" height="50%" alt="" class="image-pc" />
						<a class="projet-titre">Logiciel base de données Gares de France</a>
						<div class="paragraph-light">J&#x27;ai Conçu un logiciel, qui va lister toutes les gares de France dans les différents département. <br>Avec des informations: est ce que la gare prend elle en charge des passager, du transport fairoviere etc...</div>
					</div>
				</div>
				<div id="adhesif">
					<img src="img/region-full.png" loading="lazy" width="100%" height="80%" alt="" class="image-pc" />
					<div class="projet-texte">
						<a class="projet-titre">Listage des départements, regions et ville de France</a>
						<div class="paragraph-light">J&#x27;ai Conçu un logiciel permettant de lister toutes les régions, départements, villes de France avec un affichage via la carte, ainsi que les coordonée</div>
					</div>
				</div>
				<div id="flowtech">
					<div class="projet-texte">
						<iframe src="https://flowtech-nomodale.adam-marzuk.fr/" id="frame-flowtech" frameborder="0" width="90%" height="500" class="web-flowtech" style="border-radius: 20px"></iframe>
						<a class="projet-titre">FlowTech</a>
						<div class="paragraph-light">Projet de création d'une entreprise fictive FlowTech de montage de pc fait en js, html, css</div>
						<a href="https://flowtech-sio.fr" target="_blank" class="button-cv bg-flowtech text-center">Accéder au projet !</a>
					</div>
				</div>
			</div>
		</div>
		<!--============================================================FIN SECTION PROJET / STAGES============================================================================================================-->
		<div class="projet-mobile pt-5">
			<h1 class="heading-4">Mes projets</h1>
			<div>
				<div>
					<img src="img/fromage-full.png" loading="lazy" width="100%" height="100%" alt="" class="image-mobile mt-3" />
					<div class="projet-texte-mobile">
						<a class="projet-titre-mobile">Logiciel base de données Gares de France<br /></a>
						<div class="paragraph-light">J&#x27;ai conçu un logiciel, listant grâce à une base de données, tout les différents fromages des régions, permettant par la suite d'afficher la page wikipedia du fromage, ainsi que la localisation du département, et permettre l'achat du fromage</div>
					</div>
				</div>
				<div>
					<div class="projet-texte">
						<img src="img/gare-full.png" loading="lazy" width="100%" height="100%" alt="" class="image-mobile" />
						<a class="projet-titre-mobile">Logiciel base de données Gares de France</a>
						<div class="paragraph-light">J&#x27;ai Conçu un logiciel, qui va lister toutes les gares de France dans les différents département. <br>Avec des informations: est ce que la gare prend elle en charge des passager, du transport fairoviere etc...</div>
					</div>
				</div>
				<div>
					<img src="img/region-full.png" loading="lazy" width="100%" height="100%" alt="" class="image-mobile" />
					<div class="projet-texte-mobile">
						<a class="projet-titre-mobile">Listage des départements, regions et ville de France</a>
						<div class="paragraph-light">J&#x27;ai Conçu un logiciel permettant de lister toutes les régions, départements, villes de France avec un affichage via la carte, ainsi que les coordonée</div>
					</div>
				</div>
				<div>
					<img src="img/flowtech.png" loading="lazy" width="100%" height="100%" alt="" class="image-mobile" />
					<div class="projet-texte-mobile">
						<a class="projet-titre-mobile">FlowTech</a>
						<div class="paragraph-light">Projet de création d'une entreprise fictive FlowTech de montage de pc fait en js, html, css</div>
						<a href="https://flowtech-sio.fr" target="_blank" class="button-cv bg-flowtech">Découvrir</a>
					</div>
				</div>
			</div>
		</div>
	</div>


	<!--============================================================SECTION STAGES============================================================================================================-->

	<div id="stages" class="stages-web section pt-5">
		<h1 id="stages-id" class="heading-4 stages-class text-light">Mes stages</h1>
		<div id="stages-grille" class="w-layout-grille stages-grille">
			<div id="pc">
				<img src="img/pc1.jpg" loading="lazy" width="100%" height="60%" alt="" class="image-pc" />
				<div class="stages-texte">
					<a class="stages-titre">Pao / Graphismes / Maquettes 3D<br /></a>
					<div class="paragraph-light">J&#x27;ai conçu une maquette 3D pour une entreprise <br />J&#x27;ai appris la pao sur Correl Draw,</div>
				</div>
			</div>
			<div id="cablage">
				<div class="stages-texte">
					<img src="img/montage.jpg" loading="lazy" width="50%" height="50%" alt="" class="image-pc" />
					<a class="stages-titre">Cablages</a>
					<div class="paragraph-light">J&#x27;ai appris les différentes normes électriques ainsi que le câblage<br />d&#x27;enseignes a led / néon avec les différentes techniques,<br />lettres boitiers, caissons lumineux etc...</div>
				</div>
			</div>
			<div id="adhesif">
				<img src="img/adhesif.jpg" loading="lazy" width="100%" height="80%" alt="" class="image-pc" />
				<div class="stages-texte">
					<a class="stages-titre">Adhésif / Impression</a>
					<div class="paragraph-light">J&#x27;ai appris la pose d&#x27;adhésifs sur des lettres, le lancement d&#x27;impressions sur les différentes machines, les découpes etc...</div>
				</div>
			</div>
			<!-- <div id="flowtech">
				<div class="stages-texte">
					<iframe src="https://flowtech-nomodale.adam-marzuk.fr/" id="frame-flowtech" frameborder="0" width="90%" height="500" class="web-flowtech" style="border-radius: 20px"></iframe>
					<a class="stages-titre">FlowTech</a>
					<div class="paragraph-light">Projet de création d'une entreprise fictive FlowTech de montage de pc fait en js, html, css</div>
					<a href="https://flowtech-sio.fr" target="_blank" class="button-cv bg-flowtech text-center">Accéder au projet !</a>
				</div>
			</div> -->
		</div>
	</div>
	<!--============================================================FIN SECTION STAGES PC============================================================================================================-->
	<div class="stages-mobile pt-5">
		<h1 class="heading-4 text-light">Mes Stages</h1>
		<div>
			<div>
				<img src="img/pc1.jpg" loading="lazy" width="100%" height="100%" alt="" class="image-mobile mt-3" />
				<div class="stages-texte-mobile">
					<a class="stages-titre-mobile">Pao / Graphismes / Maquettes 3D<br /></a>
					<div class="paragraph-light">J&#x27;ai conçu une maquette 3D pour une entreprise <br />J&#x27;ai appris la pao sur Correl Draw,</div>
				</div>
			</div>
			<div>
				<div class="stages-texte">
					<img src="img/montage.jpg" loading="lazy" width="100%" height="100%" alt="" class="image-mobile" />
					<a class="stages-titre-mobile">Cablages</a>
					<div class="paragraph-light">J&#x27;ai appris les différentes normes électriques ainsi que le câblage<br />d&#x27;enseignes a led / néon avec les différentes techniques,<br />lettres boitiers, caissons lumineux etc...</div>
				</div>
			</div>
			<div>
				<img src="img/adhesif.jpg" loading="lazy" width="100%" height="100%" alt="" class="image-mobile" />
				<div class="stages-texte-mobile">
					<a class="stages-titre-mobile">Adhésif / Impression</a>
					<div class="paragraph-light">J&#x27;ai appris la pose d&#x27;adhésifs sur des lettres, le lancement d&#x27;impressions sur les différentes machines, les découpes etc...</div>
				</div>
			</div>
			<!--4 eme collone à rajouter-->
			<!-- <div>
				<img src="img/flowtech.png" loading="lazy" width="100%" height="100%" alt="" class="image-mobile" />
				<div class="stages-texte-mobile">
					<a class="stages-titre-mobile">FlowTech</a>
					<div class="paragraph-light">Projet de création d'une entreprise fictive FlowTech de montage de pc fait en js, html, css</div>
					<a href="https://flowtech-sio.fr" target="_blank" class="button-cv bg-flowtech">Accéder au projet !</a>
				</div>
			</div> -->
		</div>
	</div>
	</div>




	<!--============================================================FIN SECTION STAGES Mobiles============================================================================================================-->
	<!-- CARTES BENTO
	<div class=" pt-5">
		<section>

			<div class="container">
				<h1 class="text-light ">Mes stages</h1>

				<div class="row">
					<div class="col-lg-4 col-md-6 col-sm-12 p-3">
						<div class="card clickable rounded-5 shadow">
							<a data-bs-toggle="modal" data-bs-target="#decouvrirModal"><img class="card-img rounded-5" src="/img/adhesif.jpg"></a>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-12 p-3">
						<div class="card clickable rounded-5 shadow">
							<a data-bs-toggle="modal" data-bs-target="#actualiteModal"><img class="card-img rounded-5" src="/img/fromage-full.png"></a>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-12 p-3">
						<div class="card clickable rounded-5 shadow">
							<a href="/assets/Quizz-IA-Table-Rondes-CCI-GARD.pdf" target="_blank"><img class="card-img rounded-5" src="/img/montage.jpg"></a>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4 col-md-6 col-sm-12 p-3">
						<div class="card clickable rounded-5 shadow">
							<a data-bs-toggle="modal" data-bs-target="#listeiaModal"><img class="card-img rounded-5" src="/img/montage.jpg"></a>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-12 p-3">
						<div class="card clickable rounded-5 shadow">
							<a data-bs-toggle="modal" data-bs-target="#dangerModal"><img class="card-img rounded-5" src="/img/montage.jpg"></a>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-12 p-3">
						<div class="card clickable rounded-5 shadow">
							<a data-bs-toggle="modal" data-bs-target="#stageModal"><img class="card-img rounded-5" src="/img/montage.jpg"></a>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div> -->

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
</body>

</html>