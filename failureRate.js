/** 실패율
 *
 실패율은 다음과 같이 정의한다.
 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
 전체 스테이지의 개수 N,
 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때,
 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을
 return 하도록 solution 함수를 완성하라.
 */

function solution(N, stages) {
    var eachS = new Array(N + 1).fill(0);
    stages.forEach( v => eachS[v - 1] += 1);  //각 라운드에서 진행중인 사람의 명수

    var success = eachS[eachS.length - 1]; //마지막 라운드
    var percent = [];

    for (let i = N - 1; i >= 0; i--) {
        success += eachS[i];
        percent.push({ stage: i + 1, perc: eachS[i] / success || 0})
    }

    return percent.sort((a, b) => {
        if (b.perc - a.perc !== 0)
            return b.perc - a.perc; //실패율
        else
            return a.stage - b.stage
    }).map(v => v.stage)

}

function test(){
    var N=5; //확인할 스테이지 수
    var stages=[2, 1, 2, 6, 2, 4, 3, 3]; //총 8명이 도전
    // var N=4;
    // var stages=[4,4,4,4,4];
    console.log(solution(N, stages));
}
test()

/**
 * key, value 값들을 둘다 넣기위한 방법
 * 1. Object.assign(obj, {key3: "value3"});
 * -> Object.assign()메소드는 열거 가능한 모든 고유 특성의 값을 하나 이상의 소스 오브젝트에서
 * 대상 오브젝트로 복사하는 데 사용됩니다. 대상 객체를 반환합니다.
 *
 * 2. push({key: sadasdasdas , value: cacasdsdsa})이용
 * var employees = [];
 * employees.push({id:100,name:'Yashwant',age:30});
 * employees.push({id:200,name:'Mahesh',age:35});
 * */
