// TODO
//*   ABC 257 A - A to Z String 2

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [n, x] = input.trim().split(' ').map(n => parseInt(n, 10));
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const str = [];
    for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < n; j++) {
            str.push(alphabet[i]);
        }
    }
    // console.log(str.join(''));
    console.log(str[x - 1]);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));