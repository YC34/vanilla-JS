function factorial(num){
    let result = 1
    if(num === 0){
        return result;
    }else{
        for (let i = 1; i < num+1 ; i++) {
            result *=i;
        }
        return result;
    }
}

console.log(factorial(12));
console.log(factorial(6));
console.log(factorial(3));
console.log(factorial(0));
