//문자열 내 p와 y의 개수

function solution(s){
    /*
    슬래쉬('/')를 사용한 /b/gi 이 부분이 바로 정규표현식 입니다.
    '슬래쉬 사이에 모든(g) 문자를, 대소문자 구분없이(i) '치환 하겠다 가 됩니다.
     */
    var answer = true;
    var p = s.match(/p/gi);
    var y = s.match(/y/gi);

    if(p===null){p=[];}
    if(y===null){y=[];}

    if(p.length!==y.length){answer = false;}
    return answer;
    // console.log(s.match(/p/gi))
    //
    // if ( (s.match(/p/gi).length !== s.match(/y/gi).length) ) { //match메서드는 해당되는게 없으면 null을 반환하기때문에 숫자와 비교될 수 없다.
    //     return false;
    // } else{
    //     return true;
    // }
}

function test(){
    var s="pPoooyY";
    //var s="Pyy";
    console.log(solution(s));
}
test()