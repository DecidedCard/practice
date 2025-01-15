function solution(cipher, code) {
    return [...cipher].reduce((acc, el, index) => (index + 1) % code === 0 ? acc + el : acc, '');
}