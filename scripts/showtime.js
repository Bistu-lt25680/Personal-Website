function ShowTime() {
    var current_date = new Date();
    var year = current_date.getFullYear();
    var month = current_date.getMonth() + 1;
    var dates = current_date.getDate();
    var today = current_date.getDay();
    var hour = current_date.getHours();
    var minute = current_date.getMinutes();
    var second = current_date.getSeconds();
    var days = ["日", "一", "二", "三", "四", "五", "六"];
    return "今天是<span class='red'>"+year+"</span>年</span><span class='red'>" + month + "</span>月<span class='red'>" + dates + "</span>号,星期<span class='red'>" + days[today] + ",</span>现在是<span class='red'>" + hour + "</span>点<span class='red'>" + minute + "</span>分<span class='red'>" + second + "</span>秒";
}

setInterval(function () {
    document.getElementById("time").innerHTML = ShowTime();
}, 1000);
