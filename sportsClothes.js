function solution(n, lost, reserve) {
    var answer = 0;
    var exist=0;


    for(let i=0; i<lost.length; i++) {
        for(let j=0; j<reserve.length; j++) {
            if(lost[i]===reserve[j]) {
                exist++;
                lost[i] = -1;
                reserve[j] = -1;
                break;
            }
        }
    }

    for(let i=0; i<lost.length; i++){
        for(let j=0; j<reserve.length; j++){
            if(reserve[j]-1===lost[i] || reserve[j]+1===lost[i]){
                answer++;
                reserve[j]=-1;
                break;
            }
        }
    }

    answer = n - lost.length + exist + answer;

    return answer;
}

function test(){
    var n, lost, reserve;
    n=3;
    lost=[3];
    reserve=[1];
    console.log(solution(n,lost,reserve));
}

test();