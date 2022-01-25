function solution(n) {
    var answer = 0;
    
    
    //sqrt함수를 이용해서 
    let a = Math.sqrt(n);
    if(String(a).includes(".")) a = undefined;
    if(a===undefined)return answer = -1;
    //요소+1의 제곱를 반환 받고,
    answer = (a+1)**2;
    //없으면 -1을 반환
   
    
    return answer;
}