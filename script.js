
$(document).ready(function() {

	var pageHeight = $(window).height();
	var pageWidth = $(window).width();  
 
 					
//orientation: portrait
if (pageHeight > 1000 && pageWidth > 600 && pageHeight > pageWidth) {
		

		//wyjazd kropek w stronę #logo_L
		$(window).on('load', function(){
 			$('#line-small').delay(2000).animate({'width':'10%'}, 2000, 'easeOutBounce');
 		});

		// zmiana kolorów i wyświetlanych tabów

		var buttons = $('.two-dots');
		var tabsy = $('.nav-dot');

		buttons.each(function(index){
			$(this).on('click', function(){
				$('#main-dot #tab-1').css({'display':'none'});
				buttons.removeClass('activetab').eq(index).addClass('activetab');
				tabsy.removeClass('visibletext').eq(index+1).addClass('visibletext');
			});
		});


			$('#go-to-contact').on('click', function(){
				$('#main-dot #tab-3').css({'display':'none'});
				buttons.removeClass('activetab').eq('#main-dot #tab-5').addClass('activetab');
				tabsy.removeClass('visibletext').eq('#main-dot #tab-5').addClass('visibletext');
			});
		
	
	// koniec zmiany kolorów
		
		//Powrót na stronę główną

	$('#back img').on('click', function(){
		location.reload();
	});

	// Kliknięcie logo na pierwszej stronie

	$('#logo_L').on('click',function(){
		$(this).fadeOut(1000, 'swing');
		$('#main h1').fadeOut();
		$('#main p').fadeOut();
		$('#foot').fadeOut();
		$('#line-small').fadeOut();
		$('header').delay(1000).fadeIn(1000, 'swing');
		$('#back').delay(1000).css({'display':'block'}).fadeIn(1000, 'swing');
		$('#back img').delay(1000).css({'display':'block'}).fadeIn(1000, 'swing');
		$('#nav-tabs').delay(1000).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'-webkit-flex'}).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'-ms-flexbox'}).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'flex'}).fadeIn(1000, 'swing');
		$('#flex-container .two-dots').delay(1000).css({'display':'block'}).fadeIn(1000, 'swing');
		$('#main-dot').delay(1000).fadeIn(1000, 'swing');
		$('#tab-1').delay(1100).fadeIn(1000, 'swing');
		$('#tab-2').css({'display':'none'});
		$('#tab-3').css({'display':'none'});
		$('#tab-4').css({'display':'none'});
		$('#tab-5').css({'display':'none'});

	});

//kliknięcie 'KATARZYNA WALENKO' na pierwszej stronie

	$('#main h1').on('click',function(){
		$(this).fadeOut(1000, 'swing');
		$('#logo_L').fadeOut(1000, 'swing');
		$('#main p').fadeOut(1000, 'swing');
		$('#foot').fadeOut(1000, 'swing');
		$('#line-small').fadeOut();
		$('header').delay(1000).fadeIn(1000, 'swing');
		$('#back').delay(1000).css({'display':'block'}).fadeIn(1000, 'swing');
		$('#back img').delay(1000).css({'display':'block'}).fadeIn(1000, 'swing');
		$('#nav-tabs').delay(1000).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'-webkit-flex'}).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'-ms-flexbox'}).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'flex'}).fadeIn(1000, 'swing');
		$('#flex-container .two-dots').delay(1000).css({'display':'block'}).fadeIn(1000, 'swing');
		$('#main-dot').delay(1000).fadeIn(1000, 'swing');
		$('#tab-2').delay(1100).fadeIn(1000, 'swing');
		$('#tab-1').css({'display':'none'});
		$('#tab-3').css({'display':'none'});
		$('#tab-4').css({'display':'none'});
		$('#tab-5').css({'display':'none'});
		
		//po wejściu do kontaktu z głównej strony, znika #tab-2 po kliknięciu w każdy inny przycisk menu:
		buttons.each(function(index){
			$(this).on('click', function(){
				$('#main-dot #tab-2').css({'display':'none'});
			});
		});
	});


