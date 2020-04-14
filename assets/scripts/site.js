$(document).ready(function(){
  var playVideo = $('[data-js="play-video"]');
  var accordionItem = $('[data-js="accordion__item"]'),
      accordionTrigger = $('[data-js="accordion__trigger"]'),
      accordionContent = $('[data-js="accordion__content"]'),
      scrollToSection = $('[data-js="scroll-to-section"]');

  playVideo.on('click', function() {
    var parentMedia = this.closest('[data-js="video-object"]');
    var videoEl = $(parentMedia).find('video')[0];
    videoEl.load();
    videoEl.play();
    var mediaOverlay = $(parentMedia).find('[data-js="video-overlay"]');
    var buttonFront = $(parentMedia).find('[data-js="button-front"]');
    var buttonBack = $(parentMedia).find('[data-js="button-back"]');
    mediaOverlay.addClass('hide');
    videoEl.addEventListener('ended', function() {
      buttonFront.text('Re');
      buttonBack.text('Play');
      mediaOverlay.removeClass('hide');
    }, false);
  });

  accordionItem.each(function() {
    if ($(this).hasClass('is-closed')) {
      var $content = $(this).find('[data-js="accordion__content"]');
      var $action = $(this).find('[data-js="accordion__action"]');
      gsap.set($content, { height: 0 })
      gsap.set($action, { rotation: 180 })
    }
  });

  function toggleAccordionItem(container, content, action) {
    if (container.hasClass('is-closed')) {
        gsap.to(content, {opacity: 1, height: 'auto', duration: 1});
        gsap.to(action, {rotation: 0, duration: .3});
        container.toggleClass('is-closed is-open');
    } else {
        gsap.to(content, { height: 0, opacity: 0, duration: .6});
        gsap.to(action, {rotation: 180, duration: .2});
        container.toggleClass('is-closed is-open');
    }
  }

    accordionTrigger.click(function() {
    var $content = $(this).next('[data-js="accordion__content"]'),
        $container = $(this).parent('[data-js="accordion__item"]'),
        $action = $(this).find('[data-js="accordion__action"]');
    toggleAccordionItem($container, $content, $action);
  });

  scrollToSection.on("click touchend", function(e){
    e.stopPropagation();
    var thisSectionId = $(this).data("slug");
    console.log(thisSectionId);
    if (thisSectionId == 'projects') {
      var targetSection = $(".project").first();
    } else {
      var targetSection = $('[data-section=' + thisSectionId + ']');
    }
    console.log(targetSection);

    if (targetSection.hasClass('is-closed')) {
      var accordionContent = targetSection.children('[data-js="accordion__content"]');
      toggleAccordionItem(targetSection, accordionContent);
    }
    gsap.to(window, {
      duration: 1,
      scrollTo: {y: targetSection, autoKill: false},
      ease: Power3.easeOut
    });
  return false;
  });

});
