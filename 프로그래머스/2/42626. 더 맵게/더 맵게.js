function solution(scoville, K) {
    let answer = 0;
    scoville.sort((a, b) => a - b);
    const newScoville = [];
    
    let index1 = 0;
    let index2 = 0; 

    const findMin = () =>{
        const a = scoville[index1]
        const b = newScoville[index2]

        if (a === undefined) return newScoville[index2++];
        if (b === undefined) return scoville[index1++];
        return a < b ? scoville[index1++] : newScoville[index2++];
    }

    while(scoville.length - index1 + newScoville.length - index2 > 0){

        const min1 = findMin()
        if (min1 >= K) return answer

        const min2 = findMin()
        if(min2 === undefined) return -1

        const mix = min1+min2*2
        newScoville.push(mix)
        answer++
    }
}