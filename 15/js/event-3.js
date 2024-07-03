
// 방법 1.
// var changeBtn = document.querySelector('#change');
// changeBtn.onclick = changeColor;
//
// function changeColor() {
//   document.querySelector("p").style.color = "#f00";
// };
//
// // 방법 2. 변수 선언 없이.
// document.querySelector('#change').onclick = changeColor;


// 방법3 . 익명 함수로.
// document.querySelector('#change').onclick  = function () {
//     document.querySelector("p").style.color = "#f00";
// };

// 방법 4. 화살표 함수
document.querySelector('#change').onclick =
    () => document.querySelector("p").style.color = "#f00";
