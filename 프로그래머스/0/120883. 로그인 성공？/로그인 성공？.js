function solution(id_pw, db) {
    for(let data of db){
        if(data[0] === id_pw[0]){
            return data[1] === id_pw[1] ? "login" : "wrong pw";
        }
    };
    
    return "fail";
}