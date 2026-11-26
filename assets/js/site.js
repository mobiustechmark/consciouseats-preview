
(function () {
    'use strict';

    $(function () {

        var $toggle = $('#nav-toggle');
        var $panel = $('#nav-panel');
        var DESKTOP_MIN = 768;


        function openNav() {
            $panel.addClass('is-open');
            $panel.attr('aria-hidden', 'false');
            $toggle.attr('aria-expanded', 'true');
        }

        function closeNav() {
            $panel.removeClass('is-open');
            $panel.attr('aria-hidden', 'true');
            $toggle.attr('aria-expanded', 'false');
        }

        function toggleNav() {
            var isOpen = $panel.hasClass('is-open');
            if (isOpen) {
                closeNav();
            } else {
                openNav();
            }
        }

        $toggle.on('click', function (e) {
            e.preventDefault();
            toggleNav();
        });

        $panel.on('click', 'a', function () {
            closeNav();
        });

        $(document).on('keydown', function (e) {
            var isEscape = (e.key === 'Escape' || e.keyCode === 27);
            if (isEscape && $panel.hasClass('is-open')) {
                closeNav();
                $toggle.trigger('focus');
            }
        });

        $(window).on('resize', function () {
            if ($(window).width() >= DESKTOP_MIN && $panel.hasClass('is-open')) {
                closeNav();
            }
        });


        var thisYear = new Date().getFullYear();
        $('.js-year').text(thisYear);

    });
}());
