function solution(arr) {
    var answer = [];
    let a = Math.min(...arr)
    // console.log(a);
  //배열을 내림차순으로 정렬하고
  let arrNum = arr.findIndex((e)=>e===a)
  // console.log(arrNum);
  // console.log(arr)
  
  arr.splice(arrNum,1);
  // console.log(arr)
  
  //순서는 그대로여야함.
    //pop으로 마지막 수=가장작은 수를 없애고
    //배열을 반환하되, 빈배열이면 -1을 채워 반환
    if(arr[0]===undefined) answer.push(-1);
    else answer = arr;
    
    return answer;
}