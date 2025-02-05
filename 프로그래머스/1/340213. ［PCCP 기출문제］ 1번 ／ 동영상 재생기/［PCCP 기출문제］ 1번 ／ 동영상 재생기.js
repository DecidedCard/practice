function solution(video_len, pos, op_start, op_end, commands) {
    let cur_s = convertSec(pos);
    let end_s = convertSec(video_len);
    let op_start_s = convertSec(op_start);
    let op_end_s = convertSec(op_end);
    
    cur_s = op_skip(cur_s, op_start_s, op_end_s);
    
    for(let command of commands){
        if(command === "next"){
            cur_s = next(cur_s, end_s);
        } else {
            cur_s = prev(cur_s);
        }
        
        cur_s = op_skip(cur_s, op_start_s, op_end_s);
    };
        
    return convertMin(cur_s);
}

function convertSec(time) {
    let [m, s] = time.split(":").map(Number);
    return 60 * m + s;
}

function op_skip(sec, start, end) {
    if(sec >= start && sec <= end){
        return end;
    }
    
    return sec;
}

function next(sec, end) {
    sec = sec + 10;
    if(sec > end){
        return end
    }
    
    return sec
};

function prev(sec) {
    sec = sec - 10;
    if(sec < 0){
        return 0
    }
    
    return sec
};

function convertMin(sec) {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    
    return m + ':' + s;
}