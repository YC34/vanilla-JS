// 매개변수 1개
const hi = user => document.write(user+ "님 안녕하세요?") ;
hi("영찬");


// 매개변수 2개

// let sum = function (a,b){
//     return a+b;
//
// };

// let sum = (a,b) => {return a+b};

let sum = (a,b) => a+b;
document.write("두수의 합 : "+sum(10,20));