

$(document).ready(function(){
  $(".btnt").click(function(){
    $("canvas").toggleClass("container_closed");
    
  });
});

$(document).ready(function(){
  $('.main-carousel').slick({
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
});


$( ".dnv_1" ).click(function() {
   document.querySelector(".overcont").scrollIntoView({
    behavior: "smooth",
  });
});

$( ".dnv_2" ).click(function() {
   document.querySelector(".titlecont_2").scrollIntoView({
    behavior: "smooth",
  });
});

$( ".dnv_3" ).click(function() {
   document.querySelector(".titlecont_3").scrollIntoView({
    behavior: "smooth",
  });
});

$( ".dnv_4" ).click(function() {
   document.querySelector(".footer-basic").scrollIntoView({
    behavior: "smooth",
  });
});

$( ".stick_bttn" ).click(function() {
   document.querySelector(".footer-basic").scrollIntoView({
    behavior: "smooth",
  });
});

        $(document).ready(function() {
            // Get media - with autoplay disabled (audio or video)
            var media = $('video').not("[autoplay='autoplay']");
            var tolerancePixel = 40;

            function checkMedia(){
                // Get current browser top and bottom
                var scrollTop = $(window).scrollTop() + tolerancePixel;
                var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

                media.each(function(index, el) {
                    var yTopMedia = $(this).offset().top;
                    var yBottomMedia = $(this).height() + yTopMedia;

                    if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){
                        $(this).get(0).play();
                    } else {
                        $(this).get(0).pause();
                    }
                });

                //}
            }
            $(document).on('scroll', checkMedia);
        });