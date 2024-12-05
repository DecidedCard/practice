function solution(arr, queries) {
    queries.forEach(([s, e, k]) => {
        const arrCheck = arr.slice(s, e + 1);
        
        arrCheck.forEach((_, idx) => {
            if((idx + s) % k === 0){
                arr[idx + s] += 1;
            }
        }) 
    })    
    
    return arr;
}