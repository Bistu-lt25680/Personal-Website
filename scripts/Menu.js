/*
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
/*
window.onclick = function(event) {
    var menu = document.getElementById('menu');
    if (!event.target.matches('.nav2') && menu.classList.contains('menu-open')) {
        menu.classList.remove('menu-open');
        menu.classList.add('menu-closed');
    }
}

*/

//获取坐标
document.getElementById('school-map').addEventListener('click', function(event) {
    const img = event.target;
    const rect = img.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(`X: ${x}, Y: ${y}`);
});


function showInfo(title, text) {
    document.getElementById('infoTitle').innerText = title;
    document.getElementById('infoText').innerText = text;
    document.getElementById('infoPanel').classList.add('open');
}

function hideInfo() {
    document.getElementById('infoPanel').classList.remove('open');
}

// 阻止点击信息面板时关闭面板
document.getElementById('infoPanel').addEventListener('click', function(event) {
    event.stopPropagation();
});
