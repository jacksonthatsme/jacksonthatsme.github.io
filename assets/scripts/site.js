$(document).ready(function(){
  var accordionItem = $('[data-js="accordion__item"]'),
      accordionTrigger = $('[data-js="accordion__trigger"]'),
      accordionContent = $('[data-js="accordion__content"]'),
      scrollToSection = $('[data-js="scroll-to-section"]');

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
  var video = $('video');

  video.each(function(){
    $(this).on('loadstart', function (event) {
      var thisVideoParent = this.closest('[data-js="video-object"]');
      $(thisVideoParent).addClass('is-loading');
    });
    $(this).on('canplay', function (event) {
      var thisVideoParent = this.closest('[data-js="video-object"]');
      $(thisVideoParent).removeClass('is-loading');
    });
    // $(this).on('play', function() {
    //   var thisVideoParent = this.closest('[data-js="video-object"]');
    //   $(thisVideoParent).addClass('is-loaded');
    // });
  });

  accordionTrigger.click(function() {
    var $content = $(this).next('[data-js="accordion__content"]'),
        $container = $(this).parent('[data-js="accordion__item"]'),
        $action = $(this).find('[data-js="accordion__action"]');
    toggleAccordionItem($container, $content, $action);
    var thisSectionVideos = $container.find(video);
    thisSectionVideos.each(function() {
      this.load();
      this.play();
    });
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
