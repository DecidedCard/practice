function solution(l, r) {
    let answer = [];
    
   if(l % 5){
       l += 5 - l % 5
   }
    
    for (let i = l; i <= r; i += 5){
        const arr = [...`${i}`];
        const numberCheck = [];
        
        arr.forEach(item => {
          if(item === '5' || item === '0'){
              numberCheck.push(true);
          } else {
              numberCheck.push(false);
          }
        })
        
        if(numberCheck.indexOf(false) === -1){
            answer.push(i);
        }
    }

    return answer.length ? answer : [-1];
}