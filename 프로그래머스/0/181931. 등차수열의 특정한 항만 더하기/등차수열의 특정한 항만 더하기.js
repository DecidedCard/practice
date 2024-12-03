function solution(a, d, included) {
    let number = a;
    let result = 0;
    
    included.map((item) => {
        if(item){
            result += number;
        }
        
         number += d;
    });
    
    return result;
}