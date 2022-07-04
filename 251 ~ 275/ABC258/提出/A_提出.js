// TODO
//*   ABC 258 A - When?

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const k = parseInt(input.trim(), 10);
    if (k < 10) {
        console.log('21:0' + k.toString(10));
    } else if (k < 60) {
        console.log('21:' + k.toString(10));
    } else if (k < 70) {
        const n = k % 60;
        console.log('22:0' + n.toString(10));
    } else {
        const n = k % 60;
        console.log('22:' + n.toString(10));
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