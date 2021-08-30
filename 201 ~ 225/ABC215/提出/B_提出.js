// TODO
//*   ABC 215 B - log2(N)

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // input = input.trim().split('\n');
    const n = BigInt(input.trim());
    let ans = 0;
    for (let i = 0n; i < n; i++) {
        const x = 2n ** i;
        if (x <= n) {
            ans = i;
        } else {
            break;
        }
    }
    console.log(ans.toString());
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}