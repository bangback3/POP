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
var idx = 0
var move = $('.slidebanner').width()
var slide = {
    Event: function() {
        $('.slidebanner .next').click(function() {

            $('.slidebanner ul li').eq(idx)
                .find('img')
                .animate({
                    'left': -move
                }, 1000).parent().next().find('img').css({
                    'left': move,
                    'display': 'block'
                }).animate({
                    'left': 0
                }, 1000)
            idx++
        })

        $('.slidebanner .prev').click(function() {

            $('.slidebanner ul li').eq(idx)
                .find('img')
                .animate({
                    'left': move
                }, 1000).parent().next().find('img').css({
                    'left': -move,
                    'display': 'block'
                }).animate({
                    'left': 0
                }, 1000)
            idx--
        })
    }
}







//문서 준비
$(function() {
    //mouseEvent
    navEvent.mouse()
    slide.Event()
})
