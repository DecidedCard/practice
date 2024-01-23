function solution(s) {
    var answer = 0;
    const check = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    check.forEach((e, i) => {
        s = s.split(e).join(i);
    })
    answer = Number(s);
    return answer;
}