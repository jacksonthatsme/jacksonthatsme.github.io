$(document).ready(function(){var o=$('[data-js="accordion__item"]'),t=$('[data-js="accordion__trigger"]'),a=($('[data-js="accordion__content"]'),$('[data-js="scroll-to-section"]'));function i(o,t,a){o.hasClass("is-closed")?(gsap.to(t,{opacity:1,height:"auto",duration:1}),gsap.to(a,{rotation:0,duration:.3})):(gsap.to(t,{height:0,opacity:0,duration:.6}),gsap.to(a,{rotation:180,duration:.2})),o.toggleClass("is-closed is-open")}o.each(function(){if($(this).hasClass("is-closed")){var o=$(this).find('[data-js="accordion__content"]'),t=$(this).find('[data-js="accordion__action"]');gsap.set(o,{height:0}),gsap.set(t,{rotation:180})}});var s=$("video");s.each(function(){$(this).on("loadstart",function(o){var t=this.closest('[data-js="video-object"]');$(t).addClass("is-loading")}),$(this).on("canplay",function(o){var t=this.closest('[data-js="video-object"]');$(t).removeClass("is-loading")})}),t.click(function(){var o=$(this).next('[data-js="accordion__content"]'),t=$(this).parent('[data-js="accordion__item"]');i(t,o,$(this).find('[data-js="accordion__action"]')),t.find(s).each(function(){this.load(),this.play()})}),a.on("click touchend",function(o){o.stopPropagation();var t=$(this).data("slug");if(console.log(t),"projects"==t)var a=$(".project").first();else a=$("[data-section="+t+"]");if(console.log(a),a.hasClass("is-closed")){var s=a.children('[data-js="accordion__content"]');i(a,s)}return gsap.to(window,{duration:1,scrollTo:{y:a,autoKill:!1},ease:Power3.easeOut}),!1})});