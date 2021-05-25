// TODO
//*   ABC 120 B - K-th Common Divisor

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, c] = input.trim().split(' ').map(n => parseInt(n, 10));

    let t = [];
    for (let i = 0; i <= Math.min(a, b); i++) {
        if(a%i==0 && b%i==0) {
            t.push(i);
        }
    }
    // console.log(t);
    console.log(t[t.length-c]);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));