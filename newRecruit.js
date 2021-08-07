/**
 다른 모든 지원자와 비교했을 때 서류심사 성적과 면접시험 성적 중 적어도
 하나가 다른 지원자보다 떨어지지 않는 자만 선발한다는 원칙을 세웠다.
 즉, 어떤 지원자 A의 성적이 다른 어떤 지원자 B의 성적에 비해 서류 심사 결과와
 면접 성적이 모두 떨어진다면 A는 결코 선발되지 않는다.

 이러한 조건을 만족시키면서, 진영 주식회사가 이번 신규 사원 채용에서 선발할 수 있는
 신입사원의 최대 인원수를 구하는 프로그램을 작성하시오.
 */

/**
 * 첫째 줄에는 테스트 케이스의 개수 T(1 ≤ T ≤ 20)가 주어진다.
 * 각 테스트 케이스의 첫째 줄에 지원자의 숫자 N(1 ≤ N ≤ 100,000)이 주어진다.
 * 둘째 줄부터 N개 줄에는 각각의 지원자의 서류심사 성적, 면접 성적의 순위가 공백을
 * 사이에 두고 한 줄에 주어진다. 두 성적 순위는 모두 1위부터 N위까지 동석차 없이 결정된다고 가정한다.
 * **/

function solution(n, list) {
    let arr = []; //이차원 배열 int형으로 바꿈
    for (i of list) {
        arr.push(i.split(" ").map((el) => parseInt(el)));
    }
    arr.sort(function (a, b) {return a[0] - b[0];}) //오름차순

    let tmp = arr[0][1];
    let count = 1;
    for (let i = 1; i < arr.length; i++) {
        if (tmp > arr[i][1]) {
            tmp = arr[i][1];
            count += 1;
        }
    }

    const readline = require("readline");
    const rl = readline.createInterface({input: process.stdin, output: process.stdout,});
    let input = [];
    rl.on("line", function (line) {
        input.push(line)
    }).on("close", function () {
        let test = parseInt(input[0]);
        let c = 1;
        let n = 0;
        let list = [];
        for (let i = 1; i <= test; i++) {
            n = parseInt(input[c]);
            c += 1;
            for (let j = c; j < c + n; j++) {
                list.push(input[j]);
            }
            solution(n, list);
            c += n;
            list = [];
        }
    });
}

    //출처: https://ghost4551.tistory.com/13 [프론트 개발자들을 위한 티스토리]

