$(document).ready(function () {
    $(function () {
        // Owl Carousel
        var owl = $(".owl-header");
        owl.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            autoplay: true,
            dots: true,
            navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #ee5a24;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #ee5a24;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],

        });
    });

    $('#client-logos').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        },
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #ee5a24;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #ee5a24;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    });


    // navbar fixed
    let nav = document.querySelector('.links_nave')
    window.onscroll = e => {
        if (document.documentElement.scrollTop > 100) {
            nav.style.top = '-80px'
        } else {
            nav.style.top = '75px'
        }

        if (document.documentElement.scrollTop > 300) {
            nav.style.position = 'fixed'
            nav.style.top = '0px'
        } else {
            nav.style.position = 'absolute'
        }
    }


});