// TODO
//*   ABC 087 B - Coins

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const a = parseInt(input[0], 10);
    const b = parseInt(input[1], 10);
    const c = parseInt(input[2], 10);
    const x = parseInt(input[3], 10);
    console.log(a, b, c, x);

    let count = 0;
    for (let i = 0; i <= a; i++) {
        for (let j = 0; j <= b; j++) {
            for (let k = 0; k <= c; k++) {
                // console.log(i, j, k, i + j + k);
                // console.log(500 * i + 100 * j + 50 * k);
                if ((500 * i + 100 * j + 50 * k) == x) count++;
            }
        }
    }
    console.log(count);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));