var $= jQuery.noConflict();
$(function() {
    $('[data-fancybox="images"]').fancybox({
      protect: true,
      loop: true,
      transitionEffect: "zoom-in-out",
      buttons : [
        'slideShow',
        'zoom',
        'thumbs',
        'fullScreen',
        'arrowLeft',
        'arrowRight',
        'close'
      ]
    });
    
  });