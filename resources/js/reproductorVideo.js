var videoPlayer;

function reprodMiVideo(typeConnection, userAccept){

    if(userAccept===false || typeConnection==='none') return;

        
        link = document.videoLink;
        poster = document.videoPoster;
        $(this).css({opacity:1});
        //transition effect
        $('.mask').fadeTo("fast", 0.6);
        $modal = $(".modalVideo");
        $modal.css('opacity', 0);
        $modal.css('display', 'block');

        $('.vjs-big-play-button').css({height:$('.vjs-big-play-button').width()});
                                  
        if (videoPlayer) 
            videoPlayer.hide();
                                  
        //transition effect
        $modal.animate({
            opacity: 1
        }, function() {
                                                 
            // Animation complete
            var $this = $(this);
            var $cierre = $this.find('.closeVideo');
            var $fullS = $this.find('.fullS');

            var playWhenPossible = function() {
                if(this.tech) {
                    this.play();
                } else {
                    setTimeout($.proxy(playWhenPossible, this), 1);
                }
            }                                                 

            $cierre.on('click', function(e) {
                //Cancel the link behavior
                e.preventDefault();
                                                               
                $('.mask').hide(); //ocultamos la mascara
                $('.modalVideo').hide(); // ocultamos el popup

                $(this).unbind('click');
                videoPlayer.pause();
            });
                                                 
            $('.fullS').on('click', function() {
                //Cancel the link behavior
                videoPlayer.requestFullScreen();
            });
                                                 
            if (!navigator.onLine) {
                $(".sinConexion").show();
                return;
            }
            var videoQuality = "_3G";
            if (window.top.navigator.network && window.top.navigator.network.connection) {
                var connType = window.top.navigator.network.connection.type;
                if (!connType || connType == window.top.Connection.NONE || connType == window.top.Connection.UNKNOWN) {
                    $(".sinConexion").show();
                    return;
                } else if (connType == window.top.Connection.WIFI||
                    connType == window.top.Connection.ETHERNET) {
                    videoQuality = "_WIFI"; // "_WIFI";
                }
            }
            $(".sinConexion").hide();
                                                 
                                                 
            _V_("videoContainer").
            ready(function() {

                videoPlayer = this;
                

                
                    videoPlayer.posterImage.el.src="images/"+poster;
                    videoPlayer.posterImage.show();

                    videoPlayer.src(window.top.contentsURL+link+'_3G'+".mp4");

                    videoPlayer.controlBar.volumeControl.hide();
                                                               
                    videoPlayer.show();

                    playWhenPossible.apply(videoPlayer);
                                                       
            });
        });
                                  
    };



$(document).ready(function(){

    // Pausar el vÃ­deo si se oculta la pÃ¡gina
    $(document).bind("pagehide", function(e) {
        if (videoPlayer) {
            $('.mask').hide(); //ocultamos la mascara
            $('.modalVideo').hide(); // ocultamos el popup

            $(this).unbind('click');
            videoPlayer.pause();
        }
    });
    
    videoPlayer = _V_("videoContainer");

    $('.lanzaVideo').on('click', function(e) {
        stopSwiperView();
        checkConnection.call(this, reprodFullScreen.bind(this), true);
        // document.videoLink = $(this).attr('video');
        // document.videoPoster = $(this).attr('poster');
        // checkConnection( reprodFullScreen, true);
    });

    $('.mask, .modalVideo').bind("touchmove", function(e) {
        stopSwiperView();
    });
    
});


function reprodFullScreen(typeConnection, userAccept) {
    if (userAccept === false || typeConnection==='none') return;

    var link = $(this).attr('video');
    // var link = document.videoLink;
    var videoQuality = typeConnection == 'wifi' ? '_WIFI' : '_3G';
    var videoUrl = window.top.contentsURL+link+'_3G'+".mp4";

    playVideo.call(this, videoUrl);
    // playVideo(videoUrl);
}