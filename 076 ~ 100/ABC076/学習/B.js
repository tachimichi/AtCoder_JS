// TODO
//*   ABC 076 B - Addition and Multiplication

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0].trim(), 10);
    const k = parseInt(input[1].trim(), 10);
    let ans = 1;
    for (let i = 0; i < n; i++) {
        let x = 2 ** i;
        if (x <= k) {
            ans *= 2;
        } else {
            ans += k;
        }
    }
    console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));