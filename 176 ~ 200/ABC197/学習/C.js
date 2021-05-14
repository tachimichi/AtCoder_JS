// TODO
//*   ABC 197 C - ORXOR

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let a = input[1].split(' ').map(n => parseInt(n, 10));

    let min = (1 << 30);
    // console.log(Math.pow(2, 30));
    // console.log(min);

    for(let i = 0; i < (1 << (n-1)); i++) {
        let x = 0;
        let y = 0;
        for(let j = 0; j < n; j++) {
            y |= a[j];
            if ((i / (1 << j)) % 2 == 1) {
                x ^= y;
                y = 0;
            }
        }
        x ^= y;
        min = Math.min(min, x);
    }
    console.log(min);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));