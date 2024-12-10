function solution(arr) {
    let indexArr = [];
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 2){
            indexArr.push(i);
        }
    };
    
    if(!indexArr.length){
        return [-1];
    };
    
    const startIndex = Math.min(...indexArr);
    const endIndex = Math.max(...indexArr);
    
    return arr.slice(startIndex, endIndex + 1);
}