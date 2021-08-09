
// 서울 문화시설 정보
url = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?serviceKey=LWnkTPaCBnQUhdORFm%2BbIF2gt29K%2BWC%2FwZm8pAYgn7%2Fnvf4G7mpOJZzRYKHQc3XI1%2BmDEQoolHxZvmM774aFnw%3D%3D&pageNo=1&numOfRows=8&MobileApp=AppTest&MobileOS=ETC&arrange=A&contentTypeId=14&areaCode=1&listYN=Y';

function cultureData() {
$.ajax({
    type : "GET",
    url : url,
    dataType : "json",
    success : function(data) {
        var culture = data;
        $('#article_0').append($('.img0').attr('src',culture.response.body.items.item[0].firstimage));
        $('#article_0 h2').text(''+culture.response.body.items.item[0].title+'');

        $('#article_1').append($('.img1').attr('src',culture.response.body.items.item[1].firstimage));
        $('#article_1 h2').text(''+culture.response.body.items.item[1].title+'');

        $('#article_2').append($('.img2').attr('src',culture.response.body.items.item[2].firstimage));
        $('#article_2 h2').text(''+culture.response.body.items.item[2].title+'');

        $('#article_3').append($('.img3').attr('src',culture.response.body.items.item[3].firstimage));
        $('#article_3 h2').text(''+culture.response.body.items.item[3].title+'');

        $('#article_4').append($('.img4').attr('src',culture.response.body.items.item[4].firstimage));
        $('#article_4 h2').text(''+culture.response.body.items.item[4].title+'');

        $('#article_5').append($('.img5').attr('src',culture.response.body.items.item[5].firstimage));
        $('#article_5 h2').text(''+culture.response.body.items.item[5].title+'');

        $('#article_6').append($('.img6').attr('src',culture.response.body.items.item[6].firstimage));
        $('#article_6 h2').text(''+culture.response.body.items.item[6].title+'');

        $('#article_7').append($('.img7').attr('src',culture.response.body.items.item[7].firstimage));
        $('#article_7 h2').text(''+culture.response.body.items.item[7].title+'');    

    }
});
}
cultureData();

// 카테고리 정렬방식
// 제목순
$('.category > ul > li:first-child > a').on("click", function(){
    $(this).css({
        "color":"black",
        "border-bottom":"4px solid blue"
    });
    $('.category > ul > li:last-child > a').css({
        "color":"#cecece",
        "border-bottom":"none"
    });

    newArr = 'A';
    newUrl = url.replace(/(arrange=).*?(&)/,'$1' + newArr + '$2');

    url = newUrl
    cultureData();
    mapData();

});

// 조회순
$('.category > ul > li:last-child > a').on("click", function(){
    $(this).css({
        "color":"black",
        "border-bottom":"4px solid blue"
    });
    $('.category > ul > li:first-child > a').css({
        "color":"#cecece",
        "border-bottom":"none"
    });
    
    url = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?serviceKey=LWnkTPaCBnQUhdORFm%2BbIF2gt29K%2BWC%2FwZm8pAYgn7%2Fnvf4G7mpOJZzRYKHQc3XI1%2BmDEQoolHxZvmM774aFnw%3D%3D&pageNo=1&numOfRows=8&MobileApp=AppTest&MobileOS=ETC&arrange=A&contentTypeId=14&areaCode=1&listYN=Y';
    newArr = 'B';
    newUrl = url.replace(/(arrange=).*?(&)/,'$1' + newArr + '$2');

    url = newUrl
    cultureData();
    mapData();

});



// 모달 창 띄우기
$('.open_modal').on('click',function(){
    $('.modal').css('display','block');
});
$('.modal_close').on('click',function(){
    $('.modal').css('display','none');
});


