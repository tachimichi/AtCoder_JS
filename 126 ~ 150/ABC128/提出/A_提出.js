// TODO
//*   ABC 128 A - Apple Pie

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.split(' ');
    const a = parseInt(input[0], 10);
    let p = parseInt(input[1], 10);
    //* -------------------------------
    p = p + a*3;
    const x = Math.floor(p/2);
    console.log(x);
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