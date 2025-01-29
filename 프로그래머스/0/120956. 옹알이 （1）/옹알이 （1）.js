function solution(babbling) {
    return babbling.reduce((acc, el) => {
        const a = el.replace("aya", "1").replace("ye", "1").replace("woo", "1").replace("ma", "1");
        
        return [...a].filter(i => i !== "1").length ? acc : acc + 1;
    }, 0);
};