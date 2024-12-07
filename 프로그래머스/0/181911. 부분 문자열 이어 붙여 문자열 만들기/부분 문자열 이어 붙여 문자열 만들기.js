function solution(my_strings, parts) {
    let answer = '';
    
    parts.map(([s, e], idx) => {
        const str = my_strings[idx].substring(s, e + 1);
        
        answer += str;
    });
    
    return answer;
}