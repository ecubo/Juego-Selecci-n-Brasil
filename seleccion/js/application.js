var number, intervalo, puntos, listaIconos;
puntos = 0;
listaIconos = '<li onclick="" data-role="1" class="ok" id="banderas" style="background-image:url(images/iconos/banderas.png)"></li><li onclick="" data-role="2" class="ok" id="bombo" style="background-image:url(images/iconos/bombo.png)"></li><li onclick="" data-role="3" class="ok" id="camiseta" style="background-image:url(images/iconos/camiseta.png)"></li><li onclick="" data-role="4" class="ok" id="vuvucela" style="background-image:url(images/iconos/vuvucela.png)"></li><li onclick="" data-role="5" style="background-image:url(images/iconos/bombin.png)"></li><li onclick="" data-role="6" style="background-image:url(images/iconos/calcetines.png)"></li><li onclick="" data-role="7" style="background-image:url(images/iconos/corbata.png)"></li><li onclick="" data-role="8" style="background-image:url(images/iconos/gorro.png)"></li><li onclick="" data-role="9" style="background-image:url(images/iconos/olla.png)"></li><li onclick="" data-role="10" style="background-image:url(images/iconos/paraguas.png)"></li><li onclick="" data-role="11" style="background-image:url(images/iconos/regadera.png)"></li>'
listaIconos = '<li onclick="" data-role="1" class="ok" id="banderas" style="background-image:url(images/iconos/banderas.png)"></li><li onclick="" data-role="2" class="ok" id="bombo" style="background-image:url(images/iconos/bombo.png)"></li><li onclick="" data-role="3" class="ok" id="camiseta" style="background-image:url(images/iconos/camiseta.png)"></li><li onclick="" data-role="4" class="ok" id="vuvucela" style="background-image:url(images/iconos/vuvucela.png)"></li><li onclick="" data-role="5" style="background-image:url(images/iconos/bombin.png)"></li><li onclick="" data-role="6" style="background-image:url(images/iconos/calcetines.png)"></li><li onclick="" data-role="7" style="background-image:url(images/iconos/corbata.png)"></li><li onclick="" data-role="8" style="background-image:url(images/iconos/gorro.png)"></li>'

$('#landing').one('click', function(e){
    e.preventDefault();
	$('#preparate').show();
	$('#landing').css({backgroundImage:'none'});
});

$('#play, #replay').on('click', function(e){
    e.preventDefault();
	$(this).hide();
	$('#iconos li').remove();
	$('#iconos').show();
	$('#iconos').append(listaIconos);

	$('#iconos li').on('mousedown touchstart', function(e){
	    e.preventDefault();
		// e.stopPropagation();
		$('#iconos li').removeClass('active');

		if ($(this).hasClass('ok')) {
			$('#gol').show();
			goal.pause();
			goal.play();
			setTimeout(function(){$('#gol').hide();},2000);
			var cual = '#g'+$(this).attr('id');
			$(cual).show();
			puntos++;
			$(this).remove();
			clearInterval(intervalo);
			// myTimer();
			intervalo = setInterval(function(){
				myTimer()
			},2000);
			if (puntos < 4) {
				$('#puntuacion li:nth-child('+puntos+')').addClass('active');
			}
			else {
				$('#puntuacion li:nth-child('+puntos+')').addClass('active');
				$('#iconos').hide();
				$('#iconos li').off('mousedown touchstart');
				clearInterval(intervalo);
				$('#iconos li').removeClass('active');
				setTimeout(function(){
					puntos = 0;
					$('#puntuacion li').removeClass('active');
					$('#preparate').css({backgroundImage:'url(images/bkFin.png)'});
					$('.goles, #puntuacion').hide();
					$('#localizador, #replay').show();
				},2000);
			}
		}
		else {
			$('#error').show();
			fallo.pause();
			fallo.play();
			setTimeout(function(){$('#error').hide();},1000);
			// myTimer();
		}
	});
	$('#localizador, #replay, .goles').hide();
	$('#preparate').css({backgroundImage:'url(images/bkMaleta.png)'});
	$('#puntuacion, #iconos').show();

	myTimer();
	intervalo = setInterval(function(){
		myTimer();
	},2000);

});

$('.btnCerrar').on('click', function(e){
    e.preventDefault();
	goal.pause();
	fallo.pause();
	clearInterval(intervalo);
	$('#landing').css({backgroundImage:'url(images/bkLanding.png)'});
	$('#iconos li').off('mousedown touchstart');
	$('#puntuacion li, #iconos li').removeClass('active');
	$('#preparate').css({backgroundImage:'url(images/bkPreparate.png)'});
	$('.goles, #localizador, #replay, #iconos, #error, #gol').hide();
	puntos = 0;
	$(this).parent().hide();
	setTimeout(function(){
		$('#landing').one('click', function(e){
		    e.preventDefault();
			$('#preparate, #play').show();
			$('#landing').css({backgroundImage:'none'});
		});
	},500);
});

function myTimer() {
	$('#iconos li').removeClass('active');
	number = Math.floor(Math.random() * (($('#iconos li').length)-1+1)) + 1;
	$('#iconos li:nth-child('+number+')').addClass('active');
}

// SONIDOS
document.addEventListener('pageshow', function() {
	fondo.play();
});

document.addEventListener('pagehide', function() {
	goal.pause();
	fallo.pause();
	fondo.pause();
});

// STOP HORIZONTAL ANDROID
// $('#iconos').on('mousedown touchstart', function(e) {
// 	stopSwiperView();
// });
// STOP HORIZONTAL IPAD
// $('#iconos').on('mousedown touchstart', function(e) {
// 	e.stopPropagation();
// 	e.preventDefault();
// });