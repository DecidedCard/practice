function solution(my_string, overwrite_string, s) {
    const overwriteIndex = overwrite_string.length;
    const arrMyString = my_string.split("")
    
    arrMyString.splice(s, overwriteIndex, overwrite_string);
    
    return arrMyString.join("");
}