function solution(lines) {
    let arr = new Array(200).fill(0);    
    
    for(let i of lines){
        let start = i[0];  
        let end = i[1];
        
        for(let j = start; j < end; j++){
            arr[j + 100] += 1;
        };
    };
    
    return arr.filter(i => i > 1).length;
}