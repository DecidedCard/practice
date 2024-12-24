function solution(myString) {
    return [...myString].map(i => {
        if(i.charCodeAt() < 108){
            return "l";
        };
        return i;
    }).join("");
}