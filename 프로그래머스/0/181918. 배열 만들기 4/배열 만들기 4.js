function solution(arr) {
    let stk = [];
    let i = 0;
    
    
    while(i < arr.length){
        if(!stk.length){
            stk.push(arr[i])
            i++;
            continue;
        }
        
        if(arr[i] > stk[stk.length - 1]){
            stk.push(arr[i]);
            i++;
        } else {
            stk.pop();
        }
    }
    
    return stk;
}