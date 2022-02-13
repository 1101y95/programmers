function solution(n, arr1, arr2) {
    var answer;
    
    //먼저 배열을 이진수로 바꾼다음
    let arr1Two=[];
    let arr2Two=[];
    
    for(el of arr1){
        let a = el.toString(2)
        let aa = a.padStart(n,"0")//근데 앞자리가 비면 안되니까 padStart써주고
        arr1Two.push(aa)
    }
    for(el of arr2){
        let a = el.toString(2)
        let aa = a.padStart(n,"0")
        arr2Two.push(aa)
    }
  
  console.log(arr2Two)
  
    //각요소를 비교해서 두배열 모두의 값이 0인 부분은 공백 아니면 #
    
  let secretFinal = []
    
    for(let i=0; i<n; i++){
        let secret = [];
       for(let k=0; k<n; k++){
           if(arr1Two[i][k]==="0"&&arr2Two[i][k]==="0"){
              secret.push(" ") 
           }else{
               secret.push("#")
           }
       }
      secret = secret.join("")
      secretFinal.push(secret)
    }
    
    //n의 배열로 출력
    answer = secretFinal
    
    return answer;
}

console.log(solution(5,[9, 20, 28, 18, 11],[30, 1, 21, 17, 28]))