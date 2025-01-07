// 倒计时

let inputTime = + new Date('2026-1-1 00:00:00');
let day = document.querySelector('.day');
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
countDown();
setInterval(countDown, 1000);
function countDown() {
  let nowTime = +new Date();
  let times = (inputTime - nowTime) / 1000;
  let d = parseInt(times / 60 / 60 / 24);
  d = d < 10 ? '0' + d : d;
  let h = parseInt(times / 60 / 60 % 24);
  h = h < 10 ? '0' + h : h;
  let m = parseInt(times / 60 % 60);
  m = m < 10 ? '0' + m : m;
  let s = parseInt(times % 60);
  s = s < 10 ? '0' + s : s;
  day.innerHTML = d;
  hour.innerHTML = h;
  minute.innerHTML = m;
  second.innerHTML = s;
  // console.log(d + ":" + h + ":" + m + ":" + s);
}
document.querySelector('.box').addEventListener('click', function () {
  console.log('点了也没有效果哦')
})
document.querySelector('.btn').addEventListener('click', function () {
  let nowTime = +new Date();
  if (inputTime - nowTime > 0) {
    console.log('还没到时间哦');
  } else {
    console.log('哈哈哈哈元旦快乐');
  }
  setTimeout(function () {
    console.log('等待半秒钟跳转');
    location.href = './yh/index.html';
  }, 500);

})