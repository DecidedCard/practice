function solution(array) {
    let result = [];
    let num = 0;
    const map = new Map();
    
    for(let num of array){
        if(map.has(num)){
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        };
    };
    
    map.forEach((value, key) => {
        if(num < value){
            num = value;
            result = [];
            result.push(key)
        } else if (num <= value){
            result.push(key)
        };
    });
    
    return result.length === 1 ? result[0] : -1;
}