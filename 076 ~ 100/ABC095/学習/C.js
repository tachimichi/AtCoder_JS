// TODO
//*   ABC 095 C - Half and Half

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, c, x, y] = input.trim().split(' ').map(n => parseInt(n, 10));

    let NAB = a * x + b * y;
    let Co = 0;
    let ABC = 0;

    if (x >= y) {
        Co = c * x * 2;
        ABC = (c * y * 2) + ((x - y) * a);
    } else {
        Co = c * y * 2;
        ABC = (c * x * 2) + ((y - x) * b);
    }
    console.log(Math.min(NAB, Co, ABC))

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
