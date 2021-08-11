// 메뉴 리스트 활성화
$(".main_gnb > button").on("click", function(){
    $(".hide_menu").css("display","block");
    $(".close").css("display","block");
    $(".boxwrap").css("display","none");
    $(".main_footer").css("display","none");
    $(".main_gnb").css("display","none");
    // 메뉴버튼 누르면 메인화면, 메뉴버튼, 푸터 부분이 사라지고 리스트와 x표시가 나타남
});

// 메뉴 리스트 비활성화
$(".close").on("click", function(){
    $(".hide_menu").css("display","none");
    $(".close").css("display","none");
    $(".boxwrap").css("display","table");
    $(".main_footer").css("display","block");
    $(".main_gnb").css("display","block");
    // x 버튼 누르면 원래대로 돌아옴 
});

// 메뉴리스트 링크에 마우스 올렸을때 배경 변화
var list1 = ".hide_menu > ul > li:nth-child(1) > a"
var list2 = ".hide_menu > ul > li:nth-child(2) > a"
var list3 = ".hide_menu > ul > li:nth-child(3) > a"
var list4 = ".hide_menu > ul > li:nth-child(4) > a"

// 문화시설
$(list1).on("mouseover", function(){
    $(".list_img").attr("style", "background-image:url(../images/jet-dela-cruz-Gf6puSx3h6Y-unsplash.jpg)")
});
$(list1).on("mouseout", function(){
    $(".list_img").attr("style", "background-image:url(../images/ciaran-o-brien-qegMLAiTBA4-unsplash.jpg)")
});

// 축제및행사
$(list2).on("mouseover", function(){
    $(".list_img").attr("style", "background-image:url(../images/sujin-lee-C9JC1cqNxZE-unsplash.jpg)")
});
$(list2).on("mouseout", function(){
    $(".list_img").attr("style", "background-image:url(../images/ciaran-o-brien-qegMLAiTBA4-unsplash.jpg)")
});

// 맛집
$(list3).on("mouseover", function(){
    $(".list_img").attr("style", "background-image:url(../images/stephan-valentin-wepDTOWs4d0-unsplash.jpg)")
});
$(list3).on("mouseout", function(){
    $(".list_img").attr("style", "background-image:url(../images/ciaran-o-brien-qegMLAiTBA4-unsplash.jpg)")
});

// 날씨정보
$(list4).on("mouseover", function(){
    $(".list_img").attr("style", "background-image:url(../images/zequn-gui-xVFS3meofYM-unsplash.jpg)")
});
$(list4).on("mouseout", function(){
    $(".list_img").attr("style", "background-image:url(../images/ciaran-o-brien-qegMLAiTBA4-unsplash.jpg)")
});


