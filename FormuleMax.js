
function calculate(arr, operator){
    arr = arr.map(v => parseInt(v, 10));
    if (operator === '*') {
        return arr.reduce((acc, cur) => acc * cur);
    }
    else if (operator === '+') {
        return arr.reduce((acc, cur) => acc + cur);
    }
    else {
        return arr.reduce((acc, cur) => acc - cur);
    }
}

function solution(expression){

    const numerical = ['*+-', '*-+', '+*-', '+-*', '-*+', '-+*'];
    let max = 0;
    for (let i = 0; i < 6; i += 1) {
        const op = numerical[i];
        const value = calculate(expression.split(op[2]).map(v => calculate(v.split(op[1]).map(k => calculate(k.split(op[0]), op[0])), op[1])), op[2]);
        if (Math.abs(value) > max) max = Math.abs(value);
    }
    return max;
}
console.log(solution("100-200*300-500+20"));


//https://www.zerocho.com/category/JavaScript/post/5acafb05f24445001b8d796d
/*function solution(expression) {
    var answer = 0;
    var separators = ['+', '-', '*'];
    var nums=expression.split(new RegExp('[-+*]')); //수식 기호 기준으로 분리하기

    return answer;
}

function test(){
    let expression="100-200*300-500+20";
    console.log(solution(expression));
}

test();*/