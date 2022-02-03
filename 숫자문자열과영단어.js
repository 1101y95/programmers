// 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다.
// s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요

function solution(s) {
    var answer = 0;
    
    let strObj={
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }
    //객체를 배열로 바꾸고
    let strArr = Object.entries(strObj);
    //키값에 해당하는 배열의 요소와 일치하는 문자열을 숫자로 바꾸고
    //근데 replace는 한번밖에 안바꿔줌...다시 돌려야함...
    while(isNaN(s)){
    for(let i=0; i<strArr.length; i++){
        s = s.replace(strArr[i][0],strArr[i][1])
    }
    }
    //그 숫자를 리턴한다
    answer = Number(s)
    return answer;
}