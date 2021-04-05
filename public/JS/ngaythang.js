function start() 
{
var d = new Date();
var n = d.getDate();
var t=d.getUTCMonth();
var y=d.getFullYear();
document.getElementById('ngay').innerHTML = n;
document.getElementById('thang').innerHTML = t;
document.getElementById('nam').innerHTML = y;
 
}
