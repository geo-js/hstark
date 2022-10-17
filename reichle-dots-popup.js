// function document ready
$(document).ready(function () {

    // Variables
    var image1 = true;
    var image2 = false;
    var image3 = false;
    var image4 = false;


    // Close all when click on test-close-trigger
    $(".test-close-trigger").click(function () {
        $(".mapping-popup-wrapper").removeClass("is-active");
        // add delay of 0.5s
        setTimeout(function () {
            // remove is-active from mapping-image-wrapper
            $(".mapping-image-wrapper").removeClass("is-active");
        }, 500);
    });

    // Dots
    $(".mapping-dot-wrapper").click(function () {
        // add delay of 0.5s
        setTimeout(function () {
            // add class is-active to mapping-popup-wrapper
            $(".mapping-popup-wrapper").addClass("is-active");
        }, 500);        
        // ad is-active to mapping-image-wrapper
        $(".mapping-image-wrapper").addClass("is-active");
    }
    );

    // Next Button
    $(".mapping-popup-next").click(function () {
        if (image1 == true) {
            image1 = false;
            image2 = true;
            image3 = false;
            image4 = false;
            CheckImage();
        }
        else if (image2 == true) {
            image1 = false;
            image2 = false;
            image3 = true;
            image4 = false;
            CheckImage();
        }
        else if (image3 == true) {
            image1 = false;
            image2 = false;
            image3 = false;
            image4 = true;
            CheckImage();
        }
        else if (image4 == true) {
            image1 = true;
            image2 = false;
            image3 = false;
            image4 = false;
            CheckImage();
        }
    }
    );

    // Dot 1
    $(".mapping-first").click(function () {
        image1 = true;
        image2 = false;
        image3 = false;
        image4 = false;

        // run function CheckImage
        CheckImage();
    }
    );

    // Dot 2
    $(".mapping-second").click(function () {
        image1 = false;
        image2 = true;
        image3 = false;
        image4 = false;

        // run function CheckImage
        CheckImage();
    }
    );

    // Dot 3
    $(".mapping-third").click(function () {
        image1 = false;
        image2 = false;
        image3 = true;
        image4 = false;

        // run function CheckImage
        CheckImage();
    }
    );

    // Dot 4
    $(".mapping-fourth").click(function () {
        image1 = false;
        image2 = false;
        image3 = false;
        image4 = true;

        // run function CheckImage
        CheckImage();
    }
    );


    // Show Images based on variable
    // Create function CheckImage
    function CheckImage() {
        if (image1 == true) {
            $(".mapping-popup-image-1").addClass("is-active");
            // remove class from .mapping-popup-image-2, .mapping-popup-image-3, .mapping-popup-image-4
            $(".mapping-popup-image-2").removeClass("is-active");
            $(".mapping-popup-image-3").removeClass("is-active");
            $(".mapping-popup-image-4").removeClass("is-active");
        }
        if (image2 == true) {
            $(".mapping-popup-image-2").addClass("is-active");
            // remove class from .mapping-popup-image-1, .mapping-popup-image-3, .mapping-popup-image-4
            $(".mapping-popup-image-1").removeClass("is-active");
            $(".mapping-popup-image-3").removeClass("is-active");
            $(".mapping-popup-image-4").removeClass("is-active");
        }
        if (image3 == true) {
            $(".mapping-popup-image-3").addClass("is-active");
            // remove class from .mapping-popup-image-1, .mapping-popup-image-2, .mapping-popup-image-4
            $(".mapping-popup-image-1").removeClass("is-active");
            $(".mapping-popup-image-2").removeClass("is-active");
            $(".mapping-popup-image-4").removeClass("is-active");
        }
        if (image4 == true) {
            $(".mapping-popup-image-4").addClass("is-active");
            // remove class from .mapping-popup-image-1, .mapping-popup-image-2, .mapping-popup-image-3
            $(".mapping-popup-image-1").removeClass("is-active");
            $(".mapping-popup-image-2").removeClass("is-active");
            $(".mapping-popup-image-3").removeClass("is-active");
        }
    }

    

    // Close Button
    $(".mapping-popup-close").click(function () {
        // remove is-active from mapping-popup-wrapper
        $(".mapping-popup-wrapper").removeClass("is-active");
        // add delay of 0.5s
        setTimeout(function () {
            // remove is-active from mapping-image-wrapper
            $(".mapping-image-wrapper").removeClass("is-active");
        }, 500);
        
    }
    );


});


