function solution(num_list) {
    return num_list.length >= 11 ? num_list.reduce((acc, el) => acc + el) : num_list.reduce((acc, el) => acc * el)};