function solution(arr1, arr2) {
    // 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
    //2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요
        
        var answer = [[]];
        
          //배열의 덧셈을 더할 2차원배열 그릇 만들기
      let line = arr1.length;
      let row = arr1[0].length;
      
      answer = Array.from(Array(line), ()=>Array(row).fill(0))
        
        
        for(let i =0; i<arr1.length; i++){
            for(let j = 0; j<arr1[i].length; j++){
                answer[i][j] = arr1[i][j] + arr2[i][j];
            }
        }
        
        return answer;
    }