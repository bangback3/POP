$(document).ready(function(){
    $('.tab_area .sd div').hide();
    $('.tab_area .sd div').first().show();

     $('ul.tab_list li').click(function () {
        var idx = $(this).index();

        $('.sd div').eq(idx).show().siblings().hide();
    });
});
