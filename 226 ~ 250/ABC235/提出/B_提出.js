// TODO
//*   ABC 235 B - Climbing Takahashi

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0].trim(), 10);
    const h = input[1].trim().split(' ').map(n => parseInt(n, 10));

    let ans = h[0];
    for (let i = 1; i < n; i++) {
        if (ans < h[i]) {
            ans = h[i];
        } else {
            return console.log(ans);
        }
    }
    console.log(ans);
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