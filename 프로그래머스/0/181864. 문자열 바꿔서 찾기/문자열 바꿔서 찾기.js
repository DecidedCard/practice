function solution(myString, pat) {
    const changeString = myString.split("").map(i => {
        if(i === "A"){
            return "B";
        } else {
            return "A";
        };
    }).join("");
        
    return changeString.includes(pat) ? 1 : 0;
}