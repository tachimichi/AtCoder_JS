// TODO
//*   ABC 083 A - Libra

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // input = input.trim().split('\n');
    const [a, b, c, d] = input.trim().split(' ').map(n => parseInt(n, 10));
    if (a + b > c + d) {
        console.log('Left');
    } else if (a + b == c + d) {
        console.log('Balanced');
    } else {
        console.log('Right');
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));


