function solution(strArr) {
    return strArr.map((i, idx) => idx % 2 ? i.toUpperCase() : i.toLowerCase());
}