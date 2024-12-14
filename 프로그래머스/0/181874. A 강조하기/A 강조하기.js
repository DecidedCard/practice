function solution(myString) {
    return [...myString].map(i => i === 'a' || i === "A" ? i.toUpperCase() : i.toLowerCase()).join("");
}