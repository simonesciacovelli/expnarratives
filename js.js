

    // var video = document.getElementById('mainvid');
    // var sources = video.getElementsByTagName('source');

    // sources[0].src = "5in.webm";
    // sources[1].src = "5.webm";
    // sources[2].src = "5out.webm";
    // video.load();


$('#1mainvid_in').bind('ended', function() {
    $('#1mainvid_in').remove();
    $('#1mainvid_loop')[0].play();
    $('#1mainvid_loop').removeClass('hidden');
});



$(document).ready(function(){
  $("#intract").click(function(){
    $("#1mainvid_loop").removeAttr("loop");

    $('#t1').addClass("hidden");
    $('#t2').removeClass("hidden");

    $(".textcont").animate({
        scrollTop: 0,
        opacity: "1"
    }, 900);

    $('#1mainvid_loop').bind('ended', function() {
      $('#1mainvid_loop').remove();
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
      $('#1mainvid_out').remove();
      $('#2mainvid_in')[0].play();
      $('#2mainvid_in').removeClass('hidden');

      $('#2mainvid_in').bind('ended', function() {
          $('#2mainvid_in').remove();
          $('#2mainvid_loop')[0].play();
          $('#2mainvid_loop').removeClass('hidden');
      });
    });
  });
});


$(document).ready(function(){
  $("#intract2").click(function(){
    $("#2mainvid_loop").removeAttr("loop");

    $('#t2').addClass("hidden");
    $('#t3').removeClass("hidden");

    $(".textcont").animate({
    scrollTop: 0
    }, 900);

    $('#2mainvid_loop').bind('ended', function() {
      $('#2mainvid_loop').remove();
      $('#2mainvid_out')[0].play();
      $('#2mainvid_out').removeClass('hidden');
      $('#intract3').removeClass('hidden');
      $('#intract2').addClass('hidden');

      $('#clue_a5').removeClass('hidden');
      $('#clue_a6').removeClass('hidden');
      $('#clue_a3').addClass('hidden');
      $('#clue_a4').addClass('hidden');

    });

      $('#2mainvid_out').bind('ended', function() {
      $('#2mainvid_out').remove();
      $('#3mainvid_in')[0].play();
      $('#3mainvid_in').removeClass('hidden');

      $('#3mainvid_in').bind('ended', function() {
          $('#3mainvid_in').remove();
          $('#3mainvid_loop')[0].play();
          $('#3mainvid_loop').removeClass('hidden');
      });
    });
  });
});

