// TODO
//*   ARC 122 A - Many Formulae

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    "use strict";
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].trim().split(' ').map(n => BigInt(n));

    const mod = BigInt(10e+8 + 7);
    // console.log(mod);

    const dp1 = new Array(n).fill().map(_ => Array(2).fill(0n)); //* 隣接リスト
    const dp2 = new Array(n).fill().map(_ => Array(2).fill(0n)); //* 隣接リスト

    // console.log(dp1);
    // console.log(dp2);

    dp1[0][0] = 1n;
    dp2[0][0] = a[0];

    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= 1; j++) {
            //* +を選ぶ場合
            console.log(i, j);
            // console.log(dp1[i][0]);
            // console.log(dp1[i - 1][j]);
            // console.log(dp2[i - 1][j]);
            // console.log(dp1[i - 1][j]);
            // console.log(a[i]);
            //* i番目にi-1番目のjを足す
            dp1[i][0] += dp1[i - 1][j];
            //* i番目にdp2[i-1]番目のj + dp1[i-1]番目のj * a[i]
            dp2[i][0] += dp2[i - 1][j] + dp1[i - 1][j] * a[i];
            dp1[i][0] %= mod;
            dp2[i][0] %= mod;

            //* -を選ぶ場合
            if (j == 0) {
                console.log("-----------------");
                dp1[i][1] += dp1[i - 1][j];
                dp2[i][1] += dp2[i - 1][j] - dp1[i - 1][j] * a[i];
                dp1[i][1] %= mod;
                dp2[i][1] = (dp2[i][1] + mod * mod) % mod;
            }
            console.log("****************");
        }
    }
    console.log(dp1);
    console.log(dp2);
    let ans = (dp2[n - 1][0] + dp2[n - 1][1]) % mod;
    console.log(ans.toString());

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
