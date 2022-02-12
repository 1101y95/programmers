function solution(n) {
    var answer = 0;
// 이렇게 하면 피보나치수가 담을 수 있는 수를 초과할때 NaN이 나옴    
    //     //입력된 수n, n번째 피보나치 수를 구하고
    //     let fiboArr=[1,1];
    //     for(let i=2; i<n; i++){
    //         fiboArr[i] = fiboArr[i-1] + fiboArr[i-2];
    //     }

    //     //n번째 피보나치 수 % 1234567를 리턴
    //     answer = fiboArr[n-1] % 1234567; 
    
//따라서 나눗셈의 분배법칙을 이용해 처음부터 숫자를 작게 해야함.
     //한번에 구하려면
        //(F(n)%1234567) = F(n-1)%1234567 + F(n-2)%1234567로 해야함
    let fiboArr=[1,1];
    for(let i=2; i<n; i++){
        fiboArr[i] = fiboArr[i-1]%1234567 + fiboArr[i-2]%1234567;
    }
    
    answer = fiboArr[n-1]%1234567;
    
    return answer;
}