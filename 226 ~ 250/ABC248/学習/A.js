// TODO
//*   ABC 248 A - Lacked Number

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = input.trim().split('').map(n => parseInt(n, 10));
    for (let i = 0; i < 10; i++) {
        if (!n.includes(i)) return console.log(i);
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));