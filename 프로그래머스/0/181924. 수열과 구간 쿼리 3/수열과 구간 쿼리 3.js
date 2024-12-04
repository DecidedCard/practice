function solution(arr, queries) {
    for (let query of queries){
        const i = query[0];
        const j = query[1];
        
        const item1 = arr[i];
        const item2 = arr[j];
        
        arr[i] = item2;
        arr[j] = item1;
    }
    return arr;
}