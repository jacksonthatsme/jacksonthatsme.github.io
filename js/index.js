$(document).ready(function(){
  var playVideo = $('[data-js="play-video"]');
  
  
  playVideo.on('click', function(){
    var parentMedia = this.closest('[data-js="media-object"]');
    var videoEl = $(parentMedia).find('video')[0];
    videoEl.load();
    videoEl.play();
    var mediaOverlay = $(parentMedia).find('[data-js="media-overlay"]');
    var buttonFront = $(parentMedia).find('[data-js="button-front"]');
    var buttonBack = $(parentMedia).find('[data-js="button-back"]');
    mediaOverlay.addClass('hide');
    videoEl.addEventListener('ended', function() {
      buttonFront.text('Re');
      buttonBack.text('Play');
      mediaOverlay.removeClass('hide');
    }, false);
  });
});