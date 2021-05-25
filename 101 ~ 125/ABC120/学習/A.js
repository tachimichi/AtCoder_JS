// TODO
//*   ABC 120 A - Favorite Sound

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, c] = input.trim().split(' ').map(n => parseInt(n, 10));
    let count = Math.floor(b/a);
    if(count >= c) {
        console.log(c);
    } else {
        console.log(count);
    }

}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));