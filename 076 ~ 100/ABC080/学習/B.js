// TODO
//*   ABC 080 B - Harshad Number

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // input = input.trim().split('\n');
    const n = input.trim().split(' ').map(n => parseInt(n, 10));
    const a = input.trim().split('').map(n => parseInt(n, 10));
    // console.log(n);
    let x = 0;
    for (let i = 0; i < a.length; i++) {
        x += a[i];
    }
    // console.log(x);
    console.log(n % x == 0 ? "Yes" : "No");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));