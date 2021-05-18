// TODO
//*   ABC 127 A - Ferris Wheel

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b] = input.trim().split(' ');
    if(a >= 13) {
        console.log(b);
    } else if(a >= 6) {
        console.log(b/2);
    } else {
        console.log(0);
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));