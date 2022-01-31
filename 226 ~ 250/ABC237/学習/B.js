// TODO
//*   ABC 237 B - Matrix Transposition

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [h, w] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const k = [];
    for (let i = 1; i <= h; i++) {
        k.push(input[i].trim().split(' ').map(n => parseInt(n, 10)));
    }
    // console.log(k);
    const a = [];
    for (let i = 0; i < w; i++) {
        const b = [];
        for (let j = 0; j < h; j++) {
            b.push(k[j][i]);
        }
        console.log(b.join(' '));
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));