function solution(arr) {
    var answer = 0;
    
     let b=0;
    for(let a of arr){
        b += a;
    }
    answer = b/arr.length;
    
    return answer;
}