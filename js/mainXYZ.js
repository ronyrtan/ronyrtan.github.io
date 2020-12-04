$( document ).ready(function() {

  var count = 0;
  var lastScroll = 0;

  $('.contentContainer').scroll( function(event) {

  //get distance of ad from top of page
  var distance = Math.floor($('.wrapper').offset().top);

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= 50 &&
      rect.left >= 0 &&
      rect.bottom <= ($('.contentContainer').innerHeight()) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function isInViewportUp(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 50 &&
      rect.left >= 0 &&
      rect.bottom >= ($('.contentContainer').innerHeight()) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  var currentScroll = $(this).scrollTop();
  var inView;
    if (currentScroll > lastScroll){
       inView = isInViewport(wrapper)
    } else {
      if ($('.wrapper').offset().top <= 0) {
        inView = isInViewportUp(wrapper)
      } else {
        inView = isInViewport(wrapper)
      }
    }
    lastScroll = currentScroll;

    if ($('.wrapper').offset().top <= 0) {
      inView = isInViewportUp(wrapper)
      console.log('up');
    }

    if (inView || distance == 50) {

      //change ad position to fix and change overflow states
      if (count < 2) {
        $('.wrapper').addClass('positionFixed');
        $('.scrollDiv').removeClass('overflowHidden');
        $('.contentContainer').addClass('overflowHidden');
        $('.scrollDiv').addClass('overflowScroll');
        count = 2;
      }

      var lastScrollTop = 0;

      //On scroll within ad
      $('.scrollDiv').scroll(function(event){

          var scrollTop = $('.scrollDiv').scrollTop();
          var maxScrollTop = $('.scrollDiv')[0].scrollHeight - $('.wrapper').innerHeight()
          var scrollPercent = Math.floor(scrollTop / maxScrollTop * 100);

          var imgOnePercent = 75 - Math.abs((scrollPercent/100) * 75);
          var bgPer = 0 - (scrollPercent/15);

          var imgOne = $('.adForImgOne');
          var bg = $('.background');

          bg.css('transform', ('translateY(' + bgPer + '%)'));

          //Change adForImgOne position on scroll and toggle img glow
          if (imgOnePercent < 25 ) {
            imgOnePercent = 25;
            imgOne.css('transform', ('translateY(' + imgOnePercent + '%)'));

            $('.adForImgOneGlow').css('visibility', 'visible');
          } else {
            imgOne.css('transform', ('translateY(' + imgOnePercent + '%)'));
            $('.adForImgOneGlow').css('visibility', 'hidden');
          }

          //Change tagline opacity on scroll
          if (scrollPercent > 75) {
            $('#taglineOne').css('opacity', '' + (((scrollPercent - 75) * 4)/100) + '')
          } else {
            $('#taglineOne').css('opacity', 0)
          }
          if (scrollPercent > 80) {
            $('#taglineTwo').css('opacity', '' + (((scrollPercent - 80) * 5)/100) + '')
          } else {
            $('#taglineTwo').css('opacity', 0)
          }

          var st = $(this).scrollTop();

          //scrollup
          if (st == 0 && scrollPercent == 0){

            $('.scrollDiv').addClass('overflowHidden');
            $('.scrollDiv').removeClass('overflowScroll');
            $('.contentContainer').removeClass('overflowHidden');
            $('.wrapper').removeClass('positionFixed');

            count++;
            if (count > 2) {
              count = 2;
            }

         //scrolldown
         } else if (scrollPercent == 100) {

            $('.scrollDiv').addClass('overflowHidden');
            $('.scrollDiv').removeClass('overflowScroll');
            $('.contentContainer').removeClass('overflowHidden');
            $('.wrapper').removeClass('positionFixed');

            count++;
            if (count > 2) {
              count = 2;
            }
         }
         lastScrollTop = st;
      });
    } else {
        $('.scrollDiv').removeClass('overflowScroll');
        $('.scrollDiv').addClass('overflowHidden');
        $('.contentContainer').removeClass('overflowHidden');
        $('.wrapper').removeClass('positionFixed');
        count--;
        if (count < 1) {
          count = 0;
        }
    }
  });
});
