

    // var video = document.getElementById('mainvid');
    // var sources = video.getElementsByTagName('source');

    // sources[0].src = "5in.webm";
    // sources[1].src = "5.webm";
    // sources[2].src = "5out.webm";
    // video.load();


    $('#1mainvid_in').bind('ended', function() {
      // $('#1mainvid_in').remove();
      $('#1mainvid_in').addClass('hidden');
      $('#1mainvid_loop')[0].play();
      $('#1mainvid_loop').removeClass('hidden');
      // $('#ad1').get(1).play();

    });








$(document).ready(function() {

  $(".textcont").on( 'scroll', function(){



// if ($(".textcont").scrollTop() < 1000){

//   $("#2mainvid_loop").removeAttr("loop");

//   // $("#t2").css("opacity","0")

//   // $('#ad2').addClass('hidden');
//   // $('#ad2').get(0).pause();

//   // $('#ad3').removeClass('hidden');
//   // $('#ad3').get(0).play();

//   $('#2mainvid_loop').bind('ended', function() {
//     $('#2mainvid_loop').addClass("hidden");
//     $('#2mainvid_out')[0].play();
//     $('#2mainvid_out').removeClass('hidden');

//     // $('#intract2').removeClass('hidden');

//     $('#clue_a5').removeClass('hidden');
//     $('#clue_a6').removeClass('hidden');
//     $('#clue_a3').addClass('hidden');
//     $('#clue_a4').addClass('hidden');


//     // $('#intract').addClass('hidden');

//   });

//   $('#2mainvid_out').bind('ended', function() {
//     $('#2mainvid_out').addClass("hidden");
//     $('#1mainvid_in').removeClass('hidden');
//     $('#1mainvid_in')[0].play();

//     $('#1mainvid_in').bind('ended', function() {
//       $('#1mainvid_in').addClass("hidden");
//       $('#1mainvid_loop')[0].play();
//       $('#1mainvid_loop').removeClass('hidden');
//     });
//   });

// }







    if ($(".textcont").scrollTop() > 1000) {

      $("#1mainvid_loop").removeAttr("loop");

      // $("#t1").css("opacity","0")

      $('#ad1').addClass('hidden');
      $('#ad1').get(0).pause();

      $('#ad2').removeClass('hidden');
      $('#ad2').get(0).play();

      $('#1mainvid_loop').bind('ended', function() {
        $('#1mainvid_loop').addClass("hidden");
        $('#1mainvid_out')[0].play();
        $('#1mainvid_out').removeClass('hidden');

        $('#intract2').removeClass('hidden');

        $('#clue_a3').removeClass('hidden');
        $('#clue_a4').removeClass('hidden');
        $('#clue_a1').addClass('hidden');
        $('#clue_a2').addClass('hidden');


        $('#intract').addClass('hidden');

      });

      $('#1mainvid_out').bind('ended', function() {
        $('#1mainvid_out').addClass("hidden");
        $('#2mainvid_in')[0].play();
        $('#2mainvid_in').removeClass('hidden');

        $('#2mainvid_in').bind('ended', function() {
          $('#2mainvid_in').addClass("hidden");
          $('#2mainvid_loop')[0].play();
          $('#2mainvid_loop').removeClass('hidden');
        });
      });

    }


// ------------------------


if ($(".textcont").scrollTop() > 2000) {

  $("#2mainvid_loop").removeAttr("loop");

  // $("#t2").css("opacity","0")

  $('#ad2').addClass('hidden');
  $('#ad2').get(0).pause();

  $('#ad3').removeClass('hidden');
  $('#ad3').get(0).play();

  $('#2mainvid_loop').bind('ended', function() {
    $('#2mainvid_loop').remove();
    $('#2mainvid_out')[0].play();
    $('#2mainvid_out').removeClass('hidden');

    $('#intract2').removeClass('hidden');

    $('#clue_a5').removeClass('hidden');
    $('#clue_a6').removeClass('hidden');
    $('#clue_a3').addClass('hidden');
    $('#clue_a4').addClass('hidden');


    $('#intract').addClass('hidden');

  });

  $('#2mainvid_out').bind('ended', function() {
    $('#2mainvid_out').remove();
    $('#3mainvid_in').removeClass('hidden');
    $('#3mainvid_in')[0].play();

    $('#3mainvid_in').bind('ended', function() {
      $('#3mainvid_in').remove();
      $('#3mainvid_loop')[0].play();
      $('#3mainvid_loop').removeClass('hidden');
    });
  });

}


// ------------------------

// if ($(".textcont").scrollTop() == 2000 && $(".textcont").scrollTop() == 1000)  {



// ------------------------

if ($(".textcont").scrollTop() > 3000) {

  $("#3mainvid_loop").removeAttr("loop");

  // $("#t3").css("opacity","0")

  $('#ad3').addClass('hidden');
  $('#ad3').get(0).pause();

  $('#ad4').removeClass('hidden');
  $('#ad4').get(0).play();

  $('#3mainvid_loop').bind('ended', function() {
    $('#3mainvid_loop').remove();
    $('#3mainvid_out')[0].play();
    $('#3mainvid_out').removeClass('hidden');

    $('#intract2').removeClass('hidden');

    $('#clue_a7').removeClass('hidden');
    $('#clue_a8').removeClass('hidden');
    $('#clue_a6').addClass('hidden');
    $('#clue_a5').addClass('hidden');


    $('#intract').addClass('hidden');

  });

  $('#3mainvid_out').bind('ended', function() {
    $('#3mainvid_out').remove();
    $('#4mainvid_in')[0].play();
    $('#4mainvid_in').removeClass('hidden');

    $('#4mainvid_in').bind('ended', function() {
      $('#4mainvid_in').remove();
      $('#4mainvid_loop')[0].play();
      $('#4mainvid_loop').removeClass('hidden');
    });
  });
  
}


// ------------------------

if ($(".textcont").scrollTop() > 4000) {

  $("#4mainvid_loop").removeAttr("loop");

  // $("#t4").css("opacity","0")
  
  $('#ad4').addClass('hidden');
  $('#ad4').get(0).pause();

  $('#ad5').removeClass('hidden');
  $('#ad5').get(0).play();

  $('#4mainvid_loop').bind('ended', function() {
    $('#4mainvid_loop').remove();
    $('#4mainvid_out')[0].play();
    $('#4mainvid_out').removeClass('hidden');
    $('#intract5').removeClass('hidden');
    $('#intract4').addClass('hidden');

    $('#clue_a10').removeClass('hidden');
    $('#clue_a9').removeClass('hidden');
    $('#clue_a7').addClass('hidden');
    $('#clue_a8').addClass('hidden');

  });

  $('#4mainvid_out').bind('ended', function() {
    $('#4mainvid_out').remove();
    $('#5mainvid_in')[0].play();
    $('#5mainvid_in').removeClass('hidden');

    $('#5mainvid_in').bind('ended', function() {
      $('#5mainvid_in').remove();
      $('#5mainvid_loop')[0].play();
      $('#5mainvid_loop').removeClass('hidden');
    });
  });
  
}

// ------------------------

if ($(".textcont").scrollTop() > 5000) {

  $("#5mainvid_loop").removeAttr("loop");

  // $("#t5").css("opacity","0")
  
  $('#ad5').addClass('hidden');
  $('#ad5').get(0).pause();

  $('#ad6').removeClass('hidden');
  $('#ad6').get(0).play();

  $('#5mainvid_loop').bind('ended', function() {
    $('#5mainvid_loop').remove();
    $('#5mainvid_out')[0].play();
    $('#5mainvid_out').removeClass('hidden');
    $('#intract5').removeClass('hidden');
    $('#intract4').addClass('hidden');

    $('#clue_a12').removeClass('hidden');
    $('#clue_a11').removeClass('hidden');
    $('#clue_a10').addClass('hidden');
    $('#clue_a9').addClass('hidden');

  });

  $('#5mainvid_out').bind('ended', function() {
    $('#5mainvid_out').remove();
    $('#6mainvid_in')[0].play();
    $('#6mainvid_in').removeClass('hidden');

    $('#6mainvid_in').bind('ended', function() {
      $('#6mainvid_in').remove();
      $('#6mainvid_loop')[0].play();
      $('#6mainvid_loop').removeClass('hidden');

    });
  });
  
}

// ------------------------


if ($(".textcont").scrollTop() > 6500) {

  $("#6mainvid_loop").removeAttr("loop");

  $("#t6").css("opacity","0")
  
  $('#ad6').addClass('hidden');
  $('#ad6').get(0).pause();

  $('#ad7').removeClass('hidden');
  $('#ad7').get(0).play();

  $('#6mainvid_loop').bind('ended', function() {
    $('#6mainvid_loop').remove();
    $('#6mainvid_out')[0].play();
    $('#6mainvid_out').removeClass('hidden');

    $('#clue_a13').removeClass('hidden');
    $('#clue_a14').removeClass('hidden');
    $('#clue_a12').addClass('hidden');
    $('#clue_a11').addClass('hidden');

  });

  $('#6mainvid_out').bind('ended', function() {
    $('#6mainvid_out').remove();
    $('#7mainvid_in')[0].play();
    $('#7mainvid_in').removeClass('hidden');

    $('#7mainvid_in').bind('ended', function() {
      $('#7mainvid_in').remove();
      $('#7mainvid_loop')[0].play();
      $('#7mainvid_loop').removeClass('hidden');
      
    });
  });
  
}

// ------------------------


if ($(".textcont").scrollTop() > 7500) {

  $("#7mainvid_loop").removeAttr("loop");

  $("#t7").css("opacity","0")
  
  $('#ad7').addClass('hidden');
  $('#ad7').get(0).pause();

  $('#ad8').removeClass('hidden');
  $('#ad8').get(0).play();

  $('#7mainvid_loop').bind('ended', function() {
    $('#7mainvid_loop').remove();
    $('#7mainvid_out')[0].play();
    $('#7mainvid_out').removeClass('hidden');

    $('#clue_a16').removeClass('hidden');
    $('#clue_a15').removeClass('hidden');
    $('#clue_a13').addClass('hidden');
    $('#clue_a14').addClass('hidden');

  });

  $('#7mainvid_out').bind('ended', function() {
    $('#7mainvid_out').remove();
    $('#8mainvid_in')[0].play();
    $('#8mainvid_in').removeClass('hidden');

    $('#8mainvid_in').bind('ended', function() {
      $('#8mainvid_in').remove();
      $('#8mainvid_loop')[0].play();
      $('#8mainvid_loop').removeClass('hidden');
      
    });
  });
  
}

// ------------------------



if ($(".textcont").scrollTop() > 8500) {

  $("#8mainvid_loop").removeAttr("loop");

  $("#t8").css("opacity","0")
  
  $('#ad8').addClass('hidden');
  $('#ad8').get(0).pause();

  $('#ad9').removeClass('hidden');
  $('#ad9').get(0).play();

  $('#8mainvid_loop').bind('ended', function() {
    $('#8mainvid_loop').remove();
    $('#8mainvid_out')[0].play();
    $('#8mainvid_out').removeClass('hidden');

    $('#clue_a17').removeClass('hidden');
    $('#clue_a18').removeClass('hidden');
    $('#clue_a15').addClass('hidden');
    $('#clue_a16').addClass('hidden');

  });

  $('#8mainvid_out').bind('ended', function() {
    $('#8mainvid_out').remove();
    $('#9mainvid_in')[0].play();
    $('#9mainvid_in').removeClass('hidden');

    $('#9mainvid_in').bind('ended', function() {
      $('#9mainvid_in').remove();
      $('#9mainvid_loop')[0].play();
      $('#9mainvid_loop').removeClass('hidden');
      
    });
  });
  
}

if ($(".textcont").scrollTop() > 9500) {

  $("#9mainvid_loop").removeAttr("loop");

  $("#t9").css("opacity","0")
  
  $('#ad9').addClass('hidden');
  $('#ad9').get(0).pause();

  $('#ad10').removeClass('hidden');
  $('#ad10').get(0).play();

  $('#9mainvid_loop').bind('ended', function() {
    $('#9mainvid_loop').remove();
    $('#9mainvid_out')[0].play();
    $('#9mainvid_out').removeClass('hidden');

    $('#clue_a20').removeClass('hidden');
    $('#clue_a19').removeClass('hidden');
    $('#clue_a18').addClass('hidden');
    $('#clue_a17').addClass('hidden');

  });

  $('#9mainvid_out').bind('ended', function() {
    $('#9mainvid_out').remove();
    $('#10mainvid_in')[0].play();
    $('#10mainvid_in').removeClass('hidden');

    $('#10mainvid_in').bind('ended', function() {
      $('#10mainvid_in').remove();
      $('#10mainvid_loop')[0].play();
      $('#10mainvid_loop').removeClass('hidden');
      
    });
  });
  
}

// ------------------------

if ($(".textcont").scrollTop() > 10600) {

  $("#10mainvid_loop").removeAttr("loop");

  $("#t10").css("opacity","0")
  
  $('#ad10').addClass('hidden');
  $('#ad10').get(0).pause();

  $('#clue_a20').addClass('hidden');
  $('#clue_a19').addClass('hidden');

  $('#10mainvid_loop').bind('ended', function() {
    $('#10mainvid_loop').remove();
    $('#10mainvid_out')[0].play();
    $('#10mainvid_out').removeClass('hidden');

  });

  $('#10mainvid_out').bind('ended', function() {
    $('#10mainvid_out').remove();

    $('#11mainvid_out')[0].play();
    $('#11mainvid_out').removeClass('hidden');


  });
  
}

// ------------------------



});
});








