// TODO
//*   ABC 234 B - Longest Segment

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0].trim(), 10);
    let x = [];
    let y = [];
    for (let i = 1; i <= n; i++) {
        const [a, b] = input[i].trim().split(' ').map(n => parseInt(n, 10));
        x.push(a);
        y.push(b);
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let x_diff = x[i] - x[j];
            let y_diff = y[i] - y[j];
            let length = Math.sqrt(x_diff * x_diff + y_diff * y_diff);
            ans = Math.max(ans, length);
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