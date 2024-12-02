function solution(n) {
    let sumNumber = 0;
    
    if(n % 2){
        for (let i = n; i > 0; i -= 2){
            sumNumber += i;
        }
        
    } else {
        for (let i = n; i > 0; i -= 2){
            sumNumber += i * i;
        }
    }
    
    return sumNumber;
}