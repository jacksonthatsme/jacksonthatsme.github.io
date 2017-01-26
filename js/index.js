$(document).ready(function(){
  var playVideo = $('[data-js="play-video"]');
  var scrollDown = $('[data-js="scroll-down"]');
  var scrollToAbout = $('[data-js="scroll-to-about"]');
  
  
  playVideo.on('click', function() {
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
  
  scrollDown.on('click', function() {
    var firstProject = $('section.project').first();
    $('html,body').animate({
      scrollTop: firstProject.offset().top
    }, 600);
  });
  scrollToAbout.on('click', function(e) {
    e.stopPropagation();
    var aboutSection = $('section#about');
    $('html,body').animate({
      scrollTop: aboutSection.offset().top
    }, 900);
  });
});