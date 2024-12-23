function solution(date1, date2) {
    const checkDate1 = new Date(...date1);
    const checkDate2 = new Date(...date2);
    
    return checkDate1 < checkDate2 ? 1 : 0;
}