function solution(want, number, discount) {
    let answer = 0;
    
    for(let i = 0; i < discount.length; i++) {
        let checkNumber = [...number];
        
        for(let j = i; j < i+10; j++) {
            const checkDiscount = want.indexOf(discount[j]);
            
            if(checkDiscount !== -1) {
                checkNumber[checkDiscount] -= 1;
            }
        }
        const check = checkNumber.filter((item) => item === 0);
        
        if(checkNumber.length === check.length) {
            answer++
        }
    }
    return answer;
}