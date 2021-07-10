// TODO
//*   ABC 209 B - Savings

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let [n, x] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    let a = input[1].trim().split(' ').map(n => parseInt(n, 10));

    let ans = "Yes";
    for (let i = 0; i < n; i++) {
        if (i % 2 == 1) {
            a[i] -= 1;
        }
        x -= a[i];
        // console.log(x);
    }
    if (x < 0) {
        console.log("No");
    } else {
        console.log("Yes");
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