// TODO
//*   ABC 056 A - HonestOrDishonest

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b] = input.trim().split(' ');
    if (!(a == 'D' && b == 'D') && (a == 'D' || b == 'D')) {
        console.log('D');
    } else {
        console.log('H');
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));