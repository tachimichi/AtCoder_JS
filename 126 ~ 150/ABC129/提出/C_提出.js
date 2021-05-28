// TODO
//*   ABC 129 C - Typical Stairs

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    //* -----------------------------
    let a = [];
    let oks = new Array(n + 1).fill(true);
    for (let i = 1; i <= m; i++) {
        let num = parseInt(input[i], 10);
        a.push(num);
        //* 壊れている階段をfalseにする
        oks[num] = false;
    }
    // console.log(a);
    // console.log(oks);

    //* ------------
    let mod = 1e9 + 7;
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    for (let now = 0; now < n; now++) {
        //* j<最終ゴールのnか、二歩先のnow+2のどちらか迄
        for (let next = now + 1; next <= Math.min(n, now + 2); next++) {
            //* oks[next]がtrue（＝渡れる場合）
            if (oks[next]) {
                dp[next] += dp[now];
                dp[next] %= mod;
            }
        }
    }
    //* 最後のdpを出力
    console.log(dp[n]);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}