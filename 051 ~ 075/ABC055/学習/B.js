// TODO
//*   ABC 055 B - Training Camp

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = BigInt(input.trim());
    const mod = 1000000007n;
    let ans = 1n;

    for (let i = 1n; i <= n; i += 1n) {
        // 再帰的にmodを求めていく
        // n! % mod
        ans *= i;
        ans %= mod;
    }
    console.log(ans.toString());
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));