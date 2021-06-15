// TODO
//*   ABC 098 C - Attention

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const s = input[1].trim().split('');

    let countW = [0];
    for (let i = 1; i <= n; i++) {
        if (s[i - 1] == "W") {
            countW[i] = countW[i - 1] + 1;
        } else {
            countW[i] = countW[i - 1];
        }
        // console.log(countW);
    }

    let ans = n;
    for (let i = 1; i <= n; i++) {
        let left = countW[i - 1];
        let right = (n - i) - (countW[n] - countW[i]);
        ans = Math.min(ans, left + right);
    }
    console.log(ans);
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
