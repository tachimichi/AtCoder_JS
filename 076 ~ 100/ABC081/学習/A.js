// TODO
//*   ABC 081 A - Placing Marbles

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // input = input.trim().split('\n');
    const a = input.trim().split('').map(n => parseInt(n, 10));
    // console.log(a);
    let count = 0;
    for (let i = 0; i < 3; i++) {
        if (a[i] == 1) count++;
    }
    console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));


