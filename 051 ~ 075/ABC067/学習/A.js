// TODO
//*   ABC 067 A - Sharing Cookies

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b] = input.trim().split(' ').map(n => parseInt(n, 10));
    if (a % 3 == 0 || b % 3 == 0 || (a + b) % 3 == 0) {
        console.log('Possible');
    } else {
        console.log('Impossible');
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));