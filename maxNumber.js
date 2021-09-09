function solution(numbers) {
    var answer = '';

    numbers = numbers.map(e => String(e));

    //0보다 작으면 a가 b보다 앞에 오도록
    //0보다 클경우 -> 만약 0을 반환하면? -> 순서변경
   numbers.sort((a, b) => { //1,3
        if (a+b > b+a) { //13 31
            return -1;
        } else if (a+b < b+a) {
            return 1; // -> 3,1
        }
    })


    /*
    *
 arr.sort(function(a, b)  {
  if(a > b) return 1;
  if(a === b) return 0;
  if(a < b) return -1;
});*/

    numbers.map(e => answer += e);
    if (Number(answer) === 0) {
        answer = '0';
    }
    return answer;
}

console.log(solution([3, 30, 34, 5, 9]));