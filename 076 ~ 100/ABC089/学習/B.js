// TODO
//*   ABC 089 B - Hina Arare

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].trim().split(' ');
    let ans = 'Three';
    for (let i = 0; i < n; i++) {
        if (a[i] == 'Y') {
            ans = 'Four';
        }
    }
    console.log(ans);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));