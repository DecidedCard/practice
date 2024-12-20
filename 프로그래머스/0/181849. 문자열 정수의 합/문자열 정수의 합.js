function solution(num_str) {
    return [...num_str].reduce((acc, el) => Number(acc) + Number(el));
}