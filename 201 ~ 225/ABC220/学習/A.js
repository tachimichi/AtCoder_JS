// TODO
//*   ABC 220 A - Find Multiple

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, c] = input.trim().split(' ').map(n => parseInt(n, 10));
    let flag = false;
    for (let i = 1; c * i <= b; i++) {
        let n = c * i;
        if (a <= n && n <= b) {
            return console.log(n);
        }
    }
    if (flag == false) {
        console.log(-1);
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));