function solution(survey, choices) {
    var answer = '';

    let score = {
        '1' : 3,
        '2' : 2,
        '3' : 1,
        '4' : 0,
        '5' : 1,
        '6' : 2,
        '7' : 3,
    }
    
    let mbti = {
        'R' : 0,
        'T' : 0,
        'C' : 0,
        'F' : 0,
        'J' : 0,
        'M' : 0,
        'A' : 0, 
        'N' : 0,
    }    

    for(let i=0; i<survey.length; i++) {
        if(survey[i][0] === 'R' || survey[i][0] === 'C' || survey[i][0] === 'J' || survey[i][0] === 'A') {
            if(choices[i] > 4) {
                mbti[survey[i][1]] += score[choices[i]]
            } else {
                mbti[survey[i][0]] += score[choices[i]]
            }
        }
        else {
            if(choices[i] < 4) {
                mbti[survey[i][0]] += score[choices[i]]
            } else {
                mbti[survey[i][1]] += score[choices[i]]
            }
        }
    }


    let RT;
    if (mbti['R'] !== mbti['T']) {
        RT = mbti['R'] > mbti['T'] ? 'R' : 'T';
    } else {
        RT = 'R' < 'T' ? 'R' : 'T';
    }
    answer += RT

    let CF;
    if (mbti['C'] !== mbti['F']) {
        CF = mbti['C'] > mbti['F'] ? 'C' : 'F';
    } else {
        CF = 'C' < 'F' ? 'C' : 'F';
    }
    answer += CF

    let JM;
    if (mbti['J'] !== mbti['M']) {
        JM = mbti['J'] > mbti['M'] ? 'J' : 'M';
    } else {
        JM = 'J' < 'M' ? 'J' : 'M';
    }
    answer += JM

    let AN;
    if (mbti['A'] !== mbti['N']) {
        AN = mbti['A'] > mbti['N'] ? 'A' : 'N';
    } else {
        AN = 'A' < 'N' ? 'A' : 'N';
    }
    answer += AN



    return answer;
}