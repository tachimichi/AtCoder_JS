// TODO
//*   ABC 048 A - AtCoder *** Contest

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, c] = input.trim().split(' ');
    console.log(a[0] + b[0] + c[0]);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));