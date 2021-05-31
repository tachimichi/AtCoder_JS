// TODO
//*   ARC 119 A - 119 × 2^23 + 1

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    "use strict";
    const n = BigInt(input.trim());
    // console.log(n);

    //* (1LL << i) は 2 の i 乗を意味します
    let ans = (1n << 60n);
    //* ans：1152921504606846976n
    // console.log(ans);

    for (let i = 0n; i <= 60n; i++) {
        let b = i;
        //* BigIntでは、a/b「a / b の商（小数点以下切り捨て）」になることに注意
        let a = n / (1n << i);
        let c = n - a * (1n << i);

        // console.log(a, b, c);
        ans = Math.min(ans.toString(), (a + b + c).toString());
    }
    console.log(ans.toString());


}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}