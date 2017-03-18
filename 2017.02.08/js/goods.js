
$(document).ready(function(){

    // var idx = 0 ;
    //
    // $('.sd > div').eq(0).css('display','block')
    //
    // $('.tab_list li').click(function(){
    //     idx = $(this).index();
    //     $('.sd > div').eq(idx).css('display','block').siblings().css('display','none');
    //
    // });
    $(".tab_area").each(function(){
           var tab = $(this);
           var tabBtn = tab.children(".tab_list").children("li").children("a");
           var content = tab.children(".sd").children(".tabcontent");

           // 탭버튼을 클릭했을때
           tabBtn.click(function(){
               // 이미 on 상태면 pass
               if( $(this).hasClass("on") ) return;

               // 모든 컨텐츠 부분을 안보이게 한뒤
               content.hide();

               // 클릭한 tab 버튼(a태그) 옆의 모든 태그들은 보이도록
               $(this).siblings().show();

               // 모든탭 버튼에 있던 on 클래스를 빼고
               // 현재 클릭한 탭메뉴 버튼에 on 클래스 추가
               tabBtn.removeClass("on");
               $(this).addClass("on");

               // 탭버튼를 쭉 돌면서 on 클래스가 있는 버튼만 on 이미지로 바꾸고
               // 나머지 버튼들은 off 이미지로 바꾼다.
               tabBtn.each(function(){
                   var src;
                   var img = $(this).children("img");
                   if( $(this).hasClass("on") ){
                       src = img.attr("src").replace("_off.", "_on.");
                   }else{
                       src = img.attr("src").replace("_on.", "_off.");
                   }

                   img.attr("src", src);
               });
           });

           // 맨첫번째 탭버튼 클릭처리
           tabBtn.eq(0).click();
       });





})
