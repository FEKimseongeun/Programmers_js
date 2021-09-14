//두 개 뽑아서 더하기

function solution(d, budget) {
    var answer = 0;
    d.sort(function(a,b){ return a-b; });
    for(var i=0, max=d.length; i<max; i++){
        budget -= d[i];
        if(budget<0)
        {
            break;
        }
        answer++;
    }
    return answer;
}