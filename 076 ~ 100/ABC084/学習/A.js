// TODO
//*   ABC 084 A - New Year

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // input = input.trim().split('\n');
    const n = parseInt(input.trim(), 10);
    console.log((24 - n) + 24);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));


