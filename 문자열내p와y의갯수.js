function solution(s){
    var answer = true;
        let p=0;
        let y=0;

   for(let e of s){
       if(e === e.toLowerCase()){
          e = e.toUpperCase();
          if(e==="P")p++;
          else if(e==="Y")y++; 
       } else{
           if(e==="P")p++;
          else if(e==="Y")y++;
       }
   } 
    
    if(p!==y)answer = false;

    return answer;
}