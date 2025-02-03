function solution(common) {
    let check = [];
    
    for(let i = 0; i < common.length - 1; i++){
        check.push(common[i + 1] - common[i]);        
    };
    
    check = [...new Set(check)];
    
    return check.length === 1 ? common[common.length - 1] + check[0] : common[common.length - 1] * (check[check.length - 1] / check[check.length - 2]);
}