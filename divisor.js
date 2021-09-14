//약수의 개수와 덧셈

function solution(left, right) {
    var answer = 0;

    const divisor=Array(1001).fill(0);
    for(let i=1; i<=1000; i++){
        for(let j=1; j<=Math.floor(1000/i); j++){
            divisor[i*j]++;
        }
    }

    for(let i=left; i<=right; i++){
        if(divisor[i] % 2===0)
            answer+=i;
        else
            answer -= i;
    }

    return answer;
}