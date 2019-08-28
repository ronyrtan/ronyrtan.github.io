$(document).ready(function(){

  $(document).scroll(function(){
    if ($(document).scrollTop() > 600) {
      $('nav').css({
        background: 'rgba(0,0,0,0.8)',
        transition: '.3s'
      });
    } else {
      $('nav').css('background', 'rgba(0,0,0,0)');
    }

    // if ($(document).scrollTop() > 100) {
    //   $('.about h1').animate({left: '0px'},1000);
    //   $('.about h1').addClass('fadeIn');
    // }
    // if ($(document).scrollTop() > 300) {
    //   $('.about p').animate({left: '0px'},1000);
    //   $('.about p').addClass('fadeIn');
    // }
  });
});

$(function(){
  $(".element").typed({
    strings: ["Hi there! ^100", "I'm a developer^100", "Turned ^500 UX Designer.^1000", "I am ^300 .^300 .^300 .^300", "<strong>RON TAN.</strong>"],
    typeSpeed: 50,
    startDelay: 5,
    backSpeed: 0,
    callback: function() {
      $('.typed-cursor').remove();
      $('.spacerContent').fadeIn();
    }
  });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
