// TODO
//*   ABC 214 A - New Generation ABC

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // input = input.trim().split('\n');
    const n = parseInt(input.trim(), 10);
    if (n >= 212) {
        console.log(8);
    } else if (n <= 125) {
        console.log(4);
    } else {
        console.log(6);
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));