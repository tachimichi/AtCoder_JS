// TODO
//*   ABC 050 A - Addition and Subtraction Easy

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split(' ');
    const a = parseInt(input[0], 10);
    const op = input[1].trim()
    const b = parseInt(input[2], 10);
    console.log(op == '+' ? a + b : a - b);
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