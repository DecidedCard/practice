function solution(num_list) {
    const len = num_list.length;
    const num1 = num_list[len - 1];
    const num2 = num_list[len - 2];
    
    if(num1 > num2){
        num_list.push(num1 - num2);
    } else {
        num_list.push(num1 * 2);
    }
    
    return num_list;
}