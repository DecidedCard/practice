function solution(n) {
    return [...`${n}`].reduce((acc, el) => acc + Number(el), 0);
}