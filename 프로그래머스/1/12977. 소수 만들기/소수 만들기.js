function solution(nums) {
    let answer = 0;
    const check = [];
    for (let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            for(let k = j+1; k < nums.length; k++) {
                check.push(nums[i] + nums[j] + nums[k]);
            }
        }    
    }
    check.forEach((e) => {
        let numCheck = true
        for (let i = 2; i <= Math.sqrt(e); i++) {
             if(e % i === 0) {
                 numCheck = false;
            }
        }
        answer += numCheck ? 1 : 0;
    })
    return answer;
}