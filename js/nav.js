$(window).on("scroll", function () {
	if ($(window).scrollTop()) {
		$("nav").addClass("color");
	} else {
		$("nav").removeClass("color");
	}
});
/*menu button onclick function*/ $(document).ready(function () {
	$(".menu h4").click(function () {
		$("nav ul").toggleClass("active");
	});
});
