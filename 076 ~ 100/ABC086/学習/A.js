// TODO
//*   ABC 086 A - Product

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // input = input.trim().split('\n');
    const [a, b] = input.trim().split(' ').map(n => parseInt(n, 10));

    if (a * b % 2 == 1) {
        console.log('Odd');
    } else {
        console.log('Even');
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));


