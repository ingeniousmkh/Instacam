$(document).ready(function(){

    // camera part venobox
    $('.venobox').venobox({
        titleattr: 'data-title',
        numeratio: true,
        infinigall: true,
        autoplay: true,
        maxWidth: 500,
    });


    // testimonial slider
    $('.testimonial-slider').slick({
        autoplay: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        // nextArrow:'<i class="fa fa-long-arrow-right round-next round-arrow" aria-hidden="true"></i>',
        // prevArrow:'<i class="fa fa-long-arrow-left round-prev round-arrow" aria-hidden="true"></i>',
    });

    $('.left-testimonial').click(function(){
        $('.testimonial-slider').slick('slickPrev');
    });
      
    $('.right-testimonial').click(function(){
        $('.testimonial-slider').slick('slickNext');
    });
    

    // news slider
    $('.news-slider').slick({
        autoplay: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        // nextArrow:'<i class="fa fa-long-arrow-right round-next round-arrow" aria-hidden="true"></i>',
        // prevArrow:'<i class="fa fa-long-arrow-left round-prev round-arrow" aria-hidden="true"></i>',
    });

    $('.left-news').click(function(){
        $('.news-slider').slick('slickPrev');
    });
      
    $('.right-news').click(function(){
        $('.news-slider').slick('slickNext');
    });


    // bottom to top scroller
    $(window).scroll(function(){
        var Scrolling = $(this).scrollTop();
        // console.log(Scrolling);
        if (Scrolling > 300) {
            $('.btm2top-btn').fadeIn(1000);
        }
        else {
            $('.btm2top-btn').fadeOut(1000);
        }
    });

    // $(".btm2top-btn").click(function(){
    //     $('html, body').animate({scrollTop: 0}, 500);
    // });


    // fixed nav bar
    $(window).scroll(function(){
        var Scrolling = $(this).scrollTop();
        // console.log(Scrolling);
        if (Scrolling > 100) {
            $('nav').addClass("n-f");
        }
        else {
            $('nav').removeClass("n-f");
        }
    });

    // search box
    $(".search").click(function(){
        $(".search-box").toggle();
       $("input[type='search']").focus();
    });

    
});