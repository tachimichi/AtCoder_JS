// TODO
//*   ABC 224 A - Tires

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const str = input.trim();
    if (str.endsWith('er')) {
        console.log('er');
    } else {
        console.log('ist');
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