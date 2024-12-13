function solution(num_list) {
    let answer = 0;
    
    num_list.forEach(item => {        
        for(let i = item; i > 1;){
            if(i % 2){
                i = (i - 1) / 2;
                answer += 1;
                continue;
            };
            
            i = i / 2;
            answer += 1;
        };
    });
    
    return answer;
}