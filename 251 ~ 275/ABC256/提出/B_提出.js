// TODO
//*   ABC 256 B - Batters

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));

    let count = 0;
    let t = [];
    for (let i = 0; i < n; i++) {
        t.push(0);
        for (let j = 0; j < t.length; j++) {
            t[j] += a[i];
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] > 3) count++;
    }
    console.log(count);
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