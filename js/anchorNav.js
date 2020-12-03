// Anchor Navigation Scrolling Function
// From https://stackoverflow.com/a/39734042
jQuery(function($) {
    $('a[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
       && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                .animate({ scrollTop: targetOffset }, 1000); //set scroll speed
                return false;
            }
        }
    });
    window.scrollReveal = new scrollReveal(); 
});