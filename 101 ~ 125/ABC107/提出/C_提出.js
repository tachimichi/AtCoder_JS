// TODO
//*   ABC 107 C - Candles

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, k] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const x = input[1].trim().split(' ').map(n => parseInt(n, 10));

    let max = 10e14;
    // console.log(max);

    for (let i = 0; i < n - k + 1; i++) {
        const l = i;
        const r = i + k - 1;
        const range = Math.abs(x[r] - x[l]);
        const l_abs = Math.abs(x[l]);
        const r_abs = Math.abs(x[r]);
        max = Math.min(max, l_abs + range, r_abs + range);
    }
    console.log(max);

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
