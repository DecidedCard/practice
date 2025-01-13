function solution(s) {
    let i = 0;
    return s.split(" ").reduce((acc, el) => {
        if(el === "Z"){
            return acc - i;
        }
        i = Number(el)
        return acc + i
    }, 0);
}