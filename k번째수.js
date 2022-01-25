function solution(array, commands) {
    var answer = [];
    let i=0;
    let j=0;
    let k=0;
  let sor;

    for(let a in commands){
        for(let b in commands[a]){
            if(b==="0"){i=commands[a][b]}
            else if(b==="1"){j=commands[a][b]}
            else if(b==="2"){k=commands[a][b]}
        }//i,j,k의 값을 받아옴
      
      let sor = array.slice(i-1,j)
      console.log(sor)
      //자름
      
      
      //오름차순으로 정렬
   for(let x = 0; x<sor.length; x++){
     for(let y =0; y<sor.length; y++){
       if(sor[y]>sor[x]){
         let v =0;
            v=sor[x]; sor[x]=sor[y]; sor[y]=v;  
  }
     }
       }console.log(sor)
     answer.push(sor[k-1]);
      
        
    }
    
    return answer;
}