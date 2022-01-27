// TODO
//*   ABC 068 B - Break Number

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = parseInt(input, 10);
    if (n == 1) return console.log(1);
    let num = 1;
    while (n >= num * 2) {
        num *= 2;
    }
    console.log(num);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));