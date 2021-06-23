// TODO
//*   ABC 094 A - Cats and Dogs

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, x] = input.trim().split(' ').map(n => parseInt(n, 10));
    if (a + b >= x && x >= a) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
