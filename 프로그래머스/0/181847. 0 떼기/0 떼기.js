function solution(n_str) {
    let index = 0;
    return n_str.split("").map((item, idx) => {
        if(item === "0" && !index){
            return "";
        };
        index = idx;
        return item;
    }).join("");
}