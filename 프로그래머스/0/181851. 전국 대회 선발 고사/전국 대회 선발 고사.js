function solution(rank, attendance) {
    let checkRank = rank.filter((_, idx) => attendance[idx])
    
    const [a, b, c] = checkRank.sort((a, b) => a - b);
    
    return 10000 * rank.indexOf(a) + 100 * rank.indexOf(b) + rank.indexOf(c);
}