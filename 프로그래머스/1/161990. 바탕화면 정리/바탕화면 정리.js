function solution(wallpaper) {
    const answer = [];
    const checkFile = [];
    for(let i = 0; i < wallpaper.length; i++) {
        for(let j = 0; j < wallpaper[i].length; j++) {
            if(wallpaper[i][j] === "#") {
                checkFile.push([i, j]);
            }
        }
    }
    const minX = Math.min(...checkFile.map(item => item[0]))
    const minY = Math.min(...checkFile.map(item => item[1]))
    const maxX = Math.max(...checkFile.map(item => item[0]))
    const maxY = Math.max(...checkFile.map(item => item[1]))
    
    answer.push(minX, minY, maxX+1, maxY+1);
    return answer;
}