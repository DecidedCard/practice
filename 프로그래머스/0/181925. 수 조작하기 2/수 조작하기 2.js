const operation = {
    "-1" : "w",
    "1" : "s",
    "-10" : "d",
    "10" : "a",
}

function solution(numLog) {
    let result = '';
    
    numLog.reduce((acc, el) => {
        const check = acc - el ? acc - el : el - acc;
        result += operation[`${check}`];
        
        return el;
    })
    
    return result;
}