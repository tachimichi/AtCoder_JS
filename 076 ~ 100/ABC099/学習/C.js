// TODO
//*   ABC 099 C - Strange Bank

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let n = parseInt(input, 10);
    const dp = [...Array(n + 1).fill(null)].map((_, i) => i);
    //* 連続した値の配列（隣接リストの応用）
    const dpdp = new Array(n + 1).fill().map((_, i) => i);

    // console.log(dp);
    // console.log(dpdp);

    for (let i = 0; i < n; i++) {
        let j = 0;
        let num = 0;
        while (i + num <= n) {
            j++;
            num = 6 ** j;
            //* ストップ条件を明示
            if (i + num <= n) {
                dp[i + num] = Math.min(dp[i + num], dp[i] + 1);
            } else {
                break;
            }
        }

        j = 0;
        num = 0;
        while (i + num <= n) {
            j++;
            num = 9 ** j;
            //* ストップ条件を明示
            if (i + num <= n) {
                dp[i + num] = Math.min(dp[i + num], dp[i] + 1);
            } else {
                break;
            }
        }

        // console.log(dp);
        // console.log("-------");
    }
    // console.log(dp);

    console.log(dp[n]);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
