// TODO
//*   ABC 103 A - Task Scheduling Problem

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = input.trim().split(' ').map(n => parseInt(n, 10));
    n.sort((a, b) => b - a);
    const x = n[0] - n[1];
    const y = n[1] - n[2];
    console.log(x + y);
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