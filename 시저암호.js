function solution(s, n) {
    // 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
    // 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
    // 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
      
      var answer = '';
      
      let upperABC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
      let lowerABC = upperABC.map((e)=>e.toLowerCase());
      
      let strArr = s.split("");
      
      // strArr.forEach((e,i)=>{
      //     if(e===e.toUpperCase()){
      //       let changeABCIndex = upperABC.findIndex(e)+n;
      //       if(25>=changeABCIndex){strArr[i] = upperABC[changeABCIndex]}
      //       else{strArr[i] = upperABC[changeABCIndex-25]}
      //     }
      //     else{
      //         let changeABCIndex = lowerABC.findIndex(e)+n;
      //         if(25>=changeABCIndex){strArr[i] = lowerABC[changeABCIndex]}
      //         else{strArr[i] = lowerABC[changeABCIndex-25]}
      //     }
      //     answer+=strArr[i];
      // })<<< 왜 안되는지 모르겠다
      
      let numArr =[];
      for(let e of strArr){
          numArr.push(e.charCodeAt());
      }
  
    numArr.forEach((e,i)=>{      
        
        //공백은 제외해야함
        if(e!==32) {
      //아스키코드값에 따라 대문자와 소문자로 나눈후
          if(e>64&&e<91){
            let changeABCIndex = e + n; 
            //n값을 더한수가 91을 넘으면 25를 빼준다
            if(90>=changeABCIndex){e = changeABCIndex}
            else{e = changeABCIndex-26;}
          }
      //아스키코드값에 따라 대문자와 소문자로 나눈후
          else{
              let changeABCIndex = e + n;
            //n값을 더한수가 91을 넘으면 25를 빼준다
            if(122>=changeABCIndex){e = changeABCIndex}
            else{e = changeABCIndex-26 }
          }
            answer+=String.fromCharCode(e)
        }else{ answer+=" "}
      
      })
      
      return answer;
  }