$(document).ready(function(){
  $("#intract3").click(function(){
    $("#3mainvid_loop").removeAttr("loop");

    $('#t3').addClass("hidden");
    $('#t4').removeClass("hidden");

    $(".textcont").animate({
    scrollTop: 0
    }, 900);

    $('#3mainvid_loop').bind('ended', function() {
      $('#3mainvid_loop').remove();
      $('#3mainvid_out')[0].play();
      $('#3mainvid_out').removeClass('hidden');
      $('#intract4').removeClass('hidden');
      $('#intract3').addClass('hidden');

      $('#clue_a7').removeClass('hidden');
      $('#clue_a8').removeClass('hidden');
      $('#clue_a6').addClass('hidden');
      $('#clue_a5').addClass('hidden');

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
  });
});

$(document).ready(function(){
  $("#intract4").click(function(){
    $("#4mainvid_loop").removeAttr("loop");

    $('#t4').addClass("hidden");
    $('#t5').removeClass("hidden");

    $(".textcont").animate({
    scrollTop: 0
    }, 900);

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
  });
});

$(document).ready(function(){
  $("#intract5").click(function(){
    $("#5mainvid_loop").removeAttr("loop");

    $('#t5').addClass("hidden");
    $('#t6').removeClass("hidden");

    $(".textcont").animate({
    scrollTop: 0
    }, 900);

    $('#5mainvid_loop').bind('ended', function() {
      $('#5mainvid_loop').remove();
      $('#5mainvid_out')[0].play();
      $('#5mainvid_out').removeClass('hidden');
      $('#intract6').removeClass('hidden');
      $('#intract5').addClass('hidden');

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
  });
});

$(document).ready(function(){
  $("#intract6").click(function(){
    $("#6mainvid_loop").removeAttr("loop");

    $('#t6').addClass("hidden");
    $('#t7').removeClass("hidden");

    $(".textcont").animate({
    scrollTop: 0
    }, 900);

    $('#6mainvid_loop').bind('ended', function() {
      $('#6mainvid_loop').remove();
      $('#6mainvid_out')[0].play();
      $('#6mainvid_out').removeClass('hidden');
      $('#intract7').removeClass('hidden');
      $('#intract6').addClass('hidden');

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
  });
});

$(document).ready(function(){
  $("#intract7").click(function(){
    $("#7mainvid_loop").removeAttr("loop");

    $('#t7').addClass("hidden");
    $('#t8').removeClass("hidden");

    $(".textcont").animate({
    scrollTop: 0
    }, 900);

    $('#7mainvid_loop').bind('ended', function() {
      $('#7mainvid_loop').remove();
      $('#7mainvid_out')[0].play();
      $('#7mainvid_out').removeClass('hidden');
      $('#intract8').removeClass('hidden');
      $('#intract7').addClass('hidden');

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
  });
});

// $(document).ready(function(){
//   $("#intract7").click(function(){
//     $("#7mainvid_loop").removeAttr("loop");

//     $('#t8').addClass("hidden");
//     $('#t9').removeClass("hidden");

//     $(".textcont").animate({
//     scrollTop: 0
//     }, 900);

//     $('#7mainvid_loop').bind('ended', function() {
//       $('#7mainvid_loop').remove();
//       $('#7mainvid_out')[0].play();
//       $('#7mainvid_out').removeClass('hidden');
//       $('#intract8').removeClass('hidden');
//       $('#intract7').addClass('hidden');
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


$(document).ready(function(){
  $("#intract8").click(function(){
    $("#8mainvid_loop").removeAttr("loop");

    $('#t8').addClass("hidden");
    $('#t9').removeClass("hidden");

    $(".textcont").animate({
    scrollTop: 0
    }, 900);

    $('#8mainvid_loop').bind('ended', function() {
      $('#8mainvid_loop').remove();
      $('#8mainvid_out')[0].play();
      $('#8mainvid_out').removeClass('hidden');
      $('#intract9').removeClass('hidden');
      $('#intract8').addClass('hidden');

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
  });
});



$(document).ready(function(){
  $("#intract9").click(function(){
    $("#9mainvid_loop").removeAttr("loop");

    $('#t9').addClass("hidden");
    $('#t10').removeClass("hidden");

    $(".textcont").animate({
    scrollTop: 0
    }, 900);

    $('#9mainvid_loop').bind('ended', function() {
      $('#9mainvid_loop').remove();
      $('#9mainvid_out')[0].play();
      $('#9mainvid_out').removeClass('hidden');
      $('#intract10').removeClass('hidden');
      $('#intract9').addClass('hidden');

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
  });
});


$(document).ready(function(){
  $("#intract10").click(function(){
    $("#10mainvid_loop").removeAttr("loop");

    $('#t10').addClass("hidden");
    $('#t11').removeClass("hidden");

    $(".textcont").animate({
    scrollTop: 0
    }, 900);

    $('#10mainvid_loop').bind('ended', function() {
      $('#10mainvid_loop').remove();
      $('#10mainvid_out')[0].play();
      $('#10mainvid_out').removeClass('hidden');
      $('#intract11').removeClass('hidden');
      $('#intract10').addClass('hidden');

      $('#clue_a20').addClass('hidden');
      $('#clue_a19').addClass('hidden');

    });

      $('#10mainvid_out').bind('ended', function() {
      $('#10mainvid_out').remove();

      $('#11mainvid_out')[0].play();
      $('#11mainvid_out').removeClass('hidden');

      // $('#1mainvid_in').bind('ended', function() {
      //     $('#1mainvid_in').remove();
      //     $('#1mainvid_loop')[0].play();
      //     $('#1mainvid_loop').removeClass('hidden');
      // });
    });
  });
});

$(document).on("click", "#intract11", function(){
    location.reload(true);
});

$(".interface").click(function(){
  // $('[id^=intract]').toggle();
  $( '[id^=intract]').fadeToggle( "slow", "linear" );
  $( '[id^=clue]').fadeToggle( "slow", "linear" );

});


