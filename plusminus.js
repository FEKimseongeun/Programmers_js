//음양 더하기

function solution(absolutes, signs) {
    var sum=0;
    for(let i=0; i<signs.length; i++){
        if(signs[i]===false)
            signs[i]=-1;
        else
            signs[i]=1;
    }
    for(let i=0; i<signs.length; i++){
        sum+=absolutes[i]*signs[i];
    }

    return sum;
}