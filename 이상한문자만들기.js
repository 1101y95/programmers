function solution(s) {
    var answer = '';
    let aa; 
    let b=[];
    
    aa = s.split(" ");
    
  
  for(let i=0; i<aa.length; i++){
    for(let k=0; k<aa[i].length; k++){
      if(k%2===1){
        answer += (aa[i][k]).toLowerCase();
        }
      else{
        answer += (aa[i][k]).toUpperCase();
        }      
    } b.push(answer); answer=""; 
    

  }
    answer="";
    answer = b.join(" ");
  return answer
}