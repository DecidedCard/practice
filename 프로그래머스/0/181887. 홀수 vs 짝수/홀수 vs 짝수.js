function solution(num_list) {
    let even = 0;
    let odd = 0;
    
    for(let i = 0; i < num_list.length; i++){
        if((i + 1) % 2){
            odd += num_list[i];
        } else {
            even += num_list[i];
        }
    }
        
    return Math.max(even, odd);
}