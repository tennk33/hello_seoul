// 마우스 휠 움직였을때 가로로 한 화면 이동하기 
        // 마우스 휠 움직였을때 가로로 한 화면 이동하기 
        var elmSelecterIdx = 0;
        window.onload = function () {
            var elm = ".box";
            $(elm).each(function (index) {
                // 개별적으로 Wheel 이벤트 적용
                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();
                    var delta = 0;
                    if (!event) event = window.event;
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    } 
                    else if (event.detail)
                        delta = -event.detail / 3;
                    var moveTop = $(window).scrollLeft();
                    var elmSelecter = $(elm).eq(index);

                    // 마우스휠을 위에서 아래로 
                    if (delta < 0) {
                        if ($(elmSelecter).next() != undefined) {
                            try{
                                moveTop = $(elmSelecter).next().offset().left;
                            }catch(e){}
                        }

                        if($(elmSelecter).next().index() != -1) {
                            elmSelecterIdx = $(elmSelecter).next().index();
                        }

                    // 마우스휠을 아래에서 위로
                    } else {
                        if ($(elmSelecter).prev() != undefined) {
                            try{
                                moveTop = $(elmSelecter).prev().offset().left;
                            }catch(e){}
                        }

                        if($(elmSelecter).prev().index() != -1) {
                            elmSelecterIdx = $(elmSelecter).prev().index();
                        }

                    }

                    // console.log("휠 idx: " + elmSelecterIdx);

                    // 화면 이동 0.8초(800)
                    $("html,body").stop().animate({
                        scrollLeft: moveTop + 'px'
                    }, {
                        duration: 800, complete: function () {
                        }
                    });
                });
            });
        }

// 푸터에 있는 애기 네비게이션 눌렀을때 스크롤되면서 이동
$(".main_footer a").on("click", function(event){
    event.preventDefault;
    var target = $(this.hash);
    var hash = this.hash;
    var idx = hash.substring(4, hash.length);

    elmSelecterIdx = idx;
    // console.log("click idx: " + elmSelecterIdx);

    $("html, body").animate({scrollLeft: target.offset().left}, 700);
});

$(window).resize(function (){
    // var width = $(window).width();
    // console.log("elmSelecterIdx: " + elmSelecterIdx);

    var target = $("#sec" + elmSelecterIdx);

    $("html,body").stop().animate({
            scrollLeft: target.offset().left
        }, {
            duration: 800, complete: function () {
            }
        });
});

// 바로가기 버튼에 마우스 올렸을때 색깔 변하는 이벤트
$(".text > button").on("mouseover", function(){
    $(".text > button").css({
        "background": "white",
        "border" : "none",
    }, $(".text > button").css({
        "color" : "black"
    }));
});

$(".text > button").on("mouseout", function(){
    $(".text > button").css({
        "background": "none",
        "border":"1px solid white"
    }, $(".text > button").css({
        "color" : "white"
    }));
});

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
    $(".list_img").attr("style", "background-image:url(images/jet-dela-cruz-Gf6puSx3h6Y-unsplash.jpg)")
});
$(list1).on("mouseout", function(){
    $(".list_img").attr("style", "background-image:url(images/ciaran-o-brien-qegMLAiTBA4-unsplash.jpg)")
});

// 축제및행사
$(list2).on("mouseover", function(){
    $(".list_img").attr("style", "background-image:url(images/sujin-lee-C9JC1cqNxZE-unsplash.jpg)")
});
$(list2).on("mouseout", function(){
    $(".list_img").attr("style", "background-image:url(images/ciaran-o-brien-qegMLAiTBA4-unsplash.jpg)")
});

// 맛집
$(list3).on("mouseover", function(){
    $(".list_img").attr("style", "background-image:url(images/stephan-valentin-wepDTOWs4d0-unsplash.jpg)")
});
$(list3).on("mouseout", function(){
    $(".list_img").attr("style", "background-image:url(images/ciaran-o-brien-qegMLAiTBA4-unsplash.jpg)")
});

// 날씨정보
$(list4).on("mouseover", function(){
    $(".list_img").attr("style", "background-image:url(images/zequn-gui-xVFS3meofYM-unsplash.jpg)")
});
$(list4).on("mouseout", function(){
    $(".list_img").attr("style", "background-image:url(images/ciaran-o-brien-qegMLAiTBA4-unsplash.jpg)")
});
