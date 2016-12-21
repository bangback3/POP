//익명함수
// var over = function() {
//     $(this).css({
//         'background': 'red',
//         'text-decoration': 'yellow'
//     })
// }
//
// var out = function() {
//     $(this).css({
//         'background': 'initial',
//         'text-decoration': 'initial'
//
//     })
// }
//
// var scrollEvent = function() {
//     var idx = $(this).index();
//     var sot = $('.content section').eq(idx).offset().top
//     $('html,body').stop().animate({
//         scrollTop: sot
//     }, 500)
//
//     return false;
// }
//
//
//
// //문서준비
// $(function() {
//     $('nav li')
//         .mouseenter(over)
//         .mouseleave(out)
//         .click(scrollEvent)
// })


var navEvent = { // mouseEvent fuction
    mouse: function() {
        var over = function() {
            $(this).css('background', 'red').children('a').css('color', '#FFF');
        }

        var out = function() {
            $(this).css('background', 'initial').children('a').css('color', 'initial');
        }

        var scroll = function() {
            navEvent.idx = $(this).index();
            var sot = $('.content section').eq(navEvent.idx).offset().top;
            $('html,body').stop().animate({
                scrollTop: sot
            })
            return false;
        }

        $('nav li').on({
            mouseenter: over,
            mouseleave: out,
            click: scroll
        })
    }
}


var idx = 0;
var slide = {
    idx: 0,
    wrapwidth: $('.slidebanner').width(),
    Event: function() {
        $('.slidebanner .next').click(function() {

            $('.slidebanner ul li').eq(slide.idx)
                .find('img')
                .animate({
                    'left': -wrapwidth.move
                }, 1000).parent().removeClass().next().addClass('on').find('img').css({
                    'left': move,
                    'display': 'block'
                }).animate({
                    'left': 0
                }, 1000)

            idx++

            if (idx == $('.slidebanner ul li').length) {
                console.log('asd')
                idx = 0
                $('.slidebanner ul li').eq(idx).addClass('on').find('img').css({
                    'left': move,
                    'display': 'block'
                }).animate({
                    'left': 0
                }, 1000)
            }
        })


        $('.slidebanner .prev').click(function() {

            var move = $('.slidebanner').width()

            $('.slidebanner ul li').eq(idx)
                .find('img')
                .animate({
                    'left': move
                }, 1000).parent().removeClass().prev().addClass('on').find('img').css({
                    'left': -move,
                    'display': 'block'
                }).animate({
                    'left': 0
                }, 1000)
            idx--
            if (idx < 0) {
                idx = $('.slidebanner ul li').length -1
                $('.slidebanner ul li').eq(idx).addClass('on').find('img').css({
                    'left': -move,
                    'display': 'block'
                }).animate({
                    'left': 0
                }, 1000)
            }
        })


        $('.slidebanner li a').click(function() {
            var move = $('.slidebanner').width()
            var hisnum = $('.slidebanner li.on').index();
            idx = $(this).parent().index();

            if (idx > hisnum) {

                $('.slidebanner li').eq(hisnum).find('img').css({
                    left: 0,
                    'display': 'block'
                }).animate({
                    left: -move
                })

                $('.slidebanner li').eq(idx).addClass('on').find('img').css({
                    left: move,
                    'display': 'block'
                }).animate({
                    left: 0
                }).parent().siblings().removeClass()


            } else if (idx > hisnum) {

                $('.slidebanner li').eq(hisnum).find('img').css({
                    left: 0,
                    'display': 'block'
                }).animate({
                    left: -move
                })

                $('.slidebanner li').eq(idx).addClass('on').find('img').css({
                    left: move,
                    'display': 'block'
                }).animate({
                    left: 0
                }).parent().siblings().removeClass()


            }


        })


    }

}

$(function() {
    var fidx;
    $('.fadebanner li a').click(function(){

        idx = $(this).parent().index();
        $('.fadebanner li.on').removeClass().find('img').fadeOut(4500);
        $('.fadebanner li').eq(idx).addClass('on').find('img').fadeIn();

        return false
    })
})
$(function(){
    var inter;
    $('.fadebanner li a')
})

$('.movie-view li a').click(function(){

    var movecode = $(this).attr('href');
    var url = "https://www.youtube.com/embed/"+mo+"?rel=0&amp;controls=0&amp;showinfo=0"
})


//오예!!
//문서 준비
$(function() {
    //mouseEvent
    navEvent.mouse()
    slide.Event()

})