//kliknięcie na foot img na pierwszej stronie

	$('#foot a').on('click',function(){
		$('#foot').fadeOut(1000, 'swing');
		$('#logo_L').fadeOut(1000, 'swing');
		$('#main p').fadeOut(1000, 'swing');
		$('#main h1').fadeOut(1000, 'swing');
		$('#line-small').fadeOut();
		$('header').delay(1000).fadeIn(1000, 'swing');
		$('#back').delay(1000).css({'display':'block'}).fadeIn(1000, 'swing');
		$('#back img').delay(1000).css({'display':'block'}).fadeIn(1000, 'swing');
		$('#nav-tabs').delay(1000).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'-webkit-flex'}).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'-ms-flexbox'}).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'flex'}).fadeIn(1000, 'swing');
		$('#flex-container .two-dots').delay(1000).css({'display':'block'}).fadeIn(1000, 'swing');
		$('#main-dot').delay(1000).fadeIn(1000, 'swing');
		$('#tab-5').delay(1100).fadeIn(1000, 'swing');
		$('#tab-1').css({'display':'none'});
		$('#tab-2').css({'display':'none'});
		$('#tab-3').css({'display':'none'});
		$('#tab-4').css({'display':'none'});

		
		//po wejściu do kontaktu z głównej strony, znika #tab-5 po kliknięciu w każdy inny przycisk menu

		buttons.each(function(index){
			$(this).on('click', function(){
				$('#main-dot #tab-5').css({'display':'none'});
			});
		});
		
	});

	//Kliknięcie na 'skontaktuj się' w CV
	$('#go-to-contact').on('click', function(){
		$('#dot-cv').removeClass('activetab');
		$('#dot-contact').addClass('activetab');
		$('#main-dot #tab-3').removeClass('visibletext');
		$('#main-dot #tab-5').addClass('visibletext');
	});

//orientation: landscape
 } else if (pageHeight < pageWidth && pageHeight > 700 && pageWidth > 900){

 		//wyjazd kropek do #logo_L
 		$(window).on('load', function(){
 			$('#line-small').delay(2000).animate({'width':'35%'}, 4000, 'easeOutBounce');
 		});

 		var buttons = $('.two-dots');
		var tabsy = $('.nav-dot');

		buttons.each(function(index){
			$(this).on('click', function(){
				$('#main-dot #tab-1').css({'display':'none'});
				buttons.removeClass('activetab').eq(index).addClass('activetab');
				tabsy.removeClass('visibletext').eq(index+1).addClass('visibletext');
			});
		});

	$('#back img').on('click', function(){
		location.reload();
		
	});

	// Kliknięcie logo na pierwszej stronie

	$('#logo_L').on('click',function(){
		$(this).fadeOut(1000, 'swing');
		$('#main h1').fadeOut();
		$('#main p').fadeOut();
		$('#foot').fadeOut();
		$('#line-small').fadeOut();
		$('header').delay(1000).fadeIn(1000, 'swing');
		$('#back').delay(1000).css({'display':'block'}).fadeIn(1000, 'swing');
		$('#back img').delay(1000).css({'display':'block'}).fadeIn(1000, 'swing');
		$('#nav-tabs').delay(1000).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'-webkit-flex'}).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'-ms-flexbox'}).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'flex'}).fadeIn(1000, 'swing');
		$('#flex-container .two-dots').delay(1000).css({'display':'block'}).fadeIn(1000, 'swing');
		$('#main-dot').delay(1200).fadeIn(1000, 'swing');

	});

	
//kliknięcie 'KATARZYNA WALENKO' na pierwszej stronie

	$('#main h1').on('click',function(){
		$(this).fadeOut(1000, 'swing');
		$('#logo_L').fadeOut(1000, 'swing');
		$('#main p').fadeOut(1000, 'swing');
		$('#foot').fadeOut(1000, 'swing');
		$('#line-small').fadeOut();
		$('header').delay(1000).fadeIn(1000, 'swing');
		$('#back').delay(1000).css({'display':'block'}).fadeIn(1000, 'swing');
		$('#back img').delay(1000).css({'display':'block'}).fadeIn(1000, 'swing');
		$('#nav-tabs').delay(1000).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'-webkit-flex'}).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'-ms-flexbox'}).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'flex'}).fadeIn(1000, 'swing');
		$('#flex-container .two-dots').delay(1000).css({'display':'block'}).fadeIn(1000, 'swing');
		$('#main-dot').delay(1000).fadeIn(1000, 'swing');
		$('#tab-2').delay(1100).fadeIn(1000, 'swing');
		$('#tab-1').css({'display':'none'});
		$('#tab-3').css({'display':'none'});
		$('#tab-4').css({'display':'none'});
		$('#tab-5').css({'display':'none'});

		//po wejściu do kontaktu z głównej strony, znika #tab-2 po kliknięciu w każdy inny przycisk menu
		
		buttons.each(function(index){
			$(this).on('click', function(){
				$('#main-dot #tab-2').css({'display':'none'});
			});
		});

	});


