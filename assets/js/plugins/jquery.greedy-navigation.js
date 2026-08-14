/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav .greedy-nav__toggle');
var $vlinks = $('#site-nav .visible-links');
var $vlinks_persist_tail = $vlinks.children("*.persist.tail");
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function setNavMenuState(open, returnFocus) {
  var shouldOpen = open && $hlinks.children().length > 0;
  $hlinks.toggleClass('hidden', !shouldOpen).attr('aria-hidden', shouldOpen ? 'false' : 'true');
  $btn
    .toggleClass('close', shouldOpen)
    .attr('aria-expanded', shouldOpen ? 'true' : 'false')
    .attr('aria-label', shouldOpen ? 'Close navigation menu' : 'Open navigation menu');

  if (returnFocus) {
    $btn.trigger('focus');
  }
}

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if ($vlinks.width() > availableSpace) {

    while ($vlinks.width() > availableSpace && $vlinks.children("*:not(.persist)").length > 0) {
      // Record the width of the list
      breaks.push($vlinks.width());

      // Move item to the hidden list
      $vlinks.children("*:not(.persist)").last().prependTo($hlinks);

      // Show the dropdown btn
      $btn.removeClass("hidden");

      // Account for the newly visible control before checking overflow again.
      availableSpace = $nav.width() - $btn.width() - 30;
    }

    // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    while (breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {
      // Move the item to the visible list
      if ($vlinks_persist_tail.children().length > 0) {
        $hlinks.children().first().insertBefore($vlinks_persist_tail);
      } else {
        $hlinks.children().first().appendTo($vlinks);
      }
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if (breaks.length < 1) {
      $btn.addClass('hidden');
      setNavMenuState(false, false);
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // Expose the measured masthead height for responsive body/sidebar spacing.
  var mastheadHeight = Math.ceil($('.masthead').outerHeight() || 0);
  document.documentElement.style.setProperty('--masthead-height', mastheadHeight + 'px');

}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
if (window.screen && window.screen.orientation && typeof window.screen.orientation.addEventListener === 'function') {
  window.screen.orientation.addEventListener('change', updateNav);
} else if ('onorientationchange' in window) {
  window.addEventListener('orientationchange', updateNav);
}

$btn.on('click', function () {
  setNavMenuState($(this).attr('aria-expanded') !== 'true', false);
});

$hlinks.on('click', 'a', function () {
  setNavMenuState(false, false);
});

$(document).on('keydown', function (event) {
  if (event.key === 'Escape' && $btn.attr('aria-expanded') === 'true') {
    setNavMenuState(false, true);
  }
});

setNavMenuState(false, false);
updateNav();
