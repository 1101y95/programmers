function solution(num) {
    var answer = 0;
    let count = 500;
    
     function odd(number){
            return number*3+1
        }
        function even(number){
            return number/2
        }
        
   
    if(num===1) {answer = 0; return answer;} 
    
    while(num>1||count>-1){
       
        if(num%2===0) num = even(num);
        else num = odd(num);
        
        count--;
        if(num===1||count<0)break;
    }
    
    answer = 500 - count;
    if(count<=0) answer = -1;
     
    
    
    return answer;
}