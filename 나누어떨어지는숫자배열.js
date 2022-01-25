function solution(arr, divisor) {
    var answer = [];
    
    arr.forEach((e)=>{
        if(e % divisor=== 0){answer.push(e);}})
if(answer.length!==0){
    for(let i=0; i<answer.length; i++){
        let a;
            for(let k=i+1; k<answer.length; k++){
              let b;
              if(answer[i]>answer[k]){
              b=answer[k];
              answer[k]=answer[i];
              answer[i]=b;}
              }
        }}
     if(answer.length===0){answer.push(-1);}
return answer;  }