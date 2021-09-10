// TODO
//*   ABC 216 B - Same Name

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let t = [];
    for (let i = 1; i <= n; i++) {
        const [x, y] = input[i].trim().split(' ');
        t.push([x, y]);
    }
    // console.log(t);
    let isOK = false;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (t[i][0] == t[j][0]) {
                if (t[i][1] == t[j][1]) {
                    isOK = true;
                }
            }
        }
    }
    console.log(isOK ? 'Yes' : 'No');
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