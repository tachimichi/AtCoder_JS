// TODO
//*   ABC 248 B - Slimes

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let [a, b, k] = input.trim().split(' ').map(n => parseInt(n, 10));
    let count = 0;
    if (a >= b) return console.log(count);
    while (true) {
        count++;
        a *= k;
        if (a >= b) return console.log(count);
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));