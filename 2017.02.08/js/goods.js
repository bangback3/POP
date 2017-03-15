$(document).ready(function(){
    $(".tab_list a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab_area>div").not(tab);
        $(tab).show();
    });
});
