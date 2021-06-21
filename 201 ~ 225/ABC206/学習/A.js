// TODO
//*   ABC 206 A - Maxi-Buying

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // input = input.trim().split('\n');
    const n = parseInt(input, 10);
    const taxincluded = Math.floor(n * 1.08);
    if (taxincluded < 206) {
        console.log("Yay!");
    } else if (taxincluded == 206) {
        console.log("so-so");
    } else {
        console.log(":(");
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));