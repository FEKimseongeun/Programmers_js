var board = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2],[3,0],[3,1],[3,2]];
function solution(numbers, hand) {
    var answer = '';

    var leftPos = 10;
    var rightPos = 12; //#
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
            answer += "L";
            leftPos = numbers[i];
        } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            answer += "R";
            rightPos = numbers[i];
        } else {
            if (numbers[i] === 0) numbers[i] = 11;
            let ll = distance(numbers[i], leftPos);
            let rr = distance(numbers[i], rightPos);
            if (ll > rr) {
                answer += "R";
                rightPos = numbers[i];
            } else if (ll < rr) {
                answer += "L";
                leftPos = numbers[i];
            } else {
                if (hand ==="right") {
                    answer += "R";
                    rightPos = numbers[i];
                } else{
                    answer += "L";
                    leftPos = numbers[i];
                }
            }
        }
    } return answer;
}

function distance(numbers, shape){
    var xx = Math.abs((board[shape - 1][0]) - (board[numbers - 1][0]));
    var yy = Math.abs((board[shape - 1][1]) - (board[numbers - 1][1]));
    return (xx + yy);
}

function test(){
    var numbers=[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
    var hand="left";

    console.log(solution(numbers,hand));
}

test();