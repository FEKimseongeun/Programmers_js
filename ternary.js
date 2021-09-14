function solution(n) {
    let result = "";
    let answer = 0;
    while(n/3) {
        result += n%3;
        n = Math.floor(n/3);

    }

    for(let i = 0; i< result.length; i++) {
        answer += result[result.length-1-i]*Math.pow(3, i)
    }
    return answer;
}