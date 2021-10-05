$(document).ready(function () {
    $("input:radio[name=clock_type]").click(function () {
        if ($("input[name=clock_type]:checked").val() == "timer") {
            $(".stopwatch").css("display", "none");
            $(".timer").css("display", "block");
        } else if ($("input[name=clock_type]:checked").val() == "stopwatch") {
            $(".timer").css("display", "none");
            $(".stopwatch").css("display", "block");
        }
    });
});

$("#t_start_btn").click(function () {
    var time = $("#timer_setup").val() * 60;

    if (time != 0) {
        var count_down = setInterval(function () {
            var min = Math.floor(time / 60);
            var sec = time - (min * 60);

            if (min < 10) { min = "0" + min; }
            if (sec < 10) { sec = "0" + sec; }
            $("#timer_display").text(min + ':' + sec);
            document.title = min + ':' + sec;

            time--;

            if (time < 0) {
                clearInterval(count_down);
                alert('Time Over');
                document.title = 'Clock';
                $("#timer_setup").val(0);
            }
        }, 1000);
    }

    $("#t_clear_btn").click(function () {
        clearInterval(count_down);
        $("#timer_display").text('00:00');
        document.title = 'Clock';
        $("#timer_setup").val(0);
    });
});

var sw_init_time = 0;
$("#sw_start_btn").click(function () {
    var pause = false;

    var count_up = setInterval(function () {
        if (!pause) {
            var min = Math.floor(sw_init_time / 60);
            var sec = sw_init_time - (min * 60);

            if (min < 10) { min = "0" + min; }
            if (sec < 10) { sec = "0" + sec; }
            $("#stopwatch_display").text(min + ':' + sec);

            sw_init_time++;
        }
    }, 1000);

    $("#sw_record_btn").click(function () {
        var current = $("#stopwatch_display").text();
        $("#record_list").append('<li style="padding:0; margin: 0;height: 40px;list-style-type: none; font-size: 20px;">' + current + "</li>");
    });

    $("#sw_stop_btn").click(function () {
        pause = true;
    });

    $("#sw_clear_btn").click(function () {
        clearInterval(count_up);
        sw_init_time = 0
        $("#stopwatch_display").text('00:00');
    });
});