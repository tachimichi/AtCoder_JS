// TODO
//*   ABC 142 A - Odds of Oddness

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = parseInt(input, 10);

    let count = 0;
    for (let i = 1; i <= n; i++) {
        if(i % 2 == 1) {
            count++;
        }
    }
    console.log(count/n);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));