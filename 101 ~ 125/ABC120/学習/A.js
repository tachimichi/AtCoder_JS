// TODO
//*   ABC 120 A - Favorite Sound

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [h, w] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const [a, b] = input[1].trim().split(' ').map(n => parseInt(n, 10));
    console.log((h-a) * (w-b));

}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));