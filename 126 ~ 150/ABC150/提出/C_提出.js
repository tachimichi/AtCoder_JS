// TODO
//*   ABC 150 C - Count Order

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const p = input[1].split(' ').map((n) => parseInt(n, 10));
    const q = input[2].split(' ').map((n) => parseInt(n, 10));
    //* ソート（昇順）
    let t = [...p].sort((a, b) => a - b);
    //* ----------------------------------------------------------
    let a = permutation(t, t.length);

    let arr = [];
    for (let i = 0; i < a.length; i++) {
        if(a[i].toString() == p.toString()) arr.push(i+1);
        if(a[i].toString() == q.toString()) arr.push(i+1);
    }
    console.log(Math.abs(arr[0] - arr[1]));
}

function permutation(nums, k) {
    let ans = [];
    if (nums.length < k) return [];

    if(k === 1) {
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
