<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Portfolio: Adam Marzuk</title>
		<link rel="stylesheet" href="/css/style.css" />
		<link rel="icon" href="/img/favicon.jpg" type="image/logo-icon" />
		<link rel="shortcut icon" href="/img/favicon.jpg" type="image/logo-icon" />
		<script src="https://kit.fontawesome.com/9b187fc558.js" crossorigin="anonymous"></script>
	</head>
	<body>
		<!-- NAVBAR-->
		<header>
			<nav>
				<div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
					<a class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
						<svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap" /></svg>
					</a>

					<ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 pt-3" style="font-size: 18px">
						<li><a href="#" class="nav-link px-2 text-secondary">Accueil</a></li>
						<li><a href="#" class="nav-link px-2 text-white">Stages</a></li>
						<li><a href="#" class="nav-link px-2 text-white">Projets</a></li>
						<li><a href="#" class="nav-link px-2 text-white">FAQ</a></li>
						<li><a href="#" class="nav-link px-2 text-white">About</a></li>
					</ul>

					<div class="text-end pt-3">
						<a href="/index.html#experience" class="btn btn-azmog rounded-5 mx-1">Mes experiences</a>
						<a href="/index.html#projets" class="btn btn-azmog rounded-5 mx-1">Projets</a>
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
					<img src="img/azmog.png" loading="lazy" width="303" sizes="(max-width: 479px) 88vw, 303px" alt="" srcset="img/azmog-p-500.png 500w, img/azmog.png 612w" class="photo-adam" />

					<!--TXT ANIME-->
					<div class="text-anim text-light"><p id="typingtext"></p></div>

					<!--CV-->
					<div class="box-container">
						<a href="documents/Portfolio-Adam-Marzuk.pdf" target="_blank" class="button-cv">CV FR</a>
						<a href="documents/Portfolio-Adam-Marzuk-en.pdf" target="_blank" class="button-cv">CV EN</a>
					</div>

					<!--MACBOOK-->
					<img src="img/Macbook-Pro---Copy1-1920x1080.png" loading="lazy" width="50%" sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 1919px) 94vw, 1140px" alt="img-Macbook" srcset="img/Macbook-Pro---Copy1-1920x1080-p-500.png 500w, img/Macbook-Pro---Copy1-1920x1080-p-800.png 800w, img/Macbook-Pro---Copy1-1920x1080-p-1080.png 1080w, img/Macbook-Pro---Copy1-1920x1080-p-1600.png 1600w, img/Macbook-Pro---Copy1-1920x1080.png 1920w" class="macbook pt-5" />
				</div>

				<!--MES EXPERIENCES-->
				<div class="experience-div" id="experience">
					<h2 class="text-center">Mes expériences</h2>
					<img src="img/presentation.png" loading="lazy" sizes="(max-width: 1919px) 100vw, 1140px" srcset="img/presentation-500.png 500w, img/presentation-800.png 800w, img/presentation-1080.png 1080w" alt="image presentation" class="image-presentation" />
				</div>
			</div>
			<!--============================================================SECTION PROJET / STAGES============================================================================================================-->
			<div id="projets" class="projet-web section pt-5">
				<h1 id="projet-id" class="heading-4 projet-class">Mes projets | Stages</h1>
				<div id="projet-grille" class="w-layout-grille projet-grille">
					<div id="pc">
						<img src="img/pc1.jpg" loading="lazy" width="100%" height="60%" alt="" class="image-pc" />
						<div class="projet-texte">
							<a class="projet-titre">Pao / Graphismes / Maquettes 3D<br /></a>
							<div class="paragraph-light">J&#x27;ai conçu une maquette 3D pour une entreprise <br />J&#x27;ai appris la pao sur Correl Draw,</div>
						</div>
					</div>
					<div id="cablage">
						<div class="projet-texte">
							<img src="img/montage.jpg" loading="lazy" width="50%" height="50%" alt="" class="image-pc" />
							<a class="projet-titre">Cablages</a>
							<div class="paragraph-light">J&#x27;ai appris les différentes normes électriques ainsi que le câblage<br />d&#x27;enseignes a led / néon avec les différentes techniques,<br />lettres boitiers, caissons lumineux etc...</div>
						</div>
					</div>
					<div id="adhesif">
						<img src="img/adhesif.jpg" loading="lazy" width="100%" height="80%" alt="" class="image-pc" />
						<div class="projet-texte">
							<a class="projet-titre">Adhésif / Impression</a>
							<div class="paragraph-light">J&#x27;ai appris la pose d&#x27;adhésifs sur des lettres, le lancement d&#x27;impressions sur les différentes machines, les découpes etc...</div>
						</div>
					</div>
					<div id="flowtech">
						<div class="projet-texte">
							<iframe src="https://flowtech-nomodale.adam-marzuk.fr/" id="frame-flowtech" frameborder="0" width="90%" height="500" class="web-flowtech" style="border-radius: 20px"></iframe>
							<a class="projet-titre">FlowTech</a>
							<div class="paragraph-light">Projet de création d'une entreprise fictive FlowTech de montage de pc fait en js, html, css</div>
							<a href="https://flowtech-sio.fr" target="_blank" class="button-cv bg-flowtech">Accéder au projet !</a>
						</div>
					</div>
				</div>
			</div>
			<!--============================================================FIN SECTION PROJET / STAGES============================================================================================================-->
			<div class="projet-mobile pt-5">
				<h1 class="heading-4">Mes projets | Stages</h1>
				<div>
					<div>
						<img src="img/pc1.jpg" loading="lazy" width="100%" height="100%" alt="" class="image-mobile mt-3" />
						<div class="projet-texte-mobile">
							<a class="projet-titre-mobile">Pao / Graphismes / Maquettes 3D<br /></a>
							<div class="paragraph-light">J&#x27;ai conçu une maquette 3D pour une entreprise <br />J&#x27;ai appris la pao sur Correl Draw,</div>
						</div>
					</div>
					<div>
						<div class="projet-texte">
							<img src="img/montage.jpg" loading="lazy" width="100%" height="100%" alt="" class="image-mobile" />
							<a class="projet-titre-mobile">Cablages</a>
							<div class="paragraph-light">J&#x27;ai appris les différentes normes électriques ainsi que le câblage<br />d&#x27;enseignes a led / néon avec les différentes techniques,<br />lettres boitiers, caissons lumineux etc...</div>
						</div>
					</div>
					<div>
						<img src="img/adhesif.jpg" loading="lazy" width="100%" height="100%" alt="" class="image-mobile" />
						<div class="projet-texte-mobile">
							<a class="projet-titre-mobile">Adhésif / Impression</a>
							<div class="paragraph-light">J&#x27;ai appris la pose d&#x27;adhésifs sur des lettres, le lancement d&#x27;impressions sur les différentes machines, les découpes etc...</div>
						</div>
					</div>
					<div>
						<img src="img/flowtech.png" loading="lazy" width="100%" height="100%" alt="" class="image-mobile" />
						<div class="projet-texte-mobile">
							<a class="projet-titre-mobile">FlowTech</a>
							<div class="paragraph-light">Projet de création d'une entreprise fictive FlowTech de montage de pc fait en js, html, css</div>
							<a href="https://flowtech-sio.fr" target="_blank" class="button-cv bg-flowtech">Accéder au projet !</a>
						</div>
					</div>
				</div>
			</div>
		</div>

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
