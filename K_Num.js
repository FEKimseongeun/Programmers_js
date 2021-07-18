function solution(array, commands) {
    var answer = [];
    var result=[];
    let k;

    for(let i=0; i<commands.length; i++){
        k=0;
        if(commands[i][0]===commands[i][1]){
            answer[i]=array[commands[i][0]-1];

        }else{
            for(let j=commands[i][0]-1; j<commands[i][1]; j++){
                result[k]= array[j];
                k++;
            }
            result.sort((a,b) => a-b); //?
            answer[i]=result[commands[i][2]-1];
        }

    }
    return answer;
}
function test(){
    var array=[1, 5, 2, 6, 3, 7, 4];
    var commands=[[2, 5, 3], [4, 4, 1], [1, 7, 3]];

    console.log(solution(array, commands));
}

test();