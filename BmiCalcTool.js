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
            var check = CheckChar();
            if(check === false)
            {
                alert("半角数字を入力してください");
                ResetForm();
                return;
            }
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
            ResetForm();
        }
    );

    $(".back-btn").click(
        function(){
            $(".result-modal").fadeOut();
        }
    );
});

function CheckChar()
{
    if(!$(".height-input").val().match(/^([1-9][0-9]*|0)(\.[0-9]+)?$/))
    {
        return false;
    }
    if(!$(".weight-input").val().match(/^([1-9][0-9]*|0)(\.[0-9]+)?$/))
    {
        return false;
    }
};

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
};

function ResetForm()
{
    $(".height-input").val("");
    $(".weight-input").val("");
};