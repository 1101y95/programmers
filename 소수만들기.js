// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
// 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(nums) {
    var answer;
    
    //nums에서 서로 다른 3개의 수 고르기(중복된수 제거하기)
    let numsObj = new Set(nums);
    let numsArr = [...numsObj];
    
    
//이걸 경우의 수 만큼 반복하기

let n = [];
    
    //3개의 수 더하기
    for(let i=0; i<numsArr.length; i++){
        for(let j=i+1; j<numsArr.length; j++){
            for(let k=j+1; k<numsArr.length; k++){
                n.push(numsArr[i]+numsArr[j]+numsArr[k])
            }
        }
    }
    //합한 수가 소수인지 체크하기
    answer = n.filter((e)=>{
        let sosu=[];
        for(let i=1; i<e/2; i++){
            if(e%i===0){
                sosu.push(i)
            }
        }
        if(sosu.length===1){
            return e
        }
    })

    
    return answer.length;
}