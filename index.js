var swiper1 = new Swiper('.sec1bnr', {

    loop: true,

    autoplay: {

        delay: 3000,

        disableOnInteraction: false,

      },

      speed:500,

    effect: 'fade',

    pagination: {

      el: '.swiper-pagination1',

      clickable: true,

    },

    navigation: {

      nextEl: '.swiper-button-next',

      prevEl: '.swiper-button-prev',

    },

  });

//   ---------

  swiper1.on('slideChange',function(){

    var idx=swiper1.activeIndex;

    $('.sec1txt .txtbox').animate({"opacity":0,"left":"-10px"},300);

    $('.sec1txt .txtbox').eq(idx-5).animate({"opacity":1,"left":"0"},500);



    // $('.swiper-slide').eq(idx+4).addClass('on');

});

// $('.swiper-slide').click(function(){

//     var idx=$(this).index();

//     swiper1.slideTo(idx,500,false);

// })

    // $('.sec1txt .txtbox:gt(0)').hide()

    $('.sec1txt .txtbox:gt(0)').css({"opacity":0});

$('.swiper-slide').click(function(){

    var idx=$(this).index();

    console.log(idx)

})//test

$('.sec2bnrBar li').click(function(){

    $(this).removeClass('off')

    $(this).addClass('on')

    $('.close').addClass('on');

        $('.close').delay(200).animate({"opacity":"1"});

})

$('.sec2bnrBar .close').click(function(){

    var idx=$(this).index()

    $(this).animate({"opacity":0},function(){

    $(this).removeClass('on');

    $('.sec2bnrBar li').removeClass('on');

    $('.sec2bnrBar li').addClass('off');

})

})