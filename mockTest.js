/**
 *모의고사
 * @param answers
 * @returns {[]}
 *
 * 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
 */

function solution(answers) {
    var answer = [];
    var one = [1, 2, 3, 4, 5];
    var two=[2, 1, 2, 3, 2, 4, 2, 5];
    var three=[3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count=[0,0,0];

    for(let i=0; i<answers.length; i++){
        if(one[i % 5] === answers[i]){
            count[0]++;
        }
        if(two[i % 8] === answers[i]){
            count[1]++;
        }
        if(three[i % 10] === answers[i]){
            count[2]++;
        }
    }

    let Max=Math.max(count[0], count[1], count[2]);
    for (let i = 0; i < 3; i++) {
        if (count[i] === Max) {
            answer.push(i+1);
        }
    }
    return answer.sort((a,b) => a-b);
}

function test(){
    var answers=[1,3,2,4,2];
    console.log(solution(answers));
}
test();