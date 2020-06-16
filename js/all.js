// 效果套用元素: $(".result__titleBar__btnBarXS__btn") (手機板的sort按鈕的onclick)
// 用途: 打開手機板sort視窗
function showResult__titleBar__sortXS(){
    event.preventDefault();
    $(".result__titleBar__sortXS").toggleClass("show");
}

function showDetail__reserveBar(){
    event.preventDefault();
    $(".detail__reserveBar").toggleClass("show");
}

