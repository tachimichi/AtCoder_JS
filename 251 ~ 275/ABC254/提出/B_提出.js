// TODO
//*   ABC 254 B - Practical Computing

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = parseInt(input.trim(), 10);
    let ans = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                row.push(1);
            } else {
                row.push(ans[i - 1][j - 1] + ans[i - 1][j]);
            }
        }
        // console.log(row);
        ans.push(row);
        console.log(ans[i].join(' '));
    }
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