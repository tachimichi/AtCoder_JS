// TODO
//*   ABC 200 B - 200th ABC-200

function main(input) {
    'use strict';
    let [n, k] = input.trim().split(' ').map(n => parseInt(n, 10));

    let t = "";
    let ans = [];
    for(let i = 0; i < k; i++) {
        if(n % 200 != 0) {
            t = n.toString() + "200";
            n = parseInt(t, 10);
        } else {
            n /= 200;
        }
    }
    console.log(n);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));