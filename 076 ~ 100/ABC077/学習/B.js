// TODO
//*   ABC 077 B - Around Square

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // input = input.trim().split('\n');
    const n = parseInt(input.trim(), 10);
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        if (i * i <= n) ans = i * i;
    }
    console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));