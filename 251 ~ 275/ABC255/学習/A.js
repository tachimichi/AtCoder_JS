// TODO
//*   ABC 255 A - You should output ARC, though this is ABC.

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [r, c] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const a = [];
    const t = input[1].trim().split(' ').map(n => parseInt(n, 10));
    const s = input[2].trim().split(' ').map(n => parseInt(n, 10));
    a.push(t);
    a.push(s);

    console.log(a[r - 1][c - 1]);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));