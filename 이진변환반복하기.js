// 0과 1로 이루어진 문자열 s가 매개변수로 주어집니다.
// s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.
//   0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.
//     1. x의 모든 0을 제거합니다.
//     2. x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.

function solution(s) {
    var answer = [];
    
    
    let removeZero = 0;
    let change = 0;
    
    if(Number(s)===1){ return [0,0] }
    let sLength = s.length;
    for(let i=0; i<sLength; i++){
      console.log(s)
      let arr =[]
        if(s==="1"){break;}
        else{
            for(el of s){
            if(el === "0"){removeZero++;}
            else{arr.push(el)}
        }//제거된 0의 갯수 카운트
          
          let strLength = arr.length;
        s = strLength.toString(2);
        change++;  
        }
    }
    
  answer.push(change,removeZero)
    
    return answer;
}