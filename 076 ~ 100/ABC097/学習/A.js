// TODO
//*   ABC 097 A - Colorful Transceivers 

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, c, d] = input.trim().split(' ').map(n => parseInt(n, 10));

    if (Math.abs(c - a) <= d) return console.log("Yes");

    if (Math.abs(a - b) <= d && Math.abs(b - c) <= d) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
