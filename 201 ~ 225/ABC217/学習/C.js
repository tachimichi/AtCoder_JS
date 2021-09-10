// TODO
//*   ABC 217 C - Inverse of Permutation

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));

    let t = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        t[a[i] - 1] = i + 1;
    }
    for (let i = 0; i < n; i++) {
        console.log(t[i]);
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));