function solution(flo) {        
    return Number.isInteger(flo) ? flo : Math.ceil(flo) - 1;
}