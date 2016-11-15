$(document).ready(function(){

  $(document).scroll(function(){
    if ($(document).scrollTop() > 600) {
      $('nav').css('background', 'black');
    } else {
      $('nav').css('background', 'none');
    }
    console.log($(document).scrollTop());

  });
});

$(function(){
  $(".element").typed({
    strings: ["Hi there!", "^1000 Welcome to my page.", "I'm a ^200 Web Designer.^1000", "A ^200 Full Stack Web Developer.^1000", "I am ^300 .^300 .^300 .^300", "<strong>RON TAN.</strong>^500"],
    typeSpeed: 50,
    startDelay: 5,
    backSpeed: 0,
    callback: function() {
      $('.typed-cursor').remove();
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
