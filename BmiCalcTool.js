// BMI基準リスト
var bmiList = ["18.5","25","30","35","40"];
var figureList = ["痩せ型","普通体重","肥満1度","肥満2度","肥満3度","肥満4度"];

$(function(){

    // 「計算する」をクリックすると入力フォームを表示
    $(".start-btn").click(
        function(){
            $(".calc-modal").fadeIn();
        }
    );

    // フォーム入力後、「計算する」をクリックした時の処理
    $(".calc-btn").click(
        function(){

            // 半角数字が入力されているかを確認
            var check = CheckChar();
            if(check === false)
            {
                alert("半角数字を入力してください");
                ResetForm();
                return;
            }

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

// 半角数字以外が入力されている場合にfalseを返す
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
    return figureList.length-1;
};

// 体重に関するコメントを表示
function BmiComment(i, height, weight)
{
    // 痩せ型だった場合
    if(i === 0)
    {
        var overWeight = bmiList[0] * height * height;
        $(".comment").text("あと" + Rounding(overWeight - weight) + "kg太ったら" + figureList[i + 1]);
    }

    // 肥満4度だった場合
    else if(i === figureList.length-1)
    {
        var underWeight = bmiList[figureList.length-2] * height * height;
        $(".comment").text("あと" + Rounding(weight - underWeight) + "kg痩せたら" + figureList[i - 1]);
    }

    // それ以外の体型の場合
    else
    {
        var overWeight = bmiList[i] * height * height;
        var underWeight = bmiList[i - 1] * height * height;
        $(".comment").html("あと" + Rounding(overWeight - weight) + "kg太ったら" + figureList[i + 1] + "<br>" + 
        "あと" + Rounding(weight - underWeight) + "kg痩せたら" + figureList[i - 1]);
    }
    return;
}

// フォームの入力内容をリセットする
function ResetForm()
{
    $(".height-input").val("");
    $(".weight-input").val("");
    $(".comment").val("");
};

// 小数点第1位まで四捨五入する
function Rounding(number)
{
    return Math.round(number * 10) / 10;
}