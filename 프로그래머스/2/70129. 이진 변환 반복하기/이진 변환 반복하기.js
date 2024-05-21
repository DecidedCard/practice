function solution(s) {
    let answer = [];
    
    let checkTransformBinary = 0;
    let checkZero = 0;
    let checkString = s;
    
    while(checkString !== "1"){
        const deleteZero = checkString.replace(/0/g,"");
        
        checkZero += checkString.length - deleteZero.length;
        
        checkString = deleteZero.length.toString(2);
        
        checkTransformBinary += 1;
    }
    
    answer.push(checkTransformBinary)
    answer.push(checkZero)
    
    return answer;
}