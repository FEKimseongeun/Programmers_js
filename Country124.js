function solution(n) {
        let answer = '';
        let num=[1,2,4]; //나중에 answer에 의해 문자로

        while (n > 0) {
            let i = (n-1) % 3;
            answer = num[i] + answer;
            n = Math.floor(n-1 / 3);
        }
        return answer;
}
function test(){
    console.log(solution(5));
}
test();

//
//
//1+i*3 => 1
//2+i*3 => 2
//3+i*3 => 3
//3으로 나누면 그 몫이나 나머지의 124 숫자가 그대로 붙으면 됨
//만약 몫이 소수로 나오면 그 뒤에것을 자르면 됨


//다른 사람코드
/*
1. 
function change124(n) {
  return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}

2.
let $,solution=$=n=>n-->0?$(n/3^0)+(1<<(n)%3):''
*/