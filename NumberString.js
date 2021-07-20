function solution(s) {
    var answer = 0;
    var arr = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9,
    };
    var i=0;
    const map1 = new Map();

    for(let j=0; j<arr.length; j++){
        map1.put(arr[j], i++);
    }
    for(let j=0; j<arr.length; j++){
        s=s.replace(arr[j],map1.get(arr[j]).toString());
    }
    answer = parseInt(s);
    return answer;
}

function test(){
    var s="one4seveneight";
    console.log(solution(s));
}

test();