function solution(board) {
    let answer = 0;
    let mine = [];
    
    const unSafety = ([x, y]) => {
        [x, y] = [x-1, y-1];
        for(let i = x; i < x + 3; i++){
            for(let j = y; j < y + 3; j++){
                if(i >= 0 && i < board.length && j >= 0 && j < board.length){
                    board[i][j] = 1;
                }
            }
        }
    };
    
    board.forEach((i, x) => {
        i.forEach((j, y) => {
            if(j === 1){
                mine.push([x, y]);
            }
        });
    });
    
    mine.forEach(i => unSafety(i));
        
    return board.reduce((acc, el) => {
        const safe = el.filter(i => i === 0);
        return acc + safe.length;
    },0);
}