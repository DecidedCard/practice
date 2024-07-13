function solution(progresses, speeds) {
    let answer = [];
    let complete = 0;
    let date = 0;
    
    for(let i = 0; i < progresses.length; i++){
        const remain = 100 - progresses[i];
        if(date < Math.ceil(remain / speeds[i])){
            answer.push(1);
            date = Math.ceil(remain / speeds[i]);
            complete += 1;
        }else{
            answer[complete - 1] += 1;
        };
        
    }
    return answer;
}