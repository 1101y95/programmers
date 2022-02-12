// 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때,
// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라
// 실패율은 다음과 같이 정의한다.
// -스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

function solution(N, stages) {
    var answer = [];
    let failRate= [];

    //스테이지 실패율 구하기
      //스테이지에 도달했으나 클리어하지 못한사람(nonClear)/스테이지에 도달한 사람(clearMan)
      //즉, 해당 스테이지에 있는 사람/ 해당스테이지를 지난 사람
        //(스테이지)%(스테이지+1 이상)
    
    for(let i =N; i>=1; i--){
        let nonClear = stages.filter(e=>i===e).length;
        let clearMan = stages.filter(e=>e>i).length;
        
        let failRateNum = isNaN(nonClear/clearMan) ? 0 : nonClear/clearMan
        
        failRate.push([i,failRateNum])
        
    }
    
    //스테이지 실패율이 높은 순으로 정렬
  for(let i=0; i<failRate.length; i++){
    for(let j=i+1; j<failRate.length; j++){
      let box;
      if(failRate[i][1]<failRate[j][1]){
        box = failRate[j];
        failRate[j]=failRate[i]
        failRate[i] = box
      }
      //같은 실패율일 경우 스테이지가 작은순으로 오게한다
      else if(failRate[i][1]===failRate[j][1]&&failRate[i][0]>failRate[j][0]){
        let box;
        box = failRate[i]
        failRate[i] = failRate[j]
        failRate[j] = box
      }
    }
  }

  for(let i = 0; i<failRate.length; i++){
    answer.push(failRate[i][0])
  }


    
    return answer;
}