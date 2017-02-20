$(document).ready(function(){
    $(".tabmenu").each(function(){
        var tab = $(this).children("ul");
        var tabBtn = tab.children("li").children("a");
        var content = tabBtn.nextAll();

        tabBtn.click(function(){
            if($(this).hasClass("on"))return;
            content.hide();

            $(this).nextAll().show();

            tabBtn.removeClass("on");
            $(this).addClass("on");

            tabBtn.each(function(){
                var src;
                var img = $(this).children("img");
                if($(this).hasClass("on")){
                    src = img.attr("src").replace("_off.","_on.");
                }else{
                    src = img.attr("src").replace("_on.","_off.");
                }
                img.attr("src", src);
            });
        });
            tabBtn.eq(0).click();
    });
});
