function solution(numlist, n) {
    let arr = [];
    numlist.sort((a, b) => a - b);
    
    let new_numlist = numlist.map((a) => {
      return Math.abs(a - n);
    });
        
    let min_idx = -1;
    
    for (let i = 0; i < numlist.length; i++) {
        min_idx = new_numlist.lastIndexOf(Math.min(...new_numlist));
        new_numlist[min_idx] = Infinity;
        arr.push(numlist[min_idx]);
    }
    
    return arr;
}