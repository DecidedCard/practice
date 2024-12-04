const convert = {
    "1" : "w",
    "-1" : "s",
    "10" : "d",
    "-10" : "a",
}

function solution(numLog) {
    let result = '';
    
    numLog.reduce((acc, el) => {
        result += convert[`${el - acc}`];
        
        return el;
    })
    
    return result;
}