function solution(keyinput, board) {
    let answer = [0, 0];
    const boardX = (board[0] - 1) / 2;
    const boardY = (board[1] - 1) / 2;
        
    for(let input of keyinput){
        if(input === "up" && boardY > answer[1]){
            answer[1]++
        }
        
        if(input === "down" && -boardY < answer[1]){
            answer[1]--;
        }
        
        if(input === "left" && -boardX < answer[0]){
            answer[0]--;
        }
        
        if(input === "right" && boardX > answer[0]){
            answer[0]++;
        }
    };
    
    return answer;
}