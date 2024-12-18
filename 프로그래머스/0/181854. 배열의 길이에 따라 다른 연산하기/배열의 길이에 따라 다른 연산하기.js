function solution(arr, n) {
    if(arr.length % 2){
        return arr.map((item, idx) => {
            if(!(idx % 2)) return item + n;
            return item;
        })
    }
    
    return arr.map((item, idx) => {
        if(idx % 2) return item + n;
        return item;
    })
}