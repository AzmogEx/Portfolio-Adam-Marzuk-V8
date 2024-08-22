<?php
session_start();
?>
<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Magasin - FlowTech</title>
	<meta name="description" content="FlowTech, surement les meilleurs PC du marché!" />
	<link rel="icon" type="image/x-icon" href="../img/logos/logo-min-rounded.png" />
	<!-- CSS CUSTOM + BOOTSTRAP -->
	<link href="../css/custom.css" rel="stylesheet" />
	<!-- BOOTSTRAP ICONS-->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css" />
</head>

<body class="bg-dark">
	<header class="header-shop">
		<!-- NAVBAR -->
		<?php include 'components/navbar.php'; ?>
		<!--Fin de nav-->
		<div class="px-4 pt-5 my-5 text-center">
			<h1 class="display-4 fw-bold text-flowtech">Magasin</h1>
			<div class="col-lg-6 mx-auto">
				<p class="lead mb-4 text-light">Dans le magasin FlowTech vous trouverez des configurations élaborés par nos soins. Les PC sont livrés chez vous montés et prêts à jouer.</p>
				<!-- BOUTON PANIER-->
				<div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
					<a class="btn btn-flowtech btn-lg px-4 me-sm-3" href="panier.php">Accéder au panier <img width="20" src="../icon/cart.png" alt="" /> </a>
				</div>
			</div>
		</div>
	</header>
	<!-- CARTE PC -->
	<section class="container mt-5">
		<!-- LIGNE 1-->
		<div class="row">
			<div class="col-12 col-lg-3 mt-3">
				<div class="card bg-transparent border-flowtech border-1 h-100 mt-2">
					<div class="shop-card-img">
						<img src="../img/abyssin-geforce-rtx.png" class="card-img-top" alt="..." />
					</div>
					<!--CARTE GRAPHIQUE-->
					<div class="card-body d-flex flex-column">
						<h5 class="card-title text-light text-center">PC Savana</h5>
						<p class="card-text text-light text-center">1.949,00 €</p>
						<p class="card-text text-light"><img width="15" src="../icon/graphic-card.png" alt="Carte PC RTX" /> Nvidia Geforce-Rtx 4070ti.</p>
						<!--PROCESSEUR-->
						<p class="card-text text-light">
							<img width="15" src="../icon/processor.png" alt="icon-graphic-card" />
							AMD Ryzen 7 4500 (4.1 GHz).
						</p>
						<!--RAM-->
						<p class="card-text text-light">
							<img width="15" src="../icon/ram.png" alt="processor" />
							DDR4 Corsair RGB vengeance 2x16GB 3200Mhz
						</p>
						<!--SSD-->
						<p class="card-text text-light">
							<img width="15" src="../icon/ssd.png" alt="ssd-png" />
							M2 NVME 2TO
						</p>
						<!--Panier-->
						<a href="#" class="btn btn-flowtech mt-auto" onclick="ajouterAuPanier('pc1')">Ajouter au panier</a>
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-3 mt-3">
				<div class="card bg-transparent border-flowtech border-1 h-100 mt-2">
					<div class="shop-card-img">
						<img src="../img/atlas-gforce-rtx.png" class="card-img-top" alt="..." />
					</div>
					<!--CARTE GRAPHIQUE-->
					<div class="card-body d-flex flex-column">
						<h5 class="card-title text-light text-center">PC Kraken</h5>
						<p class="card-text text-light text-center">1.399,99 €</p>
						<p class="card-text text-light"><img width="15" src="../icon/graphic-card.png" alt="" /> Nvidia Geforce-Rtx 3O50.</p>
						<!--PROCESSEUR-->
						<p class="card-text text-light">
							<img width="15" src="../icon/processor.png" alt="icon-graphic-card" />
							AMD Ryzen 5 550 (4.2 GHz).
						</p>
						<!--RAM-->
						<p class="card-text text-light">
							<img width="15" src="../icon/ram.png" alt="processor" />
							DDR4 Corsair LPX vengeance 2x8GB 3200Mhz
						</p>
						<!--SSD-->
						<p class="card-text text-light">
							<img width="15" src="../icon/ssd.png" alt="ssd-png" />
							M2 NVME 500 GB
						</p>
						<a href="#" class="btn btn-flowtech mt-auto" onclick="ajouterAuPanier('pc2')">Ajouter au panier</a>
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-3 mt-3">
				<div class="card bg-transparent border-flowtech border-1 h-100 mt-2">
					<div class="shop-card-img">
						<img src="../img/cheetoh-geforce-rtx.png" class="card-img-top" alt="..." />
					</div>
					<!--CARTE GRAPHIQUE-->
					<div class="card-body d-flex flex-column">
						<h5 class="card-title text-light text-center">PC Atlas</h5>
						<p class="card-text text-light text-center">1.499,99 €</p>
						<p class="card-text text-light"><img width="15" src="../icon/graphic-card.png" alt="" /> Nvidia Geforce-Rtx 4060ti.</p>
						<!--PROCESSEUR-->
						<p class="card-text text-light">
							<img width="15" src="../icon/processor.png" alt="icon-graphic-card" />
							AMD Ryzen 5 5700X.
						</p>
						<!--RAM-->
						<p class="card-text text-light">
							<img width="15" src="../icon/ram.png" alt="processor" />
							DDR4 Corsair RGB vengeance 2x8GB 3200Mhz
						</p>
						<!--SSD-->
						<p class="card-text text-light">
							<img width="15" src="../icon/ssd.png" alt="ssd-png" />
							M2 NVME 750 GB
						</p>
						<a href="#" class="btn btn-flowtech mt-auto" onclick="ajouterAuPanier('pc3')">Ajouter au panier</a>
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-3 mt-3">
				<div class="card bg-transparent border-flowtech border-1 h-100 mt-2">
					<div class="shop-card-img">
						<img src="../img/fractal-north-rx.png" class="card-img-top" alt="..." />
					</div>
					<!--CARTE GRAPHIQUE-->
					<div class="card-body d-flex flex-column">
						<h5 class="card-title text-light text-center">PC Fractal-North</h5>
						<p class="card-text text-light text-center">1.899,99 €</p>
						<p class="card-text text-light"><img width="15" src="../icon/graphic-card.png" alt="" /> Nvidia Geforce-Rtx 4060ti.</p>
						<!--PROCESSEUR-->
						<p class="card-text text-light">
							<img width="15" src="../icon/processor.png" alt="icon-graphic-card" />
							Intel core i5-13600KF 5,1Ghz.
						</p>
						<!--RAM-->
						<p class="card-text text-light">
							<img width="15" src="../icon/ram.png" alt="processor" />
							DDR5 Corsair RGB vengeance 2x8GB 3200Mhz
						</p>
						<!--SSD-->
						<p class="card-text text-light">
							<img width="15" src="../icon/ssd.png" alt="ssd-png" />
							M2 NVME 1 To
						</p>
						<a href="#" class="btn btn-flowtech mt-auto" onclick="ajouterAuPanier('pc4')">Ajouter au panier</a>
					</div>
				</div>
			</div>
		</div>
		<!-- 2EME LIGNE -->
		<div class="row mt-5">
			<div class="col-12 col-lg-3 mt-3">
				<div class="card bg-transparent border-flowtech border-1 h-100 mt-2">
					<div class="shop-card-img">
						<img src="../img/french-ultimate-rtx.png" class="card-img-top" alt="..." />
					</div>
					<!--CARTE GRAPHIQUE-->
					<div class="card-body d-flex flex-column">
						<h5 class="card-title text-light text-center">PC Tracer</h5>
						<p class="card-text text-light text-center">5.999,99 €</p>
						<p class="card-text text-light"><img width="15" src="../icon/graphic-card.png" alt="" /> Nvidia Geforce-Rtx 4090.</p>
						<!--PROCESSEUR-->
						<p class="card-text text-light">
							<img width="15" src="../icon/processor.png" alt="icon-graphic-card" />
							AMD Ryzen 9 8900 (8.2 GHz).
						</p>
						<!--RAM-->
						<p class="card-text text-light">
							<img width="15" src="../icon/ram.png" alt="processor" />
							DDR5 Corsair RGB vengeance 2x8GB 3200Mhz
						</p>
						<!--SSD-->
						<p class="card-text text-light">
							<img width="15" src="../icon/ssd.png" alt="ssd-png" />
							M2 NVME 1 To
						</p>
						<a href="#" class="btn btn-flowtech mt-auto" onclick="ajouterAuPanier('pc5')">Ajouter au panier</a>
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-3 mt-3">
				<div class="card bg-transparent border-flowtech border-1 h-100 mt-2">
					<div class="shop-card-img">
						<img src="../img/frost-lian-rtx.png" class="card-img-top" alt="..." />
					</div>
					<!--CARTE GRAPHIQUE-->
					<div class="card-body d-flex flex-column">
						<h5 class="card-title text-light text-center">PC Freezer</h5>
						<p class="card-text text-light text-center">2.999,99 €</p>
						<p class="card-text text-light"><img width="15" src="../icon/graphic-card.png" alt="" /> Nvidia Geforce-Rtx 4090.</p>
						<!--PROCESSEUR-->
						<p class="card-text text-light">
							<img width="15" src="../icon/processor.png" alt="icon-graphic-card" />
							Intel core i9 13900KF (5,8Ghz)
						</p>
						<!--RAM-->
						<p class="card-text text-light">
							<img width="15" src="../icon/ram.png" alt="processor" />
							DDR5 Corsair RGB vengeance 2x16GB 6000Mhz
						</p>
						<!--SSD-->
						<p class="card-text text-light">
							<img width="15" src="/icon/ssd.png" alt="ssd-png" />
							M2 NVME 2 To
						</p>
						<a href="#" class="btn btn-flowtech mt-auto" onclick="ajouterAuPanier('pc6')">Ajouter au panier</a>
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-3 mt-3">
				<div class="card bg-transparent border-flowtech border-1 h-100 mt-2">
					<div class="shop-card-img">
						<img src="../img/good-guy-rtx.png" class="card-img-top" alt="..." />
					</div>
					<!--CARTE GRAPHIQUE-->
					<div class="card-body d-flex flex-column">
						<h5 class="card-title text-light text-center">PC Orion</h5>
						<p class="card-text text-light text-center">1.199,99 €</p>
						<p class="card-text text-light"><img width="15" src="../icon/graphic-card.png" alt="" /> Nvidia Geforce-Rtx 3070.</p>
						<!--PROCESSEUR-->
						<p class="card-text text-light">
							<img width="15" src="../icon/processor.png" alt="icon-graphic-card" />
							Intel core i5-13600KF 5,1Ghz
						</p>
						<!--RAM-->
						<p class="card-text text-light">
							<img width="15" src="../icon/ram.png" alt="processor" />
							DDR4 Corsair RGB vengeance 2x8GB 3200Mhz
						</p>
						<!--SSD-->
						<p class="card-text text-light">
							<img width="15" src="../icon/ssd.png" alt="ssd-png" />
							M2 NVME 500 GB
						</p>
						<a href="#" class="btn btn-flowtech mt-auto" onclick="ajouterAuPanier('pc7')">Ajouter au panier</a>
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-3 mt-3">
				<div class="card bg-transparent border-flowtech border-1 h-100 mt-2">
					<div class="shop-card-img">
						<img src="../img/orion-geforce-rtx.png" class="card-img-top" alt="..." />
					</div>
					<!--CARTE GRAPHIQUE-->
					<div class="card-body d-flex flex-column">
						<!--TODO FIX LE BUG DE LA CARD TROP GRAND POUR PC OMEGA-->
						<h5 class="card-title text-light text-center">PC Omega</h5>
						<p class="card-text text-light text-center">1.349,00 €</p>
						<p class="card-text text-light"><img width="15" src="../icon/graphic-card.png" alt="" /> Nvidia Geforce-Rtx 3080.</p>
						<!--PROCESSEUR-->
						<p class="card-text text-light">
							<img width="15" src="../icon/processor.png" alt="icon-graphic-card" />
							Intel core i7 13700KF 5,4Ghz
						</p>
						<!--RAM-->
						<p class="card-text text-light">
							<img width="15" src="../icon/ram.png" alt="processor" />
							DDR5 Corsair RGB vengeance 2x16GB 5200Mhz
						</p>
						<!--SSD-->
						<p class="card-text text-light">
							<img width="15" src="../icon/ssd.png" alt="ssd-png" />
							M2 NVME 1 To
						</p>
						<a href="#" class="btn btn-flowtech mt-auto" onclick="ajouterAuPanier('pc8')">Ajouter au panier</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- FOOTER -->
	<?php include '../pages/components/cookies.php'; ?>
	<?php include 'components/footer.php'; ?>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
	<script src="/js/panier.js"></script>
</body>

</html>