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

var images = ["images/bistu_pic_1.jpg", "images/bistu_pic_2.jpg", "images/bistu_pic_3.jpg"];
var currentIndex = 0;

function showPic(index) {
    var img = document.getElementById('placeholder');
    img.src = images[index];
}

function prevPic() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showPic(currentIndex);
}

function nextPic() {
    currentIndex = (currentIndex + 1) % images.length;
    showPic(currentIndex);
}

window.onload = function() {
    showPic(currentIndex);
    document.getElementById('prev').onclick = prevPic;
    document.getElementById('next').onclick = nextPic;
};

// 点击目录按钮展开目录
function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('menu-open')) {
        menu.classList.remove('menu-open');
        menu.classList.add('menu-closed');
    } else {
        menu.classList.remove('menu-closed');
        menu.classList.add('menu-open');
    }
}

// 点击目录以外的地方收起目录
window.onclick = function(event) {
    var menu = document.getElementById('menu');
    if (!event.target.matches('.nav2') && menu.classList.contains('menu-open')) {
        menu.classList.remove('menu-open');
        menu.classList.add('menu-closed');
    }
}