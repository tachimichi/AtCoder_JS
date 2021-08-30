// TODO
//*   ABC 215 C - One More aab aba baa

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split(' ');
    let a = input[0].trim().split('');
    const n = parseInt(input[1], 10);
    a.sort();
    // console.log(a, n);
    let perm = permutation(a, a.length);
    // console.log(perm);
    for (let i = 0; i < perm.length; i++) {
        perm[i] = perm[i].join('');
    }
    // console.log(perm);
    perm = new Set(perm);
    // console.log(perm);
    // console.log(perm);
    let count = 0;
    perm.forEach((element) => {
        count++;
        if (count == n) {
            return console.log(element);
        }
    });



    function permutation(nums, k) {
        let ans = [];
        if (nums.length < k) return [];

        if (k === 1) {
            for (let i = 0; i < nums.length; i++) {
                ans[i] = [nums[i]];
            }
        } else {
            for (let i = 0; i < nums.length; i++) {
                let parts = nums.slice(0);
                parts.splice(i, 1)[0];
                let row = permutation(parts, k - 1);

                for (let j = 0; j < row.length; j++) {
                    ans.push([nums[i]].concat(row[j]));
                }
            }
        }
        return ans;
        // let words = new Set(ans);
        // return words;
    }

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}
