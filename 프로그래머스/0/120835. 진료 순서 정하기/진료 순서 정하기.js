function solution(emergency) {
    let sortArr = [...emergency].sort((a, b) => b - a);
        
    return emergency.map(item => sortArr.indexOf(item) + 1);
}