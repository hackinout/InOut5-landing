(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    if (window.innerWidth < "992") {
      $(".navbar-collapse").collapse("hide");
    }
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav"
  });

  // Header scroll animations

  // function setPeriodicTransform(maxVal, val) {
  // Get periodic value
  // Varies from 0 to maxVal periodically
  // 42 * maxVal is damping factor
  // Why 42? Cause it's the answer to life, universe and everything
  //  return Math.abs(maxVal * Math.sin(val / (42 * maxVal)));
  //}

  var viewHeight = $(window).height();
  $(window).scroll(function(event) {
    var scrollPos = $(window).scrollTop();

    function getTranslateVal(maxVal) {
      // Animation completes in 1/4 of screen height scroll
      var heightFrac = viewHeight / 4;
      return maxVal * (Math.min(heightFrac, scrollPos) / heightFrac);
    }

    $("#heroImage>.c2").css(
      "transform",
      "translate3d(" +
        getTranslateVal(3) +
        "vw," +
        getTranslateVal(2.5) +
        "vw, 0)"
    );
    $("#heroImage>.c3").css(
      "transform",
      "translate3d(" +
        getTranslateVal(3) +
        "vw," +
        getTranslateVal(2.5) +
        "vw, 0)"
    );
    $("#heroImage>.c4").css(
      "transform",
      "translate3d(" +
        getTranslateVal(-3) +
        "vw," +
        getTranslateVal(-2.5) +
        "vw, 0)"
    );

    $("#heroImage>.b1").css(
      "transform",
      "translate3d(" +
        getTranslateVal(4) +
        "vw," +
        getTranslateVal(3) +
        "vw, 0)"
    );
    $("#heroImage>.b2").css(
      "transform",
      "translate3d(" +
        getTranslateVal(-3) +
        "vw," +
        getTranslateVal(1.5) +
        "vw, 0)"
    );

    $("#heroImage>.v1").css(
      "transform",
      "translate3d(" +
        getTranslateVal(4) +
        "vw," +
        getTranslateVal(-1.5) +
        "vw, 0)"
    );
    $("#heroImage>.v2").css(
      "transform",
      "translate3d(" +
        getTranslateVal(4) +
        "vw," +
        getTranslateVal(-1.5) +
        "vw, 0)"
    );
  });
})(jQuery); // End of use strict
