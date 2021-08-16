// TODO
//*   ABC 079 A - Good Integer

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // input = input.trim().split('\n');
    const a = input.trim().split('').map(n => parseInt(n, 10));
    // console.log(a);
    let ans = "No";
    if (a[0] == a[1] && a[1] == a[2]) ans = "Yes";
    if (a[1] == a[2] && a[2] == a[3]) ans = "Yes";
    console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));


