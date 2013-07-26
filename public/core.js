var $ = function (id) {return document.getElementById(id)};
var date = new Date($('date').value);
      
function setDate(b,c,a,e){var d=parseFloat(b.toString()[b.toString().length-1]);if(b>10&&b<21||!d){return e}if(d==1){return c}else{if(d>1&&d<5){return a}else{if(d>4&&d<11){return e}}}};

setInterval(function () {
  var curr = new Date();
  var diff = curr - date;
  
  var sec = Math.floor(diff/1000 % 60);
  var min = Math.floor(diff/1000/60 % 60);
  var hou = Math.floor(diff/1000/60/60 % 24);
  var day = Math.abs(curr.getDate() - date.getDate());
  var mon = Math.abs(curr.getMonth() - date.getMonth());
  var yea = curr.getFullYear() - date.getFullYear();
  
  
  $('yea').innerHTML = yea + ' ' + setDate(yea, 'год', 'года', 'лет') + ', ';
  $('mon').innerHTML = mon + ' ' + setDate(mon, 'месяц', 'месяца', 'месяцев') + ', ';
  $('day').innerHTML = day + ' ' + setDate(day, 'день', 'дня', 'дней') + ', ';
  $('hou').innerHTML = hou + ' ' + setDate(hou, 'час', 'часа', 'часов') + ', ';
  $('min').innerHTML = min + ' ' + setDate(min, 'минуту', 'минуты', 'минут') + ', ';
  $('sec').innerHTML = sec + ' ' + setDate(sec, 'секунду', 'секунды', 'секунд');
}, 1000);

var opacity = 1;
var block = $('block').style;

if (localStorage.read) block.display = 'none';
else {
  var lost = localStorage.lost || 1000 * 60 * 5;
  
  var timer = setInterval(function () {
    var seconds = Math.floor(lost/1000 % 60);
    var minutes = Math.floor(lost/1000/60 % 60);
    if (seconds.toString().length == 1) seconds = '0' + seconds;
    if (minutes.toString().length == 1) minutes = '0' + minutes;
    $('timer').innerHTML = minutes + ':' + seconds;
    lost -= 1000;
    localStorage.lost = lost;
    if (lost <= 0) {
      clearInterval(timer);
      localStorage.read = true;
      localStorage.removeItem('lost');
      timer = setInterval(function () {
        block.opacity = opacity;
        opacity -= 0.02;
        if (!opacity) {
          clearInterval(timer);
          block.display = 'none';
        }
      }, 1000/40);
    }
  }, 1000);
}