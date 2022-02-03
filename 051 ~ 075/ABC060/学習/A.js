// TODO
//*   ABC 061 A - Between Two Integers

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, c] = input.trim().split(' ');
    // console.log(a[a.length - 1]);
    if (a[a.length - 1] == b[0] && b[b.length - 1] == c[0]) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));