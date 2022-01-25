function solution(s) {
    var answer = true;

    if(s.length===6||s.length===4){
    
        if(s.length===4||s.length===8){
            
            if(isNaN(s)===false) answer = true;
            else answer = false;
            
            if(s.includes("e")) answer = false;
            
            }      
        }else answer = false;
        
    return answer;
}