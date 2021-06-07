// TODO
//*   ABC 204 B - Nuts

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));

    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (a[i] > 10) {
            sum += a[i] - 10;
        }
    }
    console.log(sum);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));