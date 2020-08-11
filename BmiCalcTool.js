var bmiList = ["18.5","25","30","35","40"];
var figureList = ["痩せ型","普通体重","肥満1度","肥満2度","肥満3度","肥満4度"];

$(function(){
    $(".start-btn").hover(
        function(){
            $(".start-btn").css("opacity","1");
        },
        function(){
            $(".start-btn").css("opacity","0.8");
        }
    );

    $(".start-btn").click(
        function(){
            $(".calc-modal").fadeIn();
        }
    );

    $(".calc-btn").click(
        function(){
            $(".result-modal").fadeIn();
            var height = $(".height-input").val() / 100;
            var weight = $(".weight-input").val();
            CalcBmi(height, weight);
        }
    );

    $(".close-modal").click(
        function(){
            $(".calc-modal").fadeOut();
            $(".result-modal").fadeOut();
            $(".height-input").val("");
            $(".weight-input").val("");
        }
    );

    $(".back-btn").click(
        function(){
            $(".result-modal").fadeOut();
        }
    );
});

function CalcBmi(height, weight)
{
    var bmi = weight / (height * height);
    var resultBmi = Math.round(bmi * 100) / 100
    $(".bmi-box").text(resultBmi);

    for(var i = 0; i < bmiList.length; i++)
    {
        if(resultBmi < bmiList[i])
        {
            $(".figure-box").text(figureList[i]);
            return;
        }
        $(".figure-box").text(figureList[figureList.length-1]);
    }
}