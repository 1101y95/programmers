function solution(n) {
    var answer = [];
    
   let a = String(n).split("");
    a.reverse();
    
    a.forEach((e)=>{
        answer.push(Number(e))
    })
    
    return answer;
}