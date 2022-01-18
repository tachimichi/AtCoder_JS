// TODO
//*   ABC 072 A - Sandglass2

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [x, t] = input.trim().split(' ').map(n => parseInt(n, 10));
    console.log(x > t ? x - t : 0);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));