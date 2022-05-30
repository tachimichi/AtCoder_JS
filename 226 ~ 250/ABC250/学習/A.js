// TODO
//*   ABC 250 A - Adjacent Squares

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [h, w] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const [r, c] = input[1].trim().split(' ').map(n => parseInt(n, 10));

    let count = 0;
    if (c != 1) count++;
    if (c != w) count++;
    if (r != 1) count++;
    if (r != h) count++;
    console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));