//프로그래머스 2단계 기능 개발 문제
function solution(progresses, speeds) {
    let answer = [];

    while (progresses.length) {
        while (progresses[0] < 100)
            progresses = progresses.map((v, i) => v + speeds[i]);

        let count = 0;

        for (let i = 0; i < progresses.length; i++) {
            if (progresses[i] < 100)
                break;
            count++;
        }
        progresses.splice(0, count);
        speeds.splice(0, count);
        answer.push(count);
    }

    return answer;
}


console.log(solution([95, 90, 99, 99, 80, 99],[1, 1, 1, 1, 1, 1]));