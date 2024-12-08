function solution(my_string, m, c) {
    let strArr = [];
    let i = 0;
    
    while(i < my_string.length){
        let arr = [];
        
        for (let j = 0; j < m; j++){
            arr.push(my_string[i]);
            i++;
        }
                
        strArr.push([...arr]);
        arr[0] = [];
    }

    return strArr.map(item => item[c - 1]).join("");
}