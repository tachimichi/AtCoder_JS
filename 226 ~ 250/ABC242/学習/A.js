// TODO
//*   ABC 242 A - T-shirt

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, c, x] = input.trim().split(' ').map(n => parseInt(n, 10));
    if (x <= a) {
        console.log(1);
    } else if (x <= b) {
        console.log(c / (b - a));
    } else {
        console.log(0);
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));