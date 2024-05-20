function solution(s) {
    var answer = '';
    const resultArr = [];
    const stringArr = s.split(" ");
    stringArr.map(item => {
        if(item !== ""){
            item = item.toLowerCase();
            const itemArr = item.split("");
            itemArr[0] = itemArr[0].toUpperCase();
            resultArr.push(itemArr.join(""));
            return;
        }
        resultArr.push("");
        return;
    })
    answer = resultArr.join(" ");
    return answer;
}