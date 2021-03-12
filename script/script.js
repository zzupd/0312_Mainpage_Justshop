$(function () {

    /*//////////////// GNB 시작//////////////// */
    $("#mainMenu>li").mouseover(function () {
        $(".subMenu").stop().fadeIn(1000);
    });
    $("#mainMenu>li").mouseout(function () {
        $(".subMenu").stop().fadeOut(1000);
    });
    /*//////////////// GNB 끝//////////////// */


    /*//////////////// 슬라이드쇼 시작//////////////// */

    setInterval(fnSlide, 3000);
    function fnSlide() {

        $("#main #shuttleFrame").animate({
                "margin-left": "-1200px"
            },
            1000,
            "swing",
            function () {
                $("#main #shuttleFrame a:first-child").insertAfter("#main #shuttleFrame a:last-child");
                $("#main #shuttleFrame").css({
                    "margin-left": "0px"
                });
            }
        );

    }

    /*//////////////// 슬라이드쇼 끝//////////////// */




    /*//////////////// 멀티탭 시작//////////////// */
    $("button#tabBtn1").click(function () {

        /* 버튼 모양 변경 시작 */
        $("button").css({
            "border": "none",
            "top": "0px"
        });

        $(this).css({
            "border": "1px solid #aaa",
            "border-bottom": "none",
            "top": "1px"
        });

        /* 내용 변경 시작 */
        $("div#tabContents1").css({
            "display": "block"
        });
        $("div#tabContents2").css({
            "display": "none"
        });
    });


    $("button#tabBtn2").click(function () {

        /* 버튼 모양 변경 시작 */
        $("button").css({
            "border": "none",
            "top": "0px"
        });

        $(this).css({
            "border": "1px solid #aaa",
            "border-bottom": "none",
            "top": "1px"
        });


        /* 내용 변경 시작 */
        $("div#tabContents1").css({
            "display": "none"
        });
        $("div#tabContents2").css({
            "display": "block"
        });
    });

    /*//////////////// 멀티탭 끝//////////////// */



    /*/////////// 레이어 팝업 시작 /////////// */
    $(".modalPoint").click(function() {
        $("#layerBG").css({"display": "block"});
    });
    $("#closeBtn").click(function() {
        $("#layerBG").css({"display": "none"});
    });
    /*//////////// 레이어 팝업 끝 //////////// */





});
