// TODO
//*   ABC 239 A - Horizon

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const num = parseInt(input.trim(), 10);
    const x = num * (12800000 + num);
    const ans = Math.sqrt(x);
    console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));