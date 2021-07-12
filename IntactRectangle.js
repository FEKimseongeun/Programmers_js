//가로+세로 -1 - 격자점의 개수

function solution(w, h) {
    var answer = 1;
    let gcd = 0;
    let num = [w,h];

    if(w==h){
        answer=w*h-w;
    }else{
        for(let j = 1; j <= Math.min.apply(null, num); j++) {
            if ((Math.min.apply(null, num)%j == 0) && (Math.max.apply(null, num)%j == 0)) {
                gcd = j }
        }
        answer=w+h-gcd;
        answer=w*h-answer;
    }
    return answer;
}

function test(){
    console.log(solution(8,12));
}

test();

//https://m.blog.naver.com/orbis1020/220664563768