function solution(code) {
    let ret = '';
    let mode = 0;
    
    for (let i = 0; i < code.length; i++){
        if(code[i] === "1"){
            mode = Number(!mode);
            continue;
        }
        
        if(mode === 0){
            ret += i%2 === 0 ? code[i] : "";
        } else {
            ret += i%2 !== 0 ? code[i] : "";
        }
    }
    
    return ret ? ret : "EMPTY";
}