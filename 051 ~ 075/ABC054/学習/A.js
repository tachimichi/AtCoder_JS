// TODO
//*   ABC 054 A - One Card Poker

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b] = input.trim().split(' ').map(n => parseInt(n, 10));
    if (a == b) {
        console.log('Draw');
    } else if (a == 1) {
        console.log('Alice');
    } else if (b == 1) {
        console.log('Bob');
    } else if (a > b) {
        console.log('Alice');
    } else {
        console.log('Bob');
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));