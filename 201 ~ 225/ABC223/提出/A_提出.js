// TODO
//*   ABC 223 A - Exact Price

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const x = parseInt(input.trim(), 10);
    if (x <= 99) return console.log('No');
    if (x % 100 == 0) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}