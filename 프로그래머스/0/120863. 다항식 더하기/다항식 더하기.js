function solution(polynomial) {
    let x = 0;
    let num = 0;
    const arr = polynomial.split(" ");
    
    for(let i of arr){
        if(i.includes('x')){
            x += Number(i.slice(0, i.length - 1)) ? Number(i.slice(0, i.length - 1)) : 1;
        }
        
        if(Number(i)){
            num += Number(i);
        }
    }
            
    return x ? num ? `${x !== 1 ? x : ""}x + ${num}` : `${x !== 1 ? x : ""}x` : `${num}`
}