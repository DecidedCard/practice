function solution(s) {

    const brackets = {
        "(": ")",
        "{": "}",
        "[": "]",
    };
    
    function isValid(s) {
        const stack = [];
        for (let char of s){
            if(char in brackets) {
                stack.push(char);
            } else {
                if(stack.length === 0) return false;
                const last = stack.pop();
                if(brackets[last] !== char) return false;
            }
        }
        return stack.length === 0;
    }
    
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        const rotated = s.slice(i) + s.slice(0, i);
        if(isValid(rotated)){
            count ++
        }
    }
    return count;
}