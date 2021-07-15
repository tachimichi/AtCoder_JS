// TODO
//*   ABC 088 A - Infinite Coins

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = parseInt(input[1], 10);

    const amari = n % 500;
    if (amari <= a) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));


