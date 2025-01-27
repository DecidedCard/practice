const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

function solution(a, b) {
    let n = b / gcd(a, b);
    let checkArr = [];
    let dis = 2;

    while(n >= 2){
        if(n % dis === 0){
            checkArr.push(dis);
            n = n / dis;
        }
        else dis++;
    };
    
    return [...new Set(checkArr)].filter(i => i !== 2 && i !== 5).length ? 2 : 1
}