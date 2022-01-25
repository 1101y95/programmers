function solution(n)
{
    var answer = 0;

    let arrN = String(n).split("");
    
    for(let i=0; i<arrN.length; i++){
        
        answer+=Number(arrN[i]);
        
    }

    return answer;
}