// -----------back------------














// $('.mutoggle').click(function() {



// $('[id^="ad"]').trigger("pause");

// });

const volume = document.querySelector("audio").volume; // 1 

$(document).ready(function() {
  $('.vdwn').click(function() {
    $('[id^="ad"]').prop("volume", 1);
  });
});

$(document).ready(function() {
  $('.vup').click(function() {
  // document.querySelector("audio").volume = 0;
  // $('[id^="ad"]').trigger("play");
  $('[id^="ad"]').prop("volume", 0);
});
});

// $(document).ready(function() {

// $('.mutoggle').click(function() {

// document.querySelector("audio").volume = 0;

//   }, function() {

// document.querySelector("audio").volume = 1;

// });
// });


// $(".mutoggle").toggle(
//   function() {
//     document.querySelector("audio").volume = 0;
//   }, function() {
//     document.querySelector("audio").volume = 1;
//   }
// );

// Getting volume level
// const volume = document.querySelector("audio").volume; 

// Setting volume level
// document.querySelector("audio").volume = 0.5;





// $("#2mainvid_loop").removeAttr("loop");

//       $('#2mainvid_loop').bind('ended', function() {
//       $('#2mainvid_loop').remove();
//       $('#2mainvid_out')[0].play();
//       $('#2mainvid_out').removeClass('hidden');

