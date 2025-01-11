function factorial(n){
    return n ? n * factorial(n - 1) : 1;
};

function solution(n) {
    for(let i = 1; i <= 10; i++){
        if(factorial(i) > n) return i - 1;
        if(factorial(i) === n) return i;
    };
};