// $(document).ready(function(){
//     $('.tab_area .sd div').hide();
//     $('.tab_area .sd div').first().show();
//
//      $('ul.tab_list a').click(function () {
//         var idx = $(this).index();
//
//         $('.sd div').eq(idx).show().siblings().hide();
//         console.log('@@');
//     });
//     // $('.tab_area').on('click','.tab_list a', function(e){
//     //     var $parent = $(this).parent();
//     //     var _index = $parent.index();
//     //     var $content = $(e.delegateTarget).find('.sd div').eq(_index);
//     //     e.preventDefault();
//     //
//     //     $parent.add($content).addClass('active').siblings().removeClass('active');
//     // }).find('.tab_list a').eq(0).trigger('click');
// });
$(function(){

    var idx = 0 ;

    $('.sd > div').eq(0).css('display','block')

    $('.tab_list li').click(function(){
        idx = $(this).index();
        $('.sd > div').eq(idx).css('display','block').siblings().css('display','none');

        // $('#list'+idx).css({position:'absolute',top:'-150px'});

    });

    /*$('#list'+idx).mouseover(function(){
        $(this).css({position:'absolute',top:'-150px'});
    });*/
    // $('#list'+idx).mouseout(function(){
    //     $(this).eq(idx).css({position:'absolute',top:'0px'});
    // });

    /*$('.tab_list li').mouseleave(function(){
        idx = $(this).index();
        $('#list'+idx).css({top:'0px'});
    }*/
    /*('.tab_list li').click(function(){
        idx = $(this).index();
        $('.sd > div').eq(idx).css('display','block').siblings().css('display','none')

    })*/


    //var list= $('.list');

    // list.bind({
    //     mouseover:function(){
    //         var tg = $(this);
    //         tg.removeClass().addClass('list over');
    //     },
    //     mouseout:function(){
    //         var tg = $(this);
    //         tg.removeClass().addClass('list out');
    //     },
    //     click:function(){
    //         var tg = $(this);
    //         tg.removeClass().addClass('list over');
    //     }
    // })


})
