$(function() {
	smoothScroll();
	nav();
  window.setInterval(fix_nav_height, 1);
  go_to_top_btn();
});

// smoothScroll function is applied from the document ready function
function smoothScroll() {
	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		// On-page links
		if (
		location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		&& 
		location.hostname == this.hostname
		) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
        scrollTop: target.offset().top - $(".sticky").height() - 20
        }, 1000);
      }
		}
	});
}

function nav() {
  var $hamburger = $(".hamburger");
  $hamburger.bind("click", function() {
    $hamburger.toggleClass("is-active");
    $("#nav").toggleClass("open");
    $("#nav").toggleClass("animated");
    $("#nav").toggleClass("fadeIn");
    return false;
  });

  var stickyTop = $(".sticky").offset().top;
  $(window).scroll(function() {
    var windowTop = $(window).scrollTop();

    if (windowTop > stickyTop) {
      $(".sticky").css({
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        "background-color": "#212856",
        "box-shadow": "0px 0px 15px 0px black"
      });
      $("#logo").css({
        margin: "0 24px"
      });
      $("#toggle").css({
        margin: "0 44px"
      });
      $(".nav-link").css({
        color: "white"
      });
    } else {
      $(".sticky").css({
        position: "relative",
        width: "100%",
        "background-color": "transparent",
        "box-shadow": "none"
      });
      $("#toggle").css({
        margin: "0 20px"
      });
      $("#logo").css({
        margin: "0"
      });
      $(".nav-link").css({
        color: "white"
      });
    }
  });
}

function fix_nav_height() {
  function elementOrParentIsFixed(element) {
      var $element = $(element);
      var $checkElements = $element.add($element.parents());
      var isFixed = false;
      $checkElements.each(function() {
          if ($(this).css("position") === "fixed") {
              isFixed = true;
              return false;
          }
      });
      return isFixed;
  }

  var isFixed = elementOrParentIsFixed($(".sticky"));
  if (isFixed) {
    $("#nav").css({
      "top": $(".sticky").height()
    });
  } else {
    $("#nav").css({
      "top": $(".sticky").height()
    });
  }
 
}


function go_to_top_btn() {
  var stickyTop = $(".sticky").offset().top;
  $(window).scroll(function() {
    var windowTop = $(window).scrollTop();

    if (windowTop > stickyTop) {
      $("#top_btn").css({
        "display": "block"
      });
    } else {
      $("#top_btn").css({
        "display": "none"
      });
    }
  });
}