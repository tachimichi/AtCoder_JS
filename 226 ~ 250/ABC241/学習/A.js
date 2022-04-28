// TODO
//*   ABC 241 A - Digit Machine

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const a = input.trim().split(' ').map(n => parseInt(n, 10));
    let n = 0;
    for (let i = 0; i < 3; i++) {
        n = a[n];
        // console.log(n);
    }
    console.log(n);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));