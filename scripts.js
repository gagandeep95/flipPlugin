

$(function(){

    // MANUAL SCRIPTS ----------------------------------------------------------------------

    $("#card-flip-animation").flip({
        axis: "y", // y or x
        reverse: false, // true and false
        trigger: "manual",
        speed: '1000',
        front: $('.front-end'),
        back: $('.back-end'),
        autoSize: false
      });


    // FLIP BUTTON SCRIPT ----------------------------------------------------------------

    $("#flip-btn").click(function(){
         $("#card-flip-animation").flip(true);
    });


    // UNFLIP BUTTON SCRIPT -------------------------------------------------------------------

    $("#unflip-btn").click(function(){
         $("#card-flip-animation").flip(false);
    });
 

    // TOGGLE BUTTON SCRIPTS -------------------------------------------------------------------

    $("#toggle-btn").flip({
        axis: "y", // y or x
        reverse: false, // true and false
        trigger: "click", // click or hover
        speed: '500',
        front: $('.front-end'),
        back: $('.back-end'),
        autoSize: false
      });

    });
      