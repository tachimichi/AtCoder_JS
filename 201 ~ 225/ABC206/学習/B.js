// TODO
//*   ABC 206 B - Savings

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
        if (sum >= n) {
            return console.log(i);
        }
    }

}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));