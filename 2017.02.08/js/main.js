$(function(){

    var idx = 0;

    function movement(start,end,i){
        $('.view li').eq(i).addClass('on').find('div').css({
            left:start,
            'display':'block'
        }).stop().animate({
            left:end
        }).parent().siblings().removeClass();

        if(idx == $('.view li').length){
            idx = 0
            movement('100%',0,idx)
        }else if(idx < 0){
            idx = $('.view ul li').length -1;
            movement('-100%',0,idx)
        }
    }

    $('.next').click(function(){
        movement(0,'-100%',idx);
        idx++
        movement('100%',0,idx);
    })

    $('.prev').click(function(){
        movement(0,'100%',idx);
        idx--
        movement('-100%',0,idx);
    })

    $('.view li a').click(function(){
        var hinum = $('.view li.on').index();
        idx = $(this).parent().index()

        if(hinum < idx){
            movement(0,'-100%',hinum);
            movement('100%',0,idx);
        }else if(hinum > idx){
            movement(0,'100%',hinum);
            movement('-100%',0,idx);
        }
        return false;
    })


    $('.open').click(function(){
        bl();

        var tg = '.'+$(this).attr('id')

        var w = $(tg).width();
        var h = $(tg).height();

        $(tg).show().css({
            left:'50%',
            margitTop:'5%',
            top:function(){
                return $(window).scrollTop() + 'px'
            },
            marginLeft:function(){
                return '-'+(w / 2)+"px"
            }
        })
    })

    var close = function(){

        $('.pop').hide();
        $('.bl').fadeOut(function(){
            $(this).remove()
        })
    }

    $('body').on('click','.bl',close)
    $('.close').click(close)

    function bl(){
        $('body').prepend('<div class="bl"></div>')
    }
})
