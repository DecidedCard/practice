function solution(ineq, eq, n, m) {
   if(ineq === ">"){
        if(eq === "="){
            if(n >= m){
                return 1;
            }
            return 0;
        }
       
       if(n > m){
           return 1;
       }
       
       return 0;
   }
    
    if(eq === "="){
        if(n <= m){
            return 1;
        }
            
        return 0;
    }
       
        if(n < m){
           return 1;
        }
    
        return 0;
}