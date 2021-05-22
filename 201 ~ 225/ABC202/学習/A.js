// TODO
//*   ABC 202 A - Three Dice

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a,b, c] = input.trim().split(' ').map(n => parseInt(7-n,10));
    console.log(a+B+c);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));