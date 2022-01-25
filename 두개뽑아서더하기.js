function solution(numbers) {
    var answer = [];
    let arr = [];
    
    //for문 2개로 배열의 각 요소(2개)끼리 더한 값을 배열에 넣고
    for(let a in numbers){
        for(let b in numbers){
            if(a!==b){
                let i = numbers[a]+numbers[b];
                arr.push(i);
            }
        }
    }
    //그 배열중에서 중복된 값을 제거하고
    let obj = new Set(arr);
    answer = [...obj];
    //배열을 오름차순으로 정렬한다.
     for(let i = 0; i<answer.length; i++){
    for(let j=0; j<answer.length; j++){
      if(answer[j]>answer[j+1]){
        let box;
        box = answer[j];
        answer[j] = answer[j+1];
        answer[j+1] = box;}
      }}
    return answer;
}