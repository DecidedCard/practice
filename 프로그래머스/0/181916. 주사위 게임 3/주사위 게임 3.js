function solution(a, b, c, d) {
    const arr = [a, b, c, d];
    const maxNum = Math.max(...arr);
    const minNum = Math.min(...arr);
    
    if(maxNum === minNum){
        return 1111 * maxNum;
    } else {
        const arrCheck1 = [];
        const arrCheck2 = [];
        
        for (let num of arr){
            if(maxNum === num)arrCheck1.push(num);
            if(minNum === num)arrCheck2.push(num);
        }
        
        console.log(arrCheck1, arrCheck2);
        
        if(arrCheck1.length === 3){
            return (10 * arrCheck1[0] + arrCheck2[0]) ** 2;
        }
        
        if(arrCheck2.length === 3){
            return (10 * arrCheck2[0] + arrCheck1[0]) ** 2;
        }
        
        if(arrCheck1.length === 2 && arrCheck2.length === 2){
            return (arrCheck1[0] + arrCheck2[0]) * Math.abs(arrCheck1[0] - arrCheck2[0]);
        }
        
        if(arrCheck1.length === 2){
            const item = arr.filter((item) => arrCheck1[0] !== item && arrCheck2[0] !== item);
            
            return arrCheck2[0] * item[0];
        }
        
         if(arrCheck2.length === 2){
            const item = arr.filter((item) => arrCheck1[0] !== item && arrCheck2[0] !== item);
             
            return arrCheck1[0] * item[0];
        }
        
        const threeCheck = new Set(arr).size
        if(arrCheck1.length === 1 && arrCheck2.length === 1 && threeCheck === 3){
            return arrCheck1[0] * arrCheck2[0];
        }
        
        return minNum
    }
}