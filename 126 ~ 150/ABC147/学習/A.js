// TODO
//*   ABC 147 A - Blackjack

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const a = input.trim().split(' ').map(n => parseInt(n, 10));
    let sum = a[0]+a[1]+a[2];
    if(sum>21) {
        console.log('bust');
    } else {
        console.log('win');
    }

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));