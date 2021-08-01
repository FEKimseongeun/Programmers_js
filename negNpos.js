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

function test(){
    //var absolutes=[4,7,12];
    //var signs = [true,false,true];
    var absolutes=[1,2,3];
    var signs = [false,false,true];

    console.log(solution(absolutes, signs));
}
test()