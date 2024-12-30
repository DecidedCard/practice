function solution(board, k) {
    let answer = 0;
    
    for(let i = 0; i <= Math.min(k, board.length - 1); i++){
        for(let j = 0; i + j <= k && j < board[i].length; j++){
            answer += board[i][j];
        };
    };
    
    return answer;
}