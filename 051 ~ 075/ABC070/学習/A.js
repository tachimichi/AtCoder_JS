// TODO
//*   ABC 070 A - Palindromic Number

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const a = parseInt(input.trim(), 10);
    const b = parseInt(input.trim().split('').reverse().join(''), 10);
    console.log(a == b ? "Yes" : "No");
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));