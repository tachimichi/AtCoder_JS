// TODO
//*   ABC 072 B - OddString

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let str = input.trim().split('');
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 == 0) ans += str[i];
    }
    console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));