//       $('#intract1').removeClass('hidden');

//       $('#clue_a3').removeClass('hidden');
//       $('#clue_a4').removeClass('hidden');
//       $('#clue_a1').addClass('hidden');
//       $('#clue_a2').addClass('hidden');


//       $('#intract').addClass('hidden');

//     });

//       $('#2mainvid_out').bind('ended', function() {
//       $('#2mainvid_out').remove();
//       $('#3mainvid_in')[0].play();
//       $('#3mainvid_in').removeClass('hidden');

//       $('#3mainvid_in').bind('ended', function() {
//       $('#3mainvid_in').remove();
//       $('#3mainvid_loop')[0].play();
//       $('#3mainvid_loop').removeClass('hidden');
//       });
//     });










// $(document).ready(function(){
//   $(".t2").scroll(function(){
//     $("#2mainvid_loop").removeAttr("loop");

//     $('#t2').addClass("hidden");
//     $('#t3').removeClass("hidden");

//     $(".textcont").animate({
//     scrollTop: 0
//     }, 900);

//     $('#2mainvid_loop').bind('ended', function() {
//       $('#2mainvid_loop').remove();
//       $('#2mainvid_out')[0].play();
//       $('#2mainvid_out').removeClass('hidden');
//       $('#intract3').removeClass('hidden');
//       $('#intract2').addClass('hidden');

