/*eslint-disable*/

$(function () {

    /*fnSlide(); 함수의 호출=함수의 내부 코드가 실행됨*/
    setInterval(fnSlide, 5000); /*일정시간마다 반복*/

    function fnSlide() {

        $("div#shuttleFrame").animate({
                "margin-left": "-780px"
            },
            3000,
            function () {
                $("#shuttleFrame>a:nth-child(1)")
                    .insertAfter("#shuttleFrame>a:nth-child(3)");
                $("#shuttleFrame").css({
                    "margin-left": "0"
                });
            }
        );
    }



});
