function solution(phone_number) {
    var answer = '';
    let a =[];
    a  = phone_number.split("");
    
    for(let i =0; i<(a.length); i++){
        if(a.length-i>4){
            answer+="*"
        }else{
            
            answer+=a[i];
        }
    }
    
    return answer;
}