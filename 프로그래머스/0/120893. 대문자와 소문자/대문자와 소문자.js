function solution(my_string) {
    return [...my_string].map(i => i === i.toLowerCase() ? i.toUpperCase() : i.toLowerCase()).join("");
}