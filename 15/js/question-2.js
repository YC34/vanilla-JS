function calcChange(payment, cost){
    let _50000 = 50000;
    let _10000 = 10000;
    let _5000 = 5000;
    let _1000 = 1000;
    let result = 0;
    let change = payment - cost;
    // console.log(change);
    if(change >0){
        console.log("50,000원 "+ Math.floor(change /_50000) + "장");
        result = change % _50000;
        console.log("10,000원 "+ Math.floor(result/_10000)+ "장");
        result = result % _10000
        console.log("10,000원 "+ Math.floor(result/_5000)+ "장");
        result = result % _5000
        console.log("1000원 "+ Math.floor(result/_1000)+ "장");
        result = result % _1000

    }else{
        console.log("지불금액이 물건 가격보다 작습니다.")
    }
    return result ;
}

calcChange(100000, 33000);
console.log('');
calcChange(500000,378000);
// console.log('');
// calcChange(10000,200000);