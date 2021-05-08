// TODO
//*   ABC 200 B - 200th ABC-200

function main(input) {
    'use strict';
    let [n, k] = input.trim().split(' ').map(n => parseInt(n, 10));

    let t = "";
    let ans = [];
    for(let i = 0; i < k; i++) {
        if(n % 200 != 0) {
            t = n.toString() + "200";
            n = parseInt(t, 10);
        } else {
            n /= 200;
        }
    }
    console.log(n);
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