//kliknięcie na foot img na pierwszej stronie

	$('#foot a').on('click',function(){
		$('#foot').fadeOut(1000, 'swing');
		$('#logo_L').fadeOut(1000, 'swing');
		$('#main p').fadeOut(1000, 'swing');
		$('#main h1').fadeOut(1000, 'swing');
		$('#line-small').fadeOut();
		$('header').delay(1000).fadeIn(1000, 'swing');
		$('#back').delay(1000).css({'display':'block'}).fadeIn(1000, 'swing');
		$('#back img').delay(1000).css({'display':'block'}).fadeIn(1000, 'swing');
		$('#nav-tabs').delay(1000).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'-webkit-flex'}).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'-ms-flexbox'}).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'flex'}).fadeIn(1000, 'swing');
		$('#flex-container .two-dots').delay(1000).css({'display':'block'}).fadeIn(1000, 'swing');
		$('#main-dot').delay(1000).fadeIn(1000, 'swing');
		$('#tab-5').delay(1100).fadeIn(1000, 'swing');
		$('#tab-1').css({'display':'none'});
		$('#tab-2').css({'display':'none'});
		$('#tab-3').css({'display':'none'});
		$('#tab-4').css({'display':'none'});

		//po wejściu do kontaktu z głównej strony, znika #tab-5 po kliknięciu w każdy inny przycisk menu

		buttons.each(function(index){
			$(this).on('click', function(){
				$('#main-dot #tab-5').css({'display':'none'});
			});
		});
		
	});

	//Kliknięcie na 'skontaktuj się' w CV
	$('#go-to-contact').on('click', function(){
		$('#dot-cv').removeClass('activetab');
		$('#dot-contact').addClass('activetab');
		$('#main-dot #tab-3').removeClass('visibletext');
		$('#main-dot #tab-5').addClass('visibletext');
	});

 } else {
	// Kliknięcie logo na pierwszej stronie

	//wyjazd kropek do #logo_L
	if (pageHeight > pageWidth) {

	$(window).on('load', function(){
 		$('#line-small').delay(2000).animate({'width':'20%'}, 3000, 'easeOutBounce');
 		});

	} else {
		$(window).on('load', function(){
 		$('#line-small').delay(2000).animate({'width':'30%'}, 3000, 'easeOutBounce');
 		});
	}


	$('#logo_L').on('click',function(){
		$(this).fadeOut(1000, 'linear');
		$('#main h1').fadeOut();
		$('#main p').fadeOut();
		$('#line-small').fadeOut();
		$('#foot').fadeOut();
		$('#nav-tabs').delay(1000).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'-webkit-flex'}).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'-ms-flexbox'}).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'flex'}).fadeIn(1000, 'swing');	
	});

//kliknięcie 'KATARZYNA WALENKO' na pierwszej stronie

	$('#main h1').on('click',function(){
		$(this).fadeOut('linear');
		$('#logo_L').fadeOut();
		$('#main p').fadeOut();
		$('#line-small').fadeOut();
		$('#foot').fadeOut();
		$('header').delay(1000).fadeIn(500, 'swing');
		$('#nav-tabs').delay(1000).fadeIn().css({'display':'block'});
		$('#main-dot').delay(1200).fadeIn(1000, 'swing');
		$('#tab-2').delay(1200).fadeIn(1000, 'swing');
		$('#nawi').delay(1300).fadeIn(1000, 'swing');
		$('#nawi-back').delay(1300).fadeIn().css({'display':'block'});
		$('#tab-1').css({'display':'none'});	
		$('#tab-3').css({'display':'none'});
		$('#tab-4').css({'display':'none'});
		$('#tab-5').css({'display':'none'});
	});

