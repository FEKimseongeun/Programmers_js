//신규아이디 추천

function solution(new_id) {
    var answer = '';

    new_id = new_id.toLowerCase()
    var newI = ""

    for(let i=0; i<new_id.length; i++){
        let check = new_id.charCodeAt(i)
        if((check== 45|| check==95 || check==46) || (check>=97 && check<=122) || (check>=48 && check<=57))
            new_id_g+=new_id[i]
    }
    console.log(new_id_g)

    var newI2 = ""

    //step3
    for(let i=0; i<newI.length-1; i++){
        if(newI[i]=='.' && newI[i]==newI[i+1])
            continue
        else
            newI2+=newI[i]
    }
    newI2+=newI[newI.length-1]


    //step4
    if(newI2[0]=='.' && newI2[newI2.length-1]=='.')
        newI2=newI2.substr(1,newI2.length-1)
    if(newI2[0]=='.' && newI2[newI2.length-1]!='.')
        newI2=newI2.substr(1,newI2.length)
    if(newI2[0]!='.' && newI2[newI2.length-1]=='.')
        newI2=newI2.substr(0,newI2.length-1)

    //step5
    if(newI2.length == 0)
        newI2='a'

    //step6
    if(newI2.length>=16){
        newI2=newI2.substr(0,15)
        if(newI2[newI2.length-1]=='.')
            newI2=newI2.substr(0,14)
    }

    //step7
    while(newI2.length<=2){
        newI2+=newI2[newI2.length-1]
    }


    return newI2;
}