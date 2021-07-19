// TODO
//*   ABC 210 A - Cabbages

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // input = input.trim().split('\n');
    const [n, a, x, y] = input.trim().split(' ').map(n => parseInt(n, 10));
    let ans = 0;
    if (n > a) {
        ans = a * x + y * (n - a);
    } else {
        ans = a * x;
    }
    console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));