//kliknięcie na foot img na pierwszej stronie

	$('#foot a').on('click',function(){
		$('#foot').fadeOut('linear');
		$('#logo_L').fadeOut();
		$('#main p').fadeOut();
		$('#main h1').fadeOut();
		$('#line-small').fadeOut();
		$('header').delay(1000).fadeIn(500, 'swing');
		$('#nav-tabs').delay(1000).fadeIn().css({'display':'block'});
		$('#main-dot').delay(1200).fadeIn(1000, 'swing');
		$('#tab-5').delay(1200).fadeIn(1000, 'swing');
		$('#nawi').delay(1300).fadeIn(1000, 'swing');
		$('#nawi-back').delay(1300).fadeIn().css({'display':'block'});
		$('#tab-1').css({'display':'none'});	
		$('#tab-2').css({'display':'none'});
		$('#tab-3').css({'display':'none'});
		$('#tab-4').css({'display':'none'});
			
	});

	//______POWRÓT z drugiej strony na stronę główną________

	$ ('#home').on('click', function(){
		location.reload();
	});

	//koniec POWRÓT

	//_______O MNIE________

	$ ('#about').on('click', function(){
		$('.dot-about').animate({'background-color':'#122043'}, 500);
		$('#flex-container').fadeOut();
		$('header').delay(1000).fadeIn(500, 'swing');
		$('#main-dot').delay(1200).fadeIn(1000, 'swing');
		$('#tab-2').delay(1200).fadeIn(1000, 'swing');
		$('#nawi').delay(1300).fadeIn(1000, 'swing');
		$('#nawi-back').delay(1300).fadeIn().css({'display':'block'});
		$('#tab-1').css({'display':'none'});	
		$('#tab-3').css({'display':'none'});
		$('#tab-4').css({'display':'none'});
		$('#tab-5').css({'display':'none'});
	});

	//koniec O MNIE

	//________CV________

	$('#cv').on('click', function(){
		$('.dot-cv').animate({'background-color':'#122043'}, 500);
		$('#flex-container').fadeOut();
		$('header').delay(1000).fadeIn(500, 'swing');
		$('#main-dot').delay(1200).fadeIn(1000, 'swing');
		$('#tab-3').delay(1200).fadeIn(1000, 'swing');
		$('#nawi').delay(1300).fadeIn(1000, 'swing');
		$('#nawi-back').delay(1300).fadeIn().css({'display':'block'});	
		$('#tab-1').css({'display':'none'});	
		$('#tab-2').css({'display':'none'});
		$('#tab-4').css({'display':'none'});
		$('#tab-5').css({'display':'none'});
	});

	//Kliknięcie na 'skontaktuj się' w CV
	$('#go-to-contact').on('click', function(){
		$('#main-dot #tab-3').fadeOut(500, 'swing');
		$('#main-dot #tab-5').delay(500).fadeIn(1000, 'swing');
	});

	//koniec CV

	//________PORTFOLIO_________

	$ ('#portfolio').on('click', function(){
		$('.dot-portfolio').animate({'background-color':'#122043'}, 500);
		$('#flex-container').fadeOut();
		$('header').delay(1000).fadeIn(500, 'swing');
		$('#main-dot').delay(1200).fadeIn(1000, 'swing');
		$('#tab-4').delay(1200).fadeIn(1000, 'swing');
		$('#nawi').delay(1300).fadeIn(1000, 'swing');
		$('#nawi-back').delay(1300).fadeIn().css({'display':'block'});	
		$('#tab-1').css({'display':'none'});	
		$('#tab-2').css({'display':'none'});
		$('#tab-3').css({'display':'none'});
		$('#tab-5').css({'display':'none'});
	});

	//koniec PORTFOLIO

	//_________KONTAKT___________

	$ ('#contact').on('click', function(){
		$('.dot-contact').animate({'background-color':'#122043'}, 500);
		$('#flex-container').fadeOut();
		$('header').delay(1000).fadeIn(500, 'swing');
		$('#main-dot').delay(1200).fadeIn(1000, 'swing');
		$('#tab-5').delay(1200).fadeIn(1000, 'swing');
		$('#nawi').delay(1300).fadeIn(1000, 'swing');
		$('#nawi-back').delay(1300).fadeIn().css({'display':'block'});	
		$('#tab-1').css({'display':'none'});	
		$('#tab-2').css({'display':'none'});
		$('#tab-3').css({'display':'none'});
		$('#tab-4').css({'display':'none'});
	});


	//koniec KONTAKT

	//_________powrót z trzeciej strony na stronę główną_______

	$('#back').on('click', function(){
		location.reload();
		
	});

	//koniec: powrót z trzeciej strony na stronę główną

	//_________powrót z trzeciej strony do drugiej: nawigacja_______

	$('#nawi-back').on('click', function(){
		$('header').fadeOut().css({'display':'none'});
		$('#nawi').fadeOut();
		$('#main-dot').fadeOut();
		$('#nav-tabs').css({'height':'100%'}).delay(1000).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'-webkit-flex'}).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'-ms-flexbox'}).fadeIn(1000, 'swing');
		$('#flex-container').delay(1000).css({'display':'flex'}).fadeIn(1000, 'swing');
	});

}

});
