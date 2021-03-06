// TODO
//*   ABC 120 C - Unification

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('').map(n => parseInt(n, 10));

    let count_0 = 0;
    let count_1 = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] == 0) {
            count_0++;
        } else {
            count_1++;
        }
    }
    console.log(2 * Math.min(count_0, count_1));
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
