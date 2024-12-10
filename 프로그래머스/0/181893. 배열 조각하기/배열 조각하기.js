function solution(arr, query) {
    for (let i = 0; i < query.length; i++){
        const idx = query[i];
        if(i % 2){
            arr.splice(0, idx);
        } else {
            arr.splice(idx + 1);
        };
    };
    
    return arr;
}