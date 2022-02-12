// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후,
// 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(n) {
    var answer = 0;
    
    //n을 3진법으로 풀고
    const result = n.toString(3);
    //그걸 앞뒤 반전하고(String.reverse해보자)
    //근데 reverse는 배열을 반전하는 거니까 먼저 배열로 바꿔줘야함
    const resultArr = result.split("")
    resultArr.reverse();
    //그 수를 10진법으로 표현
    //..하기 전에 일단 배열을 다시 문자열로 바꿔줘야지
     // const result2 = resultArr.join("")
     // answer = parseInt(result2,10)//이거안됨...3진법을 10진법으로 바꾼다는걸 어캐 명시해...
    const r = resultArr.length
     for(let i = r-1; i>=0; i--){
         let x = ((r-1)-i)
         answer+= Number(resultArr[i])*(3**x)
     }
    
    return answer;
}