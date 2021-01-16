$(document).ready(function(){  
//Mobile menu
$('#menu').slicknav();$.scrollUp();

    //owl carousel
$('.product').owlCarousel({
                autoplay: true,
                autoplayTimeout: 3000,
                navigation: false,
                margin: 10,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            })
});


