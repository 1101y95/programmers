function solution(n, m) {
    //    두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
    //    배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
    //    예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다. 
        
        var answer = [];
        
            //n의 약수의 배열
        let nMeaArr=[];
        for(let i=1; i<=n; i++){
            if(n%i===0){nMeaArr.push(i)}
        }
        //m의 약수의 배열
        let mMeaArr=[];
        for(let i=1; i<=m; i++){
            if(m%i===0){mMeaArr.push(i)}
        }
    
        //최대공약수
        let gcdArr = [];
       for(let e of nMeaArr){
           for(let ele of mMeaArr){
               if(e===ele){gcdArr.push(e);}
           }
       }
        let gcd = Math.max(...gcdArr);
        answer.push(gcd);
        
        //최소공배수
      let nAnother = n/gcd;
      let mAnother = m/gcd;
      
      let gcm = nAnother*mAnother*gcd;
      
      answer.push(gcm)
      
      
        return answer;
    }