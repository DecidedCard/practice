function solution(my_string) {
     
    return [...my_string].filter((i) => Number(i) >= 0).map((i) => Number(i)).sort((a, b) => a - b);
}