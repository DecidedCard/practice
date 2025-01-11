function solution(box, n) {    
    return box.reduce((acc, el) => acc *= Math.floor(el / n), 1)
}