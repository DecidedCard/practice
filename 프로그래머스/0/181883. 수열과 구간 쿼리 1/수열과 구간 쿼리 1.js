function solution(arr, queries) {
    for (let [s, e] of queries){
        let slice = arr.slice(s, e + 1).map(item => {
            return item + 1;
        });
        
        arr.splice(s, e - s + 1, ...slice);
    };
    
    return arr;
}