function solution(today, terms, privacies) {
    const answer = [];
    for(let i = 0; i < privacies.length; i++) {
        const checkDate = terms.find((item) => item[0] === privacies[i][11]).split(" ")
        const date = privacies[i].split("").splice(0, 10).join("");
        const check = sumDate(date, checkDate[1])
        if(new Date(check) <= new Date(today)){
            answer.push(i+1);
        }
    }
    return answer;
}

function sumDate(date, term){
    let year = Number(date.split(".")[0])
    let month = Number(date.split(".")[1])
    let day = Number(date.split(".")[2])
    let termDay = 28*term
    for(let i = 0; i < termDay; i++) {
        day += 1;
        
        if(day === 29) {
            month += 1;
            day = 1;
        };
        
        if (month === 13) {
            year += 1;
            month = 1;
        };
    }
    return `${year}.${month}.${day}`
}