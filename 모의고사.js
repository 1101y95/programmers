function solution(answers) {
    //     1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때,
    //     가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
        
        var answer = [];
        
        //1번은 12345로 찍고 5개마다 반복
        let student1=[];
        let pattern1 = [1,2,3,4,5]
        //2번은 21232425로 찍고 8개 마다 반복
        let student2=[];
        let pattern2 = [2,1,2,3,2,4,2,5]
        //3번은 3311224455로 찍는다 10개마다 반복
        let student3=[];
        let pattern3 = [3,3,1,1,2,2,4,4,5,5]
        
        //answers의 길이만큼 배열을 만들고 규칙적으로 채워준다
         //일단 규칙으로 배열을 만들고
          //그 규칙으로 되어 있는 배열을 answers의 길이에 맞게 다시 만들고, flat으로 평탄화한다.
        
        //학생 1번의 정답표
        for(let i=0; i<answers.length/5; i++){
            student1.push([pattern1]);
        }
        for(let i=0; i<answers.length%5; i++){
            student1.push(pattern1[i]);
        }
        student1 = student1.flat(2);
        
        //학생 2번의 정답표
        for(let i=0; i<answers.length/8; i++){
            student2.push([pattern2]);
        }
        for(let i=0; i<answers.length%8; i++){
            student2.push(pattern2[i]);
        }
        student2 = student2.flat(2);
        
        //학생 3번의 정답표
        for(let i=0; i<answers.length/10; i++){
            student3.push([pattern3]);
        }
        for(let i=0; i<answers.length%10; i++){
            student3.push(pattern3[i]);
        }
        student3 = student3.flat(2);
        
        
        
        
        //for문으로 점수를 체크한다.
        
        let score1 =0;
        let score2 =0;
        let score3 =0;
        
        for(let i=0; i<answers.length; i++){
            if(answers[i]===student1[i]) score1++;
            if(answers[i]===student2[i]) score2++;
            if(answers[i]===student3[i]) score3++;
        }
        
        //제일 높은 점수를 체크한다
        let highest = Math.max(score1,score2,score3);
        
        
        //가장 높은 점수를 가진 사람을 반환하되, 동점이면 오름차순으로 반환한다.
        if(highest === score1) answer.push(1);
        if(highest === score2) answer.push(2);
        if(highest === score3) answer.push(3);
        
        return answer;
    }