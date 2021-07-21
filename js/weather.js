// 날씨정보
var url = "https://api.openweathermap.org/data/2.5/weather";
    url += "?q=" + "seoul";
    url += "&appid=" + "3ba602bae6e1bc1100b3786ac397b05b";
    url += "&lang=" + "kr";

$.ajax({
    type: "GET",
    // url:"https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=3ba602bae6e1bc1100b3786ac397b05b",
    url: url,
    dataType:"json",
    success:function(data) {
        var weather = data;
        var icon = weather.weather[0].icon // 아이콘

        // 날씨에 맞게 아이콘 넣기
        switch(icon) {
            // 데이타임
            case "01d" : $('#icon').attr('src', '../images/icon/brightness-high.svg');
            break;
            case "02d" : $('#icon').attr('src', '../images/icon/cloud-sun.svg');
            break;
            case "03d" : $('#icon').attr('src', '../images/icon/cloud.svg');
            break;
            case "04d" : $('#icon').attr('src', '../images/icon/clouds.svg');
            break;
            case "09d" : $('#icon').attr('src', '../images/icon/cloud-rain.svg');
            break;
            case "10d" : $('#icon').attr('src', '../images/icon/cloud-rain-heavy.svg');
            break;
            case "11d" : $('#icon').attr('src', '../images/icon/cloud-lightning.svg');
            break;
            case "13d" : $('#icon').attr('src', '../images/icon/snow2.svg');
            break;
            case "50d" : $('#icon').attr('src', '../images/icon/cloud-haze-1.svg');
            break;
            // 나이트타임
            case "01n" : $('#icon').attr('src', '../images/icon/brightness-high.svg');
            break;
            case "02n" : $('#icon').attr('src', '../images/icon/cloud-sun.svg');
            break;
            case "03n" : $('#icon').attr('src', '../images/icon/cloud.svg');
            break;
            case "04n" : $('#icon').attr('src', '../images/icon/clouds.svg');
            break;
            case "09n" : $('#icon').attr('src', '../images/icon/cloud-rain.svg');
            break;
            case "10n" : $('#icon').attr('src', '../images/icon/cloud-rain-heavy.svg');
            break;
            case "11n" : $('#icon').attr('src', '../images/icon/cloud-lightning.svg');
            break;
            case "13n" : $('#icon').attr('src', '../images/icon/snow2.svg');
            break;
            case "50n" : $('#icon').attr('src', '../images/icon/cloud-haze-1.svg');
            break;
        }

        // 날씨에 맞는 배경
        switch(icon) {
            // 데이타임
            case "01d" : $('#bg').attr('style', 'background-image: url(../images/sunny.jpg)')
            break;
            case "02d" :  $('#bg').attr('style', 'background-image: url(../images/sunnycloud.jpg)')
            break;
            case "03d" :  $('#bg').attr('style', 'background-image: url(../images/cloud.jpg)')
            break;
            case "04d" :  $('#bg').attr('style', 'background-image: url(../images/clouds.jpg)')
            break;
            case "09d" :  $('#bg').attr('style', 'background-image: url(../images/rain.jpg)')
            break;
            case "10d" :  $('#bg').attr('style', 'background-image: url(../images/heavyrain.jpg)')
            break;
            case "11d" :  $('#bg').attr('style', 'background-image: url(../images/thunder.jpg)')
            break;
            case "13d" :  $('#bg').attr('style', 'background-image: url(../images/snow.jpg)')
            break;
            case "50d" :  $('#bg').attr('style', 'background-image: url(../images/mist.jpg)')
            break;
            // 나이트타임
            case "01n" : $('#bg').attr('style', 'background-image: url(../images/sunny.jpg)')
            break;
            case "02n" :  $('#bg').attr('style', 'background-image: url(../images/sunnycloud.jpg)')
            break;
            case "03n" :  $('#bg').attr('style', 'background-image: url(../images/cloud.jpg)')
            break;
            case "04n" :  $('#bg').attr('style', 'background-image: url(../images/clouds.jpg)')
            break;
            case "09n" :  $('#bg').attr('style', 'background-image: url(../images/rain.jpg)')
            break;
            case "10n" :  $('#bg').attr('style', 'background-image: url(../images/heavyrain.jpg)')
            break;
            case "11n" :  $('#bg').attr('style', 'background-image: url(../images/thunder.jpg)')
            break;
            case "13n" :  $('#bg').attr('style', 'background-image: url(../images/snow.jpg)')
            break;
            case "50n" :  $('#bg').attr('style', 'background-image: url(../images/mist.jpg)')
            break;
        }

        // 온도 구하기
        var K = weather.main.temp; //켈빈
        var C = 0;
        C = K - 273.15; //켈빈을 섭씨로 바꾸는거
        $(".main_desc > h3").text(Math.floor(C) + "℃"); //소수점 버림

        // 날씨
        $(".main_desc > h4").text(weather.weather[0].description);

        // 체감온도 구하기
        var fK = weather.main.feels_like; //체감온도 켈빈
        var fC = 0;
        fC = fK - 273.15;
        $(".second_desc > h1 ").text("체감온도 : " + Math.floor(fC) + "℃")

        // 최저기온 구하기
        var minK = weather.main.temp_min;
        var minC = 0;
        minC = minK - 273.15;
        $(".second_desc > h2").text("최저기온 : " + Math.floor(minC) + "℃")

        // 최고기온 구하기
        var maxK = weather.main.temp_max;
        var maxC = 0;
        maxC = maxK - 273.15;
        $(".second_desc > h3").text("최고기온 : " + Math.floor(maxC) + "℃")

        // 습도
        $(".second_desc > h4").text("습도 : " + weather.main.humidity + "%" + " 💧")
        // 풍속
        $(".second_desc > h5").text("풍속 : " + weather.wind.speed + "m/s" + " 🌫")


    
    },
    error:function(request, status, error){
        console.log("code:" + request.status);
        console.log("message:" + request.responseText);
        console.log("error:" + error);
        // 혹시 에러가 나면 에러 출력하는거
    }
});