function solution(strArr) {
    let answer = 0;
    const map = new Map();
    
    strArr.map(item => {
        if(!map.has(item.length)){
            map.set(item.length, 1);
        } else {
            const value = map.get(item.length);
            map.set(item.length, value + 1);
        }
    });
    
    map.forEach(item => {
        if (answer < item) answer = item;
    });
    
    return answer;
}