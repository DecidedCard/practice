// 최대공약수 구하는 함수
const gcd = (a, b) => {
    if(a % b === 0) return b;
    return gcd(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
    const numer = numer1 * denom2 + numer2 * denom1; // 분모
    const denom = denom1 * denom2;                   // 분자
    const getGcd = gcd(numer, denom);                // 분모, 분자의 최대공약수
    
    return [numer / getGcd, denom / getGcd]; 
}