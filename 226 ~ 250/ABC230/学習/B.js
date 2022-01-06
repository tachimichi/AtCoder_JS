// TODO
//*   ABC 230 B - Triple Metre

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let str = input.trim();
    let a = '';
    for (let i = 0; i < 10; i++) {
        a += 'oxx';
    }
    console.log(a.includes(str) ? "Yes" : "No");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));