// TODO
//*   ABC 135 A - Harmony

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b]= input.trim().split(' ').map(n => parseInt(n, 10));

    let t = a + b;
    if(t % 2 == 0) {
        console.log(t/2);
    } else {
        console.log("IMPOSSIBLE");
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));