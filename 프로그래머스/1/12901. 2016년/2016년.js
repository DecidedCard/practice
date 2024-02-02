function solution(a, b) {
    var answer = '';
    const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const today = new Date(`2016-${a}-${b}`).getDay();
    answer += day[today];
    return answer;
}