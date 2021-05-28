// TODO
//*    050 - Stair Jump

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [n, L] = input.split(' ').map(n => parseInt(n, 10));
    const mod = 1e9 + 7;

    //* 1で初期化する
    let dp = new Array(n + 1).fill(1);
    for (let i = 1; i <= n; i++) {
        if (i < L) {
            //* 1歩ずつ歩くため、1通り
            dp[i] = dp[i - 1];
        } else {
            //* n-1段目から1段登るか、n-L段目からL段登るか
            dp[i] = (dp[i - 1] + dp[i - L]) % mod;
        }
    }
    //* 最後のn番目の値が答え
    console.log(dp[n]);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/050.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}