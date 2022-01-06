// TODO
//*   ABC 230 A - AtCoder Quiz 3

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = parseInt(input.trim(), 10);
    console.log(n >= 42 ? "AGC0" + (n + 1) : n >= 10 ? "AGC0" + n : "AGC00" + n);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));