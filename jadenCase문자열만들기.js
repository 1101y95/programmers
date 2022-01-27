function solution(s) {
    // JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다.
    // 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.
     
     var answer = '';
     
       let sArr = s.split(" ");
     let lastChar = sArr[sArr-1];
     
 for(let i =0; i<sArr.length; i++){
   for(let j=0; j<sArr[i].length; j++){
         if(j===0){answer+=sArr[i][j].toUpperCase();}
         else{answer+=sArr[i][j].toLowerCase();}
   }
     if(i!==sArr.length-1){ answer+=" "; }
 }
     
     
     return answer;
 }