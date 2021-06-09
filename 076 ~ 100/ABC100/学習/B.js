// TODO
//*   ABC 100 B - Ringo's Favorite Numbers

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let [a, b] = input.trim().split(' ').map(n => parseInt(n, 10));

    if (b == 100) b = 101;
    const ans = (100 ** a) * b;
    console.log(ans);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));