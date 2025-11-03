function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let waiting = truck_weights.reverse();
    let now = [];
    let time = []

    const nowWeight = () => now.reduce((acc, cur) => acc += cur, 0);
    
    while(waiting.length !== 0){
        answer++;
        time = time.map(a => a+1);
        let temp = waiting[waiting.length - 1];
        
        if(nowWeight() + temp <= weight){
            waiting.pop();
            now.push(temp);
            time.push(0);
        }

        for(let i = 0; i < time.length; i++){
            if(time[i] + 1 === bridge_length){
                time.shift();
                now.shift();
            }
        }   
    }
    
    console.log(answer);
    return answer + bridge_length;
}