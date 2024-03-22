function solution(id_list, report, k) {
    let answer = [];
    
    report = [...new Set(report)];
    
    let report_obj = {};
    id_list.forEach((item) => {
        report_obj[item] = 0;
    })
    
    report.forEach((e) => {
        let [id, opponent] = e.split(' ');
        report_obj[opponent] += 1
    })
    
    let mail_obj = {};
    report.forEach((e)=> {
        let [id, opponent] = e.split(' ');
        
        if(report_obj[opponent] >= k){
            if(!mail_obj[id]){
                mail_obj[id] = 0;
            }
            mail_obj[id] += 1;
        }
    })
    
    id_list.forEach((userId) => {
        answer.push(mail_obj[userId] || 0);
    })
    
    return answer;
}