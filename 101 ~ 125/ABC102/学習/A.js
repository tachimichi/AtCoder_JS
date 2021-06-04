// TODO
//*   ABC 102 A - Multiple of 2 and N

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = parseInt(input, 10);
    if (n % 2 == 0) {
        console.log(n);
    } else {
        console.log(n * 2);
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));