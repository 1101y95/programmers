// 게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때,
// 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(board, moves) {
    var answer = 0;
    let craneBox = [];

    //이걸 move의 길이만큼 반복 
    //moves의 요소들. n이라고 하면,
    //board배열의 첫번째 행(인형이있다고 가정할때에서 없으면 그다음행),n번째요소를 craneBox에 넣는다  
    for(let i=0; i<moves.length; i++){
        let row = moves[i]-1
        for(let k=0; k<board.length; k++){
            if(board[k][row]!==0){ //윗칸에 인형이 없으면 인형이 있는 칸까지 가야함
                craneBox.push(board[k][row]);
                //인형을 꺼내고 나면 그 자리는 0이 되야함
                board[k][row] = 0;
                //console.log(craneBox)
                break;//크래인은 하나를 뽑으면 다음으로 넘어가야함
            }       
        }
    }
    //만약 craneBox에 아무것도 없다면
    if(craneBox[0]===undefined){return 0}
 
    let re = craneBox.length
    //연속된 두인형 제거 및 answer+=2;
  for(let k=0; k<re; k++){
   for(let i =0; i<craneBox.length; i++){
    if(craneBox[i]===craneBox[i+1]){
      craneBox.splice(i,2)
      answer+=2;
    } 
  }
}
    
    
    return answer;
}
//  //잘못생각했어...행과 열을 헷갈렸어...
//뭐가 잘못됏는지 모르겠어
//마지막 인형이 추가되는게 아니라 대체가 됨//해결
//1,2번 틀림...
//찾아냄. for문 처음 돌때 craneBox줄어드는 만큼 횟수줄어서... 그거 고정해줘야함