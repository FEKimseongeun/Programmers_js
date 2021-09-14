//소수만들기

function prime_(num) {
    for (let i = 2; i * i < num+1; i++) {
        if (num % i === 0) {
            return 0;
        }
    }
    return 1;
}

function solution(nums) {
    var answer = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let num = nums[i] + nums[j] + nums[k];
                if (prime_(num)) {
                    answer++;
                }
            }
        }
    }

    return answer;
}

function test() {
    const nums = [1, 2, 7, 6, 4];
    console.log(solution(nums));
}

test();