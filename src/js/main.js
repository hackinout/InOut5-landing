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
    var scrollTop = $(window).scrollTop();
    var scrollBottom = $(document).height() - viewHeight - scrollTop;

    function getTranslateVal(maxVal) {
      // Control animation speed by adjusting total scroll
      // for completion of animation
      var heightFrac = viewHeight * 0.9;
      return maxVal * (Math.min(heightFrac, scrollTop) / heightFrac);
    }

    function getInvTranslateVal(maxVal) {
      // Inverted for footer
      var heightFrac = viewHeight * 0.7;
      return (
        maxVal - maxVal * (Math.min(heightFrac, scrollBottom) / heightFrac)
      );
    }

    // Header art-items animation
    $("#heroImage>.c1").css(
      "transform",
      "translate3d(" +
        getTranslateVal(3) +
        "vw," +
        getTranslateVal(-1) +
        "vw, 0)"
    );
    $("#heroImage>.c2").css(
      "transform",
      "translate3d(" +
        getTranslateVal(-2) +
        "vw," +
        getTranslateVal(-1.5) +
        "vw, 0)"
    );
    $("#heroImage>.c3").css(
      "transform",
      "translate3d(" +
        getTranslateVal(3) +
        "vw," +
        getTranslateVal(-1) +
        "vw, 0)"
    );
    $("#heroImage>.c4").css(
      "transform",
      "translate3d(" +
        getTranslateVal(2) +
        "vw," +
        getTranslateVal(-0.5) +
        "vw, 0)"
    );
    $("#heroImage>.c5").css(
      "transform",
      "translate3d(" +
        getTranslateVal(3) +
        "vw," +
        getTranslateVal(2.5) +
        "vw, 0)"
    );
    $("#heroImage>.c6").css(
      "transform",
      "translate3d(" +
        getTranslateVal(3) +
        "vw," +
        getTranslateVal(2.5) +
        "vw, 0)"
    );
    $("#heroImage>.c7").css(
      "transform",
      "translate3d(" +
        getTranslateVal(-2) +
        "vw," +
        getTranslateVal(-1.5) +
        "vw, 0)"
    );
    $("#heroImage>.c8").css(
      "transform",
      "translate3d(" +
        getTranslateVal(2) +
        "vw," +
        getTranslateVal(1.5) +
        "vw, 0)"
    );
    $("#heroImage>.c9").css(
      "transform",
      "translate3d(" +
        getTranslateVal(3) +
        "vw," +
        getTranslateVal(-1) +
        "vw, 0)"
    );
    $("#heroImage>.c10").css(
      "transform",
      "translate3d(" +
        getTranslateVal(-3) +
        "vw," +
        getTranslateVal(1) +
        "vw, 0)"
    );
    $("#heroImage>.c11").css(
      "transform",
      "translate3d(" +
        getTranslateVal(-3) +
        "vw," +
        getTranslateVal(-2) +
        "vw, 0)"
    );
    $("#heroImage>.c12").css(
      "transform",
      "translate3d(" +
        getTranslateVal(-3) +
        "vw," +
        getTranslateVal(-2.5) +
        "vw, 0)"
    );
    $("#heroImage>.c13").css(
      "transform",
      "translate3d(" +
        getTranslateVal(-3) +
        "vw," +
        getTranslateVal(1) +
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
        getTranslateVal(-2) +
        "vw," +
        getTranslateVal(-1.5) +
        "vw, 0)"
    );
    $("#heroImage>.b3").css(
      "transform",
      "translate3d(" +
        getTranslateVal(-3) +
        "vw," +
        getTranslateVal(1.5) +
        "vw, 0)"
    );
    $("#heroImage>.b4").css(
      "transform",
      "translate3d(" +
        getTranslateVal(3) +
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

    // Footer art-items animation
    $("#footerImage>.c1").css(
      "transform",
      "translate3d(" +
        getInvTranslateVal(2) +
        "vw," +
        getInvTranslateVal(1.5) +
        "vw, 0)"
    );
    $("#footerImage>.c2").css(
      "transform",
      "translate3d(" +
        getInvTranslateVal(-3) +
        "vw," +
        getInvTranslateVal(1) +
        "vw, 0)"
    );

    $("#footerImage>.b1").css(
      "transform",
      "translate3d(" +
        getInvTranslateVal(2) +
        "vw," +
        getInvTranslateVal(1.5) +
        "vw, 0)"
    );
    $("#footerImage>.b2").css(
      "transform",
      "translate3d(" +
        getInvTranslateVal(3) +
        "vw," +
        getInvTranslateVal(-1) +
        "vw, 0)"
    );

    $("#footerImage>.v1").css(
      "transform",
      "translate3d(" +
        getInvTranslateVal(3) +
        "vw," +
        getInvTranslateVal(-1) +
        "vw, 0)"
    );
  });
})(jQuery); // End of use strict
