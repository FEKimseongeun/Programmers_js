function solution(land) {
    var answer = 0;
    let n=land.length;
    let arr=Array(n).fill(0).map(()=>Array(4).fill(0));

    // 1 2 3 5
    // 0 0 0 0 -> arr[i][j]

    for(let j=0;j<land[0].length;j++){
        arr[0][j]=land[0][j];
    }

    for(let i=1;i<land.length;i++){
        for(let j=0;j<4;j++){
            for(let k=0;k<4;k++ ){
                if(j===k)continue;
                arr[i][j]=Math.max(arr[i][j],arr[i-1][k]+land[i][j]);
            }
        }
    }

    // 1   2  3  5
    // 10 11 12 11 -> 1+5 2+5 3+5 5+5
    // 16 15 13 13

    for(let j=0;j<4;j++){
        answer=Math.max(answer,arr[land.length-1][j]);
    }

    return answer;
}
console.log(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]));