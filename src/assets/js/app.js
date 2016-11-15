/* ========================================================================
 * Initialize Foundation Plugins and Site Functions
 * ===================================================================== */

$(document).ready(function() {
  $(document).foundation();
  SitePlugins.scrollTopTriggerInit();
});

var SitePlugins = (function($) {
  /* ========================================================================
   * Name: Scroll to top trigger
   * Added: MONTH YEAR
   * Description: Creates scroll top trigger when markup-exists
   * ===================================================================== */

  function scrollTopTrigger() {
    var $scrollTopTrigger = $('.scroll-top-trigger');
    var BOTTOM_POS = '20px';
    var BOTTOM_POS_ADJUSTED = '105px';

    if($scrollTopTrigger.length > 0) {
      $(window).on('load scroll', function () {
        var SCROLL_START = $(this).scrollTop() > 100;
        var WINDOW_BTM = window.innerHeight + window.scrollY >= document.body.offsetHeight;

        if (SCROLL_START) {
          $scrollTopTrigger.fadeIn('fast');
        } else {
          $scrollTopTrigger.fadeOut('fast');
        }

        // Position
        if (WINDOW_BTM) {
          $scrollTopTrigger.css('bottom', BOTTOM_POS_ADJUSTED);
        } else {
          $scrollTopTrigger.css('bottom', BOTTOM_POS);
        }
      });

      $scrollTopTrigger.click(function () {
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });
    }
  }

  // Public pointers to private functions
  return {
    scrollTopTriggerInit: scrollTopTrigger,
  }

})(jQuery);
