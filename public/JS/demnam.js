function startTime() 
{
    // Lấy Object ngày hiện tại
    var today = new Date();

    // Giờ, phút, giây hiện tại
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    // Chuyển đổi sang dạng 01, 02, 03

    s = checkTime(s);

    // Ghi ra trình duyệt
    document.getElementById('gio').innerHTML = h;
    document.getElementById('phut').innerHTML = m;
    document.getElementById('giay').innerHTML = s;

    // Dùng hàm setTimeout để thiết lập gọi lại 0.5 giây / lần
    var t = setTimeout(function() {
        startTime();
    }, 500);
    
}

// Hàm này có tác dụng chuyển những số bé hơn 10 thành dạng 01, 02, 03, ...
function checkTime(i) 
{
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
