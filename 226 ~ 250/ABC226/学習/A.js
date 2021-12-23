// TODO
//*   ABC 226 A - Round decimals

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let num = parseFloat(input.trim(), 10);
    // console.log(num);
    let ans = Math.round(num);
    console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));