function mapData() {
// 모달창에 데이터 연동하기
$.ajax({
    type : "GET",
    url : url,
    dataType : "json",
    success : function(data) {
    var culture = data;

    // 0번 인덱스
    $('#article_0 > .open_modal ').on('click',function(){
        $('.modal_header').text(culture.response.body.items.item[0].title);
        $('.modal_addr').text(culture.response.body.items.item[0].addr1);
        var title = culture.response.body.items.item[0].title;
        var addr1 = culture.response.body.items.item[0].addr1;

        // 지도 연동..
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
        };  

        // 지도를 생성합니다    
        var map = new kakao.maps.Map(mapContainer, mapOption); 

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch( addr1, function(result, status) {

            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {

                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:6px 0; font-weight:bold;">'+title+'</div>'
                });
                infowindow.open(map, marker);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } 
        }); 
    });
    // 1번 인덱스
    $('#article_1 > .open_modal ').on('click',function(){
        $('.modal_header').text(culture.response.body.items.item[1].title);
        $('.modal_addr').text(culture.response.body.items.item[1].addr1);
        var title = culture.response.body.items.item[1].title;
        var addr1 = culture.response.body.items.item[1].addr1;

        // 지도 연동..
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
        };  

        // 지도를 생성합니다    
        var map = new kakao.maps.Map(mapContainer, mapOption); 

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch( addr1, function(result, status) {

            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {

                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:6px 0; font-weight:bold;">'+title+'</div>'
                });
                infowindow.open(map, marker);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } 
        }); 
    });
    // 2번 인덱스
    $('#article_2 > .open_modal ').on('click',function(){
        $('.modal_header').text(culture.response.body.items.item[2].title);
        $('.modal_addr').text(culture.response.body.items.item[2].addr1);
        var title = culture.response.body.items.item[2].title;
        var addr1 = culture.response.body.items.item[2].addr1;

        // 지도 연동..
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
        };  

        // 지도를 생성합니다    
        var map = new kakao.maps.Map(mapContainer, mapOption); 

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch( addr1, function(result, status) {

            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {

                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:6px 0; font-weight:bold;">'+title+'</div>'
                });
                infowindow.open(map, marker);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } 
        }); 
    });
    // 3번 인덱스
    $('#article_3 > .open_modal ').on('click',function(){
        $('.modal_header').text(culture.response.body.items.item[3].title);
        $('.modal_addr').text(culture.response.body.items.item[3].addr1);
        var title = culture.response.body.items.item[3].title;
        var addr1 = culture.response.body.items.item[3].addr1;

        // 지도 연동..
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
        };  

        // 지도를 생성합니다    
        var map = new kakao.maps.Map(mapContainer, mapOption); 

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch( addr1, function(result, status) {

            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {

                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:6px 0; font-weight:bold;">'+title+'</div>'
                });
                infowindow.open(map, marker);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } 
        }); 
    });
    // 4번 인덱스
    $('#article_4 > .open_modal ').on('click',function(){
        $('.modal_header').text(culture.response.body.items.item[4].title);
        $('.modal_addr').text(culture.response.body.items.item[4].addr1);
        var title = culture.response.body.items.item[4].title;
        var addr1 = culture.response.body.items.item[4].addr1;

        // 지도 연동..
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
        };  

        // 지도를 생성합니다    
        var map = new kakao.maps.Map(mapContainer, mapOption); 

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch( addr1, function(result, status) {

            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {

                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:6px 0; font-weight:bold;">'+title+'</div>'
                });
                infowindow.open(map, marker);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } 
        }); 
    });
    // 5번 인덱스
    $('#article_5 > .open_modal ').on('click',function(){
        $('.modal_header').text(culture.response.body.items.item[5].title);
        $('.modal_addr').text(culture.response.body.items.item[5].addr1);
        var title = culture.response.body.items.item[5].title;
        var addr1 = culture.response.body.items.item[5].addr1;

        // 지도 연동..
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
        };  

        // 지도를 생성합니다    
        var map = new kakao.maps.Map(mapContainer, mapOption); 

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch( addr1, function(result, status) {

            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {

                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:6px 0; font-weight:bold;">'+title+'</div>'
                });
                infowindow.open(map, marker);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } 
        }); 
    });
    // 6번 인덱스
    $('#article_6 > .open_modal ').on('click',function(){
        $('.modal_header').text(culture.response.body.items.item[6].title);
        $('.modal_addr').text(culture.response.body.items.item[6].addr1);
        var title = culture.response.body.items.item[6].title;
        var addr1 = culture.response.body.items.item[6].addr1;

        // 지도 연동..
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
        };  

        // 지도를 생성합니다    
        var map = new kakao.maps.Map(mapContainer, mapOption); 

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch( addr1, function(result, status) {

            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {

                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:6px 0; font-weight:bold;">'+title+'</div>'
                });
                infowindow.open(map, marker);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } 
        }); 
    });
    // 7번 인덱스
    $('#article_7 > .open_modal ').on('click',function(){
        $('.modal_header').text(culture.response.body.items.item[7].title);
        $('.modal_addr').text(culture.response.body.items.item[7].addr1);
        var title = culture.response.body.items.item[7].title;
        var addr1 = culture.response.body.items.item[7].addr1;

        // 지도 연동..
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
        };  

        // 지도를 생성합니다    
        var map = new kakao.maps.Map(mapContainer, mapOption); 

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch( addr1, function(result, status) {

            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {

                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:6px 0; font-weight:bold;">'+title+'</div>'
                });
                infowindow.open(map, marker);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } 
        }); 
    });



}
});

}

mapData();


// 페이지 목록
$('.pagelist > ul > li:nth-child(1)').on('click', function(){
    newNum = '1';
    newUrl = url.replace(/(pageNo=).*?(&)/,'$1' + newNum + '$2');
    url = newUrl
    cultureData();
    mapData();
})
$('.pagelist > ul > li:nth-child(2)').on('click', function(){
    newNum = '2';
    newUrl = url.replace(/(pageNo=).*?(&)/,'$1' + newNum + '$2');
    url = newUrl
    cultureData();
    mapData();
})
$('.pagelist > ul > li:nth-child(3)').on('click', function(){
    newNum = '3';
    newUrl = url.replace(/(pageNo=).*?(&)/,'$1' + newNum + '$2');
    url = newUrl
    cultureData();
    mapData();
})
$('.pagelist > ul > li:nth-child(4)').on('click', function(){
    newNum = '4';
    newUrl = url.replace(/(pageNo=).*?(&)/,'$1' + newNum + '$2');
    url = newUrl
    cultureData();
    mapData();
})