//       $('#clue_a5').removeClass('hidden');
//       $('#clue_a6').removeClass('hidden');
//       $('#clue_a3').addClass('hidden');
//       $('#clue_a4').addClass('hidden');

//     });

//       $('#2mainvid_out').bind('ended', function() {
//       $('#2mainvid_out').remove();
//       $('#3mainvid_in')[0].play();
//       $('#3mainvid_in').removeClass('hidden');

//       $('#3mainvid_in').bind('ended', function() {
//           $('#3mainvid_in').remove();
//           $('#3mainvid_loop')[0].play();
//           $('#3mainvid_loop').removeClass('hidden');
//       });
//     });
//   });
// });

// $(document).ready(function(){
//   $("#intract3").click(function(){
//     $("#3mainvid_loop").removeAttr("loop");

//     $('#t3').addClass("hidden");
//     $('#t4').removeClass("hidden");

//     $(".textcont").animate({
//     scrollTop: 0
//     }, 900);

//     $('#3mainvid_loop').bind('ended', function() {
//       $('#3mainvid_loop').remove();
//       $('#3mainvid_out')[0].play();
//       $('#3mainvid_out').removeClass('hidden');
//       $('#intract4').removeClass('hidden');
//       $('#intract3').addClass('hidden');

//       $('#clue_a7').removeClass('hidden');
//       $('#clue_a8').removeClass('hidden');
//       $('#clue_a6').addClass('hidden');
//       $('#clue_a5').addClass('hidden');

