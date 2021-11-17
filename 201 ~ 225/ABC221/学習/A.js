// TODO
//*   ABC 221 A - Seismic magnitude scales

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b] = input.trim().split(' ').map(n => parseInt(n, 10));
    const n = a - b;
    // console.log(n);
    console.log(32 ** n);

}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));