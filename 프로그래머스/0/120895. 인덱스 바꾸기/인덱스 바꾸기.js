function solution(my_string, num1, num2) {
    let str1 = my_string.slice(num1, num1 + 1);
    let str2 = my_string.slice(num2, num2 + 1);
    let result = [...my_string];
    
    result.splice(num1, 1, str2);
    result.splice(num2, 1, str1);
    
    return result.join("");
}