//     });

//       $('#3mainvid_out').bind('ended', function() {
//       $('#3mainvid_out').remove();
//       $('#4mainvid_in')[0].play();
//       $('#4mainvid_in').removeClass('hidden');

//       $('#4mainvid_in').bind('ended', function() {
//           $('#4mainvid_in').remove();
//           $('#4mainvid_loop')[0].play();
//           $('#4mainvid_loop').removeClass('hidden');
//       });
//     });
//   });
// });

// $(document).ready(function(){
//   $("#intract4").click(function(){
//     $("#4mainvid_loop").removeAttr("loop");

//     $('#t4').addClass("hidden");
//     $('#t5').removeClass("hidden");

//     $(".textcont").animate({
//     scrollTop: 0
//     }, 900);

//     $('#4mainvid_loop').bind('ended', function() {
//       $('#4mainvid_loop').remove();
//       $('#4mainvid_out')[0].play();
//       $('#4mainvid_out').removeClass('hidden');
//       $('#intract5').removeClass('hidden');
//       $('#intract4').addClass('hidden');

//       $('#clue_a10').removeClass('hidden');
//       $('#clue_a9').removeClass('hidden');
//       $('#clue_a7').addClass('hidden');
//       $('#clue_a8').addClass('hidden');

//     });

//       $('#4mainvid_out').bind('ended', function() {
//       $('#4mainvid_out').remove();
//       $('#5mainvid_in')[0].play();
//       $('#5mainvid_in').removeClass('hidden');

//       $('#5mainvid_in').bind('ended', function() {
//           $('#5mainvid_in').remove();
//           $('#5mainvid_loop')[0].play();
//           $('#5mainvid_loop').removeClass('hidden');
//       });
//     });
//   });
// });

// $(document).ready(function(){
//   $("#intract5").click(function(){
//     $("#5mainvid_loop").removeAttr("loop");

//     $('#t5').addClass("hidden");
//     $('#t6').removeClass("hidden");

//     $(".textcont").animate({
//     scrollTop: 0
//     }, 900);

//     $('#5mainvid_loop').bind('ended', function() {
//       $('#5mainvid_loop').remove();
//       $('#5mainvid_out')[0].play();
//       $('#5mainvid_out').removeClass('hidden');
//       $('#intract6').removeClass('hidden');
//       $('#intract5').addClass('hidden');

//       $('#clue_a12').removeClass('hidden');
//       $('#clue_a11').removeClass('hidden');
//       $('#clue_a10').addClass('hidden');
//       $('#clue_a9').addClass('hidden');

//     });

//       $('#5mainvid_out').bind('ended', function() {
//       $('#5mainvid_out').remove();
//       $('#6mainvid_in')[0].play();
//       $('#6mainvid_in').removeClass('hidden');

