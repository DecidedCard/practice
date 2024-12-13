function solution(myString, pat) {
    if(myString.length < pat.length){
        return 0;
    };
    
    for(let i = 0; i < myString.length - pat.length + 1; i++){
        const str = myString.substring(i, i + pat.length)
        if(str.toUpperCase() === pat.toUpperCase()) return 1;
    }
    
    return 0;
}