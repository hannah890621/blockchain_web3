$(window).scroll(function(){
	if ($(this).scrollTop()>200) {
		$('#backtotop').fadeIn(); 
	}

 	else{
		$('#backtotop').fadeOut();
	}
});


// $('.center').slick({
//   	centerMode: true,
//   	centerPadding: '60px',
//   	slidesToShow: 3,
// 	responsive: [{
// 	    breakpoint: 768,
// 	    settings: {
// 		    arrows: false,
// 		    centerMode: true,
// 		    centerPadding: '40px',
// 		    slidesToShow: 3
// 	    }
// 	},
// 	{
// 	    breakpoint: 480,
// 	    settings: {
// 		    arrows: false,
// 		    centerMode: true,
// 		    centerPadding: '40px',
// 		    slidesToShow: 1
// 	    }
// 	}]
// });
