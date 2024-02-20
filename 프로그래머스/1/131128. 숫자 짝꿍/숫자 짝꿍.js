// function solution(X, Y) {
//     var answer = '';
//     const xArr = X.split("").forEach((a, b) => b > a ? 1 : -1);
//     const yArr = Y.split("");
//     xArr.forEach((item) => {
//         if(yArr.indexOf(item) !== -1){
//             yArr.splice(yArr.indexOf(item),1)
//             answer += item;
//         }
//     })
//     if (!answer) {
//         answer = "-1";
//     } else if (answer[0] === "0") {
//         answer = "0";
//     }
//     return answer;
// }

function solution(X, Y) {
    var answer = [];
    let x_arr = new Array(10).fill(0)
    let y_arr = new Array(10).fill(0)

    X = X.split('');
    Y = Y.split('')

    for (let i = 0; i < X.length; i++) {
        x_arr[X[i]] += 1;
    }
    for (let i = 0; i < Y.length; i++) {
        y_arr[Y[i]] += 1;
    }

    for(let i = 9; i >= 0; i--) {
        if (x_arr[i] !== 0 && y_arr[i] !== 0) {
            let minCount = Math.min(x_arr[i], y_arr[i]);
            answer.push(String(i).repeat(minCount))
        }
    }
    answer = answer.join('')

    if(answer == '') return '-1'
    if(answer[0] == '0') return '0'

    return answer;
}