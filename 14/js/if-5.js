    var numOne = prompt("1. 50미만인 숫자를 입력하세요.");
    var numTwo = prompt("2. 50미만인 숫자를 입력하세요.");

    if(numOne !== null && numTwo !== null){
        if(numOne < 50 && numTwo < 50){
            alert("숫자 2개 모두 50 미만입니다.")
        }else {
            alert("조건에 맞지 않는 숫자가 있습니다.")
        }
    }else {
        alert("숫자 2개 중에서 입력이 취소된 숫자가 있습니다.")
    }