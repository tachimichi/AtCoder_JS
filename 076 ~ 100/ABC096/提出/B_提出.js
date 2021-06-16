// TODO
//*   ABC 097 B - Exponential

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);

    if (n == 1) return console.log(1);

    let ans = 0;
    for (let i = 2; i <= 100; i++) {
        for (let j = 2; i ** j <= n; j++) {
            if (ans <= i ** j) {
                ans = i ** j;
            }
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