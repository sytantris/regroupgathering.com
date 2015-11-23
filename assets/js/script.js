$(document).ready(function () {

  var header = {};

  // get the margin for the header at the given width
  header.getMargin = function getMargin (width) {
    if (width > 1600) return width * 0.10; // 10vw
    if (width <= 1680 && width > 1280) return width * 0.04; // 4vw
    return 10; // 10px
  }


  // Determine whether the orientation is portrait or landscape
  var checkOrientation = function checkOrientation () {
    var width = $(window).width(),
        height = $(window).height();

    header.width = 480;

    header.margin = header.getMargin(width);
    header.width += 2 * header.margin;

    if (width / height < 1.5) {
      $('body').addClass('portrait').removeClass('landscape');
    }
    else {
      $('body').addClass('landscape').removeClass('portrait');
    }

    if (width >= 1024) {
      $('#content').css('width', (width - header.width) + 'px');
    }
    else {
      $('#content').css('width', '100%');
    }
  }

  checkOrientation();

  $(window).resize(checkOrientation);


  // Show the ticket info
  $('div.info h2.link').click(function () {
    $(this).children().each(function () {
      $(this).toggleClass('hidden');
    });

    $(this).siblings('.hidden').each(function () {
      $(this).toggle(500);
    });
  });


  // Show the crew/forms info
  $('legend h2.link').click(function () {
    $(this).children().each(function () {
      $(this).toggleClass('hidden');
    });

    $(this).parents('fieldset').toggleClass('min', 300);

    $(this).parents().siblings('.hidden').each(function () {
      $(this).toggle(500);
    });
  });

});
