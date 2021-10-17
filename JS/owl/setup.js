$('.owl-carousel').owlCarousel({
    loop: Infinity,
    pagination: false,
    dots: false,
    margin:15,
    nav: false,
    responsive:{ //para controlar tamanho de elementos alterados conforme tela
        0:{
            items:4
        },
        600:{
            items:6
        },
        1000:{
            items:8
        }
    }
})