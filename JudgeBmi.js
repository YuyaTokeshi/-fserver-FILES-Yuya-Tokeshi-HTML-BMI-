// BMI基準リスト
var bmiList = ["18.5","25","30","35","40"];
var figureList = ["痩せ型","普通体重","肥満1度","肥満2度","肥満3度","肥満4度"];

$(function(){

    // フォーム入力後、「計算する」をクリックした時の処理
    $(".calc-btn").click(
        function(){

            // 半角数字が入力されているかを確認
            CheckChar();

            // 半角数字が正常に入力されていれば後続の処理
            $(".result-modal").fadeIn();
            var height = $(".height-input").val() / 100;
            var weight = $(".weight-input").val();
            
            // BMIを計算
            var i = CalcBmi(height, weight);

            // 体重に関するコメント
            BmiComment(i, height, weight);
        }
    );
});

// 半角数字以外が入力されている場合にfalseを返す
function CheckChar()
{
    var check = true;
    if(!$(".height-input").val().match(/^([1-9][0-9]*|0)(\.[0-9]+)?$/))
    {
        check = false;
    }
    if(!$(".weight-input").val().match(/^([1-9][0-9]*|0)(\.[0-9]+)?$/))
    {
        check = false;
    }
    if(check === false)
    {
        alert("半角数字を入力してください");
        ResetForm();
        return;
    }
};

// 身長と体重からBMIと体型を算出
function CalcBmi(height, weight)
{
    var bmi = weight / (height * height);
    var resultBmi = Rounding(bmi);
    $(".bmi-box").text(resultBmi);

    // BMI基準リストと照合し体型を算出
    for(var i = 0; i < bmiList.length; i++)
    {
        if(resultBmi < bmiList[i])
        {
            $(".figure-box").text(figureList[i]);
            return i;
        }
    }
    $(".figure-box").text(figureList[figureList.length-1]);
    return i;
};