function solution(arr) {
    let answer = 0;    
    
    while(true){
        const changeArr = arr.map(item => {
            if(item >= 50 && item % 2 === 0) return item / 2;
            if(item < 50 && item % 2) return item * 2 + 1;
            return item;
        });
        
        if(JSON.stringify(arr) === JSON.stringify(changeArr)) break;
        
        arr = changeArr;
        answer += 1;
    }
    
    return answer;
}