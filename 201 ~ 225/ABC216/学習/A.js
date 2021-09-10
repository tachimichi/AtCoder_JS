// TODO
//*   ABC 216 A - Signed Difficulty

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [x, y] = input.trim().split('.').map(n => parseInt(n, 10));
    if (0 <= y && y <= 2) {
        console.log(x + '-');
    } else if (3 <= y && y <= 6) {
        console.log(x);
    } else {
        console.log(x + '+');
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));