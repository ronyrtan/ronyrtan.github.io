$(document).ready(function(){

  $(document).on( 'DOMMouseScroll mousewheel', function ( event ) {
  if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) {
    //scroll down
    $('nav').stop().slideUp();

    if ($(document).width() < 500 ) {
      $('.nav.mobile').slideUp();
    }

  } else {
    //scroll up
    $('nav').stop().slideDown(200);
    if ($(document).width() < 500 ) {
      $('.nav.mobile').slideDown(200);
    }

  }

});

  $('.menuBar').on('click', function () {
      if ($(document).width() < 500 ) {
        $('.nav .dropdownCont').toggle('normal');
      }
  })

  $('.viewMore').on('click', function () {
    $('.caseStudy.green .wireframeAll').slideToggle('normal');
  })

  $(document).scroll(function(){
    if ($(document).scrollTop() > 600) {
    //   $('nav').css({
    //     // background: 'rgba(0,0,0,0.8)',
    //     background: 'white',
    //     transition: '.3s'
    //   });
    //   $('.dropdown-menu li ul').css({
    //     background: 'white',
    //   });
    //   $('.menuItemLeft').css({
    //     color: '#333',
    //   });
    //
    // } else {
    //   $('nav').css('background', 'rgba(0,0,0,0)');
    //   $('.dropdown-menu li ul').css({
    //     background: 'rgba(0,0,0,0)',
    //   });
    //   $('.menuItemLeft').css({
    //     color: 'white',
    //   });
    }
    if ($(document).scrollTop() == 0) {
      $('nav').stop().slideDown(200);
    }

  });


  $.fn.DropDownMenu = function(options) {

  return this.each(function() {

          var $dropdownmenu = $(this);

           $(">li", $dropdownmenu).mouseover(function() {
              var $menuItem = $(this);

              $("ul", $menuItem).stop().slideDown("normal");
          }).mouseout(function() {

              var $menuItem = $(this);
              $("ul", $menuItem).stop().slideUp("normal");
          });
      });
  };

  $(function() {
      $(".dropdown-menu").DropDownMenu();
  });

});






$(function(){
  $(".element").typed({
    // strings: ["Hi there! ^100", "I'm a developer^100", "Turned ^500 UX Designer.^1000", "I am ^300 .^300 .^300 .^300", "<strong>RON TAN.</strong>"],
    strings: ["This site is currently under development^500", "please check back later on 20th September 2019"],
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
