//로또의 최고순위와 최저순위

function solution(lottos, win_nums) {
    var answer = [];
    var check_Low =0;
    var check_zero=0;
    var check_Max=0;


    for(let i = 0; i < lottos.length; i++) {
        for(let j = 0; j < win_nums.length; j++) {
            if(win_nums[j] === lottos[i]) check_Low++;
        }
        if(lottos[i] === 0) check_zero++;
    }
    check_Max=check_zero+check_Low;
    switch(check_Max){
        case 0: answer[0]=6; break;
        case 1: answer[0]=6; break;
        case 2: answer[0]=5; break;
        case 3: answer[0]=4; break;
        case 4: answer[0]=3; break;
        case 5: answer[0]=2; break;
        case 6: answer[0]=1; break;
    }
    switch(check_Low){
        case 0: answer[1]=6; break;
        case 1: answer[1]=6; break;
        case 2: answer[1]=5; break;
        case 3: answer[1]=4; break;
        case 4: answer[1]=3; break;
        case 5: answer[1]=2; break;
        case 6: answer[1]=1; break;
    }
    return answer;
}


function test(){
    var lottos=[0, 0, 0, 0, 0, 0];
    var win_nums=[38, 19, 20, 40, 15, 25];
    console.log(solution(lottos,win_nums));

}

test();