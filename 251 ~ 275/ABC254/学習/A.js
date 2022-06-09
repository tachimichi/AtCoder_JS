// TODO
//*   ABC 254 A - Last Two Digits

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = input.trim().split('');
    console.log(n[1] + n[2]);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));