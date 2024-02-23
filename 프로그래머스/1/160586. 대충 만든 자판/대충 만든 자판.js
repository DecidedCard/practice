function solution(keymap, targets) {
    let answer = [];
    let sum = 0;
    targets.forEach(e => {
        for(let i=0; i<e.length; i++) {
            let min = Infinity;
            keymap.forEach((ele) => {
                let index = ele.indexOf(e[i])
                if(index > -1){
                    min = Math.min(min, index+1)
                }
            })
            sum += min;
        }
        answer.push(sum)
        sum = 0;
    })
    answer = answer.map(e=>{
        if(e == Infinity) {
            e = -1
        }
        return e
    })
    return answer;
}