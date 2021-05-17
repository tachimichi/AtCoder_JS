// TODO
//*   ABC 130 A - Rounding

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [x, a] = input.trim().split(' ').map(n => parseInt(n, 10));
    if(x < a) {
        console.log(0);
    } else {
        console.log(10);
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));