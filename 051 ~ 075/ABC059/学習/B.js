// TODO
//*   ABC 059 B - Comparison

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b] = input.trim().split(' ').map(n => BigInt(n));
    if (a > b) {
        console.log('GREATER');
    } else if (a < b) {
        console.log('LESS');
    } else {
        console.log('EQUAL');
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));