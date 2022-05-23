// TODO
//*   ABC 243 A - Shampoo

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [v, a, b, c] = input.trim().split(' ').map(n => parseInt(n, 10));
    let n = v;
    let count = 0;
    let family = [a, b, c];
    while (n >= 0) {
        n -= family[count % 3];
        if (n < 0) {
            if (count % 3 == 0) {
                return console.log('F');
            } else if (count % 3 == 1) {
                return console.log('M');
            } else {
                return console.log('T');
            }
        }
        count++;
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));