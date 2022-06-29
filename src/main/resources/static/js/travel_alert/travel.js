starttravel(); // 처음시작 함수 호출


//가로크기 변환되었을때 실행함수
$(window).resize(function() {
    if($(window).width() < 767) {
        $(".title").addClass("rounded");
        $(".title").css({"border-top": "1px solid #c8c8c8"});
    }else{
        $(".title").removeClass("rounded");
        $(".title").css({"border-top": ""});
    }
});

// 처음 json 함수 호출
function starttravel(){
    for (let i = 2; i <= 4; i++ ){
        gettravel(i , 20);
    }
}

//JSON 가져오기 함수
function gettravel(lv , j){
    $.ajax({
        url:"/travel/gettravel",
        method:"GET",
        async:false,
        data:{"lv":lv},
        success : function (re){
            division(re);
            htmltravel(re, lv, j);
        }
    });
}

//분류 함수
let object;
function division(re){
    for(let i = 0; i < re.data.length; i++){
        if(re.data[i].continent_nm == let){// 중복된 대륙이라면

        }else{// 중복된 대륙이 아니라면

        }
    }
}

//html 출력 함수
function htmltravel(re, lv, j){
    let html = "";
    let i = 0;
    for(i = 0 ; i < j ; i++){
        if(re.data[i] != null){
            html += '<li>'+re.data[i].country_nm+'</li>';
        }
    }
    console.log(re);
    if(i < re.data.length){//출력된 나라가 전체데이터보다 작을때
        html += '<li><a onclick="getalldata('+lv+','+re.data.length+')" href="#">...더보기</a></li>';
    }else if(i == re.data.length){// 출력된 나라가 전체데이터양이랑 같을때
        html += '<li><a onclick="getalldata('+lv+', 20)" href="#">...간소화</a></li>';
    }
    // html 추가
    if(lv == 2){ // 2단계 json이라면
        $("#reserve").html(html);
    }else if(lv == 3){ // 3단계 json이라면
        $("#suasion").html(html);
    }else{// 4단계 json 이라면
        $("#prohibition").html(html);
    }
}
function getalldata(lv, j){
    gettravel(lv,j);
}
