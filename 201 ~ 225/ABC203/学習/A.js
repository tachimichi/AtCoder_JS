// TODO
//*   ABC 203 A - Chinchirorin

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // input = input.trim().split('\n');
    const a = input.trim().split(' ').map(n => parseInt(n, 10));
    a.sort((a, b) => a - b);

    if (a[0] == a[1]) {
        return console.log(a[2]);
    }
    if (a[2] == a[1]) {
        return console.log(a[0]);
    }
    console.log(0);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));