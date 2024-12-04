function solution(arr, queries) {
    let result = [];
    
    queries.forEach(([s, e, k]) => {
        const item = arr.slice(s, e+1);
        const filter = item.filter(item => item > k);
        
        if(filter.length){
            const check = Math.min(...item.filter(item => item > k));
            result.push(check);
        } else {
            result.push(-1);
        }
    })
    
    return result;
}