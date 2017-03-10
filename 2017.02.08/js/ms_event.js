$(function(){ //콜백함수는 함수안에 인자가 있는것.ex)함수 안에 함수.
	  
    $('.open').click(function(){
        bl();
        
        var tg = '.'+$(this).attr('id')//attr는 대상 안에서 정해준대상을 뽑아온다
        
        var w = $(tg).width();
        var h = $(tg).height();
        
      
        $(tg).show().css({
            left:'50%',
            marginTop:'5%',
            top:function(){
            	return $(window).scrollTop() + 'px'
            },
            marginLeft:function(){
                return '-'+(w / 2)+"px"//return은 그 대상으로 가령 식이라면
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