//       $('#6mainvid_in').bind('ended', function() {
//           $('#6mainvid_in').remove();
//           $('#6mainvid_loop')[0].play();
//           $('#6mainvid_loop').removeClass('hidden');
//       });
//     });
//   });
// });

// $(document).ready(function(){
//   $("#intract6").click(function(){
//     $("#6mainvid_loop").removeAttr("loop");

//     $('#t6').addClass("hidden");
//     $('#t7').removeClass("hidden");

//     $(".textcont").animate({
//     scrollTop: 0
//     }, 900);

//     $('#6mainvid_loop').bind('ended', function() {
//       $('#6mainvid_loop').remove();
//       $('#6mainvid_out')[0].play();
//       $('#6mainvid_out').removeClass('hidden');
//       $('#intract7').removeClass('hidden');
//       $('#intract6').addClass('hidden');

//       $('#clue_a13').removeClass('hidden');
//       $('#clue_a14').removeClass('hidden');
//       $('#clue_a12').addClass('hidden');
//       $('#clue_a11').addClass('hidden');

//     });

//       $('#6mainvid_out').bind('ended', function() {
//       $('#6mainvid_out').remove();
//       $('#7mainvid_in')[0].play();
//       $('#7mainvid_in').removeClass('hidden');

//       $('#7mainvid_in').bind('ended', function() {
//           $('#7mainvid_in').remove();
//           $('#7mainvid_loop')[0].play();
//           $('#7mainvid_loop').removeClass('hidden');
//       });
//     });
//   });
// });

// $(document).ready(function(){
//   $("#intract7").click(function(){
//     $("#7mainvid_loop").removeAttr("loop");

//     $('#t7').addClass("hidden");
//     $('#t8').removeClass("hidden");

//     $(".textcont").animate({
//     scrollTop: 0
//     }, 900);

//     $('#7mainvid_loop').bind('ended', function() {
//       $('#7mainvid_loop').remove();
//       $('#7mainvid_out')[0].play();
//       $('#7mainvid_out').removeClass('hidden');
//       $('#intract8').removeClass('hidden');
//       $('#intract7').addClass('hidden');

//       $('#clue_a16').removeClass('hidden');
//       $('#clue_a15').removeClass('hidden');
//       $('#clue_a13').addClass('hidden');
//       $('#clue_a14').addClass('hidden');

//     });

//       $('#7mainvid_out').bind('ended', function() {
//       $('#7mainvid_out').remove();
//       $('#8mainvid_in')[0].play();
//       $('#8mainvid_in').removeClass('hidden');

//       $('#8mainvid_in').bind('ended', function() {
//           $('#8mainvid_in').remove();
//           $('#8mainvid_loop')[0].play();
//           $('#8mainvid_loop').removeClass('hidden');
//       });
//     });
//   });
// });

// $(document).ready(function(){
//   $("#intract8").click(function(){
//     $("#8mainvid_loop").removeAttr("loop");

//     $('#t8').addClass("hidden");
//     $('#t9').removeClass("hidden");

//     $(".textcont").animate({
//     scrollTop: 0
//     }, 900);

//     $('#8mainvid_loop').bind('ended', function() {
//       $('#8mainvid_loop').remove();
//       $('#8mainvid_out')[0].play();
//       $('#8mainvid_out').removeClass('hidden');
//       $('#intract9').removeClass('hidden');
//       $('#intract8').addClass('hidden');

//       $('#clue_a17').removeClass('hidden');
//       $('#clue_a18').removeClass('hidden');
//       $('#clue_a15').addClass('hidden');
//       $('#clue_a16').addClass('hidden');

//     });

//       $('#8mainvid_out').bind('ended', function() {
//       $('#8mainvid_out').remove();
//       $('#9mainvid_in')[0].play();
//       $('#9mainvid_in').removeClass('hidden');

//       $('#9mainvid_in').bind('ended', function() {
//           $('#9mainvid_in').remove();
//           $('#9mainvid_loop')[0].play();
//           $('#9mainvid_loop').removeClass('hidden');
//       });
//     });
//   });
// });



// $(document).ready(function(){
//   $("#intract9").click(function(){
//     $("#9mainvid_loop").removeAttr("loop");

