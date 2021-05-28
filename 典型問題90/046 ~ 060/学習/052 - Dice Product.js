// TODO
//*    052 - Dice Product

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    //* 値が大きいと判断してBigInt
    const n = BigInt(input[0], 10);
    const mod = 1000000007n;

    //* 入力値を整形
    let t = [];
    let sum = [];
    for (let i = 1; i <= n; i++) {
        const n = input[i].split(' ').map(n => BigInt(n, 10));
        t.push(n);
        sum.push(n);
    }
    // console.log(t);
    // console.log(sum);

    //* 各さいころの和を求める
    let sums = [];
    for (let i = 0; i < t.length; i++) {
        let t = sum[i].reduce((a, b) => a + b);
        sums.push(t);
    }
    // console.log(sums);

    //* 総積を求める
    let ans = sums.reduce((a, b) => a * b);
    // console.log(ans);
    console.log((ans % mod).toString());

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/052.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}