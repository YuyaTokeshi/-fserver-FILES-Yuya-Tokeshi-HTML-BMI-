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