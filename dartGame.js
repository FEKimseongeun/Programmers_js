//[1차] 다트게임

function solution(dartResult) {
    var answer = 0;
    let first=[];
    let second=[];
    let third=[];
    let number=[];
    let number_2=[];

    let score=['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let count=0;
    for(let i=0; i<dartResult.length; i++){
        do {
            if(count==0)
                first.push(dartResult[i]); //first =1,D
            else if(count==1)
                second.push(dartResult[i]); //second =2,S
            else{
                third.push(dartResult[i]);
                if(i==dartResult.length-1)
                    break;
            }

            if(!isNaN(dartResult[i]) && !isNaN(dartResult[i])){

            }
            i++; //i=4


        }while(isNaN(dartResult[i])); //i=4
        count++; //count =1, i=2
        if(i!==dartResult.length-1)
            i--; //i=1
    }
    number.push(first, second, third);

    for(let i=0; i<3; i++){

        if(number[i][1]==='0'){
            number_2[i]=number[i][0]+number[i][1];
        }
        else number_2[i]=number[i][0];

        number[i].forEach(n=>{
            if(n.includes('D')){
                number_2[i]=Math.pow(number_2[i]*1, 2);
            }
            else if(n.includes('T')){
                number_2[i]=Math.pow(number_2[i]*1, 3);
            }

            if(n.includes('*')){
                number_2[i]=number_2[i]*2;
                if(i!=0){
                    number_2[i-1]=number_2[i-1]*2;
                }
            }
            if(n.includes('#')){
                number_2[i]=number_2[i]*(-1);
            }
        });
    }

    number_2.forEach( item => {
        answer += item*1;
    });
    return answer;
}

console.log(solution("1D2S10T")); //129 --> //9