//     $('#t9').addClass("hidden");
//     $('#t10').removeClass("hidden");

//     $(".textcont").animate({
//     scrollTop: 0
//     }, 900);

//     $('#9mainvid_loop').bind('ended', function() {
//       $('#9mainvid_loop').remove();
//       $('#9mainvid_out')[0].play();
//       $('#9mainvid_out').removeClass('hidden');
//       $('#intract10').removeClass('hidden');
//       $('#intract9').addClass('hidden');

//       $('#clue_a20').removeClass('hidden');
//       $('#clue_a19').removeClass('hidden');
//       $('#clue_a18').addClass('hidden');
//       $('#clue_a17').addClass('hidden');

//     });

//       $('#9mainvid_out').bind('ended', function() {
//       $('#9mainvid_out').remove();
//       $('#10mainvid_in')[0].play();
//       $('#10mainvid_in').removeClass('hidden');

//       $('#10mainvid_in').bind('ended', function() {
//           $('#10mainvid_in').remove();
//           $('#10mainvid_loop')[0].play();
//           $('#10mainvid_loop').removeClass('hidden');
//       });
//     });
//   });
// });


// $(document).ready(function(){
//   $("#intract10").click(function(){
//     $("#10mainvid_loop").removeAttr("loop");

//     $('#t10').addClass("hidden");
//     $('#t11').removeClass("hidden");

//     $(".textcont").animate({
//     scrollTop: 0
//     }, 900);

//     $('#10mainvid_loop').bind('ended', function() {
//       $('#10mainvid_loop').remove();
//       $('#10mainvid_out')[0].play();
//       $('#10mainvid_out').removeClass('hidden');
//       $('#intract11').removeClass('hidden');
//       $('#intract10').addClass('hidden');

//       $('#clue_a20').addClass('hidden');
//       $('#clue_a19').addClass('hidden');

//     });

//       $('#10mainvid_out').bind('ended', function() {
//       $('#10mainvid_out').remove();

//       $('#11mainvid_out')[0].play();
//       $('#11mainvid_out').removeClass('hidden');

//       // $('#1mainvid_in').bind('ended', function() {
//       //     $('#1mainvid_in').remove();
//       //     $('#1mainvid_loop')[0].play();
//       //     $('#1mainvid_loop').removeClass('hidden');
//       // });
//     });
//   });
// });



$(document).on("click", ".interface", function(){
  location.reload(true);
});

$(document).on("click", ".clstxt_1", function(){
    $("#t1").css("opacity","0")
    $(".clstxt_1").css("opacity","0")
});

$(document).on("click", ".clstxt_2", function(){
    $("#t2").css("opacity","0")
    $(".clstxt_2").css("opacity","0")
});

$(document).on("click", ".clstxt_3", function(){
    $("#t3").css("opacity","0")
    $(".clstxt_3").css("opacity","0")
});

$(document).on("click", ".clstxt_4", function(){
    $("#t4").css("opacity","0")
    $(".clstxt_4").css("opacity","0")
});

$(document).on("click", ".clstxt_5", function(){
    $("#t5").css("opacity","0")
    $(".clstxt_5").css("opacity","0")
});

$(document).on("click", ".clstxt_6", function(){
    $("#t6").css("opacity","0")
    $(".clstxt_6").css("opacity","0")
});

$(document).on("click", ".clstxt_7", function(){
    $("#t7").css("opacity","0")
    $(".clstxt_7").css("opacity","0")
});

$(document).on("click", ".clstxt_8", function(){
    $("#t8").css("opacity","0")
    $(".clstxt_8").css("opacity","0")
});

$(document).on("click", ".clstxt_9", function(){
    $("#t9").css("opacity","0")
    $(".clstxt_9").css("opacity","0")
});

$(document).on("click", ".clstxt_10", function(){
    $("#t10").css("opacity","0")
    $(".clstxt_10").css("opacity","0")
});






// $(".interface").click(function(){
//   // $('[id^=intract]').toggle();
//   $( '[id^=intract]').fadeToggle( "slow", "linear" );
//   $( '[id^=clue]').fadeToggle( "slow", "linear" );

// });


