

function solution(expression) {
    var answer = 0;
    var separators = ['+', '-', '*'];
    var str=expression.split(new RegExp('[-+*]')); //수식 기호 기준으로 분리하기





    return answer;
}

function test(){
    let expression="100-200*300-500+20";
    console.log(solution(expression));
}

test();