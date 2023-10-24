$('.owl-carousel').owlCarousel({
    loop:true,
    margin:360,
    nav:true,
    autoplay:true,
    autoplayTimeout: 1000,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})