$(function(){

    // 「計算する」をクリックすると入力フォームを表示
    $(".start-btn").click(
        function(){
            $(".calc-modal").fadeIn();
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