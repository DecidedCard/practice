const rspCheck = {
    "2" : "0",
    "0" : "5",
    "5" : "2",
};

function solution(rsp) {
    return rsp.split("").reduce((acc, el) => acc + rspCheck[el], "")
}