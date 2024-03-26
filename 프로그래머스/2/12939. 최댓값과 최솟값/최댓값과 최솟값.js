function solution(s) {
    let answer = '';
    
    const arrS = s.split(' ');
    
    const minS = Math.min(...arrS);
    const maxS = Math.max(...arrS);
    
    answer = `${minS} ${maxS}`
    
    return answer;
}