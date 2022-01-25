function solution(s) {
    var answer = '';
    
    if(s.length%2===0){
        let evenCenter = s.length /2;
        answer = s[evenCenter-1]+s[evenCenter];
    }else{
        let oddCenter = Math.ceil(s.length /2);
        answer = s[oddCenter-1]
    }
    
    
    
    
    
    
    return answer;
}