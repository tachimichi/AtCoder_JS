// TODO
//*   ABC 253 A - Median?

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const a = input.trim().split(' ').map(n => parseInt(n, 10));
    let b = input.trim().split(' ').map(n => parseInt(n, 10));
    b.sort((a, b) => a - b);
    if (a[1] == b[1]) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));