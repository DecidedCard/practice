function solution(my_string, s, e) {
    if(s === e){
        return my_string;
    }
    
    const str = my_string.substring(s, e + 1);
    const reverseStr = str.split("").reverse().join("");
    
    return my_string.replace(str, reverseStr);
}