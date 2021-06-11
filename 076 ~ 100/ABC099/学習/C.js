// TODO
//*   ABC 099 C - Strange Bank

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let n = parseInt(input, 10);

    let count = 0;
    let a = 0;
    while (9 ** a <= n) {
        a++;
    }
    n -= 9 ** (a - 1);
    console.log(9 ** (a - 1));
    console.log(9 ** (a));
    count++;
    console.log("count", count);
    console.log(n);

    a = 0;
    while (6 ** a <= n) {
        a++;
    }
    n -= 6 ** (a - 1);
    console.log(6 ** (a - 1));
    console.log(6 ** (a));

    count++;
    console.log("count", count);
    console.log(n);

    a = 0;
    while (9 * a <= n) {
        a++;
        count++;
    }
    count--;
    console.log("count", count);
    n -= 9 * (a - 1);
    console.log(n);

    a = 0;
    while (1 * a < n) {
        a++;
        count++;
    }
    console.log("count", count);

}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
