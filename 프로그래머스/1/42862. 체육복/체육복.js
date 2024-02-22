function solution(n, lost, reserve) {
    let answer = 0;
    const lostCheck = [...lost]
    // 체육복을 도난당하지 않은 학생들
    answer += (n-lost.length);

    // 도난당한 학생이랑 여분을 가지고 온 학생 중복 시 제거 및 추가
    lostCheck.forEach((item, idx) => {
        if(reserve.find(e => e === item)) {
            reserve.splice(reserve.indexOf(item), 1);
            lost.splice(lost.indexOf(item), 1);
            answer += 1;
        }
    })
    
    // 오름차순 정렬
    lost = lost.sort((a, b) => b - a);
    
    // 빌려줄 주 있는 학생 확인 후 추가
    for(let i = 0; i < lost.length; i++) {
        if(reserve.find((item) => item === lost[i]+1)) {
            reserve.splice(reserve.indexOf(lost[i]+1), 1);
            answer += 1;
            
        } else if(reserve.find((item) => item === lost[i]-1)) {
            reserve.splice(reserve.indexOf(lost[i]-1), 1);
            answer += 1;
        }        
    }
    return answer;
}