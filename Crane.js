//크레인 인형 뽑기 게임


function solution(board, moves) {
    var arr=[]; //인형쌓아두는 배열
    var answer = 0;
    for(let i=0; i<moves.length; i++){
        for(var k=0;k<board.length;k++){
            if(board[k][moves[i]-1]!==0){
                arr.push(board[k][moves[i]-1]);
                board[k][moves[i]-1]=0;
                if(arr[arr.length-1]===arr[arr.length-2]) {
                    arr.pop();//인형 두개 없애기
                    arr.pop();
                    answer+=2;
                }
                break;
            }
        }
    }
    return answer;
}

function test1(){
    var board=[
        [0,0,0,0,0],
        [0,0,1,0,3],
        [0,2,5,0,1],
        [4,2,4,4,2],
        [3,5,1,3,1]];
    var moves=[1,5,3,5,1,2,1,4];
    console.log(solution(board,moves));

}

test1();


//if(arr.length-1<=0)
//                     return 0;


/*다른 사람 풀이
function solution(board, moves) {

    var count =0;
    var stack = [];

    for(var i=0;i<moves.length;i++){
        var now = moves[i]-1
        for(var j=0;j<board.length;j++){
            if(board[j][now]!=0){
                if(stack[stack.length-1]===board[j][now]){
                    stack.pop();
                    count+=2;
                }
                else{
                    stack.push(board[j][now])
                }
                board[j][now] = 0;
                break;
            }
        }
    }
    console.log(stack)
    return count
}
 */