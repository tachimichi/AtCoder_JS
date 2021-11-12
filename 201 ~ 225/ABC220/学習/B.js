// TODO
//*   ABC 220 B - Base K

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const k = parseInt(input[0].trim(), 10);
    const [a, b] = input[1].trim().split(' ').map(n => parseInt(n, k));

    // console.log(a, b);
    console.log(a * b);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));