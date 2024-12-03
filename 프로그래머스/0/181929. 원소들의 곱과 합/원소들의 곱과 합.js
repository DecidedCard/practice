function solution(num_list) {
    const check1 = num_list.reduce((acc, el) => {
        return acc * el;
    });
    
    const check2 = Math.pow(num_list.reduce((acc,el) => {
        return acc + el;  
    }),2);
    
    return check1 < check2 ? 1 : 0;
}