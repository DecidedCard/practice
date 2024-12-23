function solution(str_list, ex) {
    return str_list.reduce((acc, el) => {
        if(el.includes(ex)){
            return acc;
        }
        return acc + el;
    }, "");
}