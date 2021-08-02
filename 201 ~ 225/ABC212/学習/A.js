// TODO
//*   ABC 212 A - Alloy

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // input = input.trim().split('\n');
    const [a, b] = input.trim().split(' ').map(n => parseInt(n, 10));
    if (a == 0) {
        console.log('Silver');
    } else if (b == 0) {
        console.log('Gold');
    } else {
        console.log('Alloy');
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));