$(function() {

    var owl=$(".owl-carousel");
    owl.owlCarousel({

        responsive:{
            0:{
                items: 3
            },
            768:{
                items: 4
            },
            991:{
                items: 5
            }
        }
    })
});