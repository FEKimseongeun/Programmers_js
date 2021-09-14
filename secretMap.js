//비밀지도

function solution(n, arr1, arr2) {
    var answer = [];
    let result=[];
    let tempArr1=[];
    let tempArr2=[];

    for(let i=0; i<n; i++){

        let a1_s=arr1[i].toString(2);
        let a2_s=arr2[i].toString(2);


        for(let i=0; i<n-a1_s.length; i++){
            tempArr1.push(0);
        }
        for(let i=0; i<a1_s.length; i++){
            tempArr1.push(a1_s[i]);
        }
        for(let i=0; i<n-a2_s.length; i++){
            tempArr2.push(0);
        }
        for(let i=0; i<a2_s.length; i++){
            tempArr2.push(a2_s[i]);
        }


        for(let i=0; i<n; i++){
            if(tempArr1[i]===tempArr2[i]){
                if(tempArr1[i]==="0") answer.push(" ");
                else answer.push("#");
            }
            else answer.push("#");
        }

        let str = answer.join('');
        result.push(str);
    }
    console.log(tempArr1);
    console.log(tempArr1);
    return result;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])