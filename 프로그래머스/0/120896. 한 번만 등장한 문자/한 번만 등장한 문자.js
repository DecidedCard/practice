function solution(s) {
    const arr = [...new Set([...s].filter((item, index) => s.indexOf(item) !== index))];
    
    return [...s].filter(item => arr.indexOf(item) === -1).sort().join("");
}