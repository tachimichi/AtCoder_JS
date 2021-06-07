// TODO
//*   ABC 204 A - Rock-paper-scissors 

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // input = input.trim().split('\n');
    const [x, y] = input.trim().split(' ').map(n => parseInt(n, 10));

    if (x == y) {
        console.log(x);
    } else {
        console.log(3 - x - y);
    }

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));