// TODO
//*   ABC 136 B - Uneven Numbers

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict'
    const n = parseInt(input, 10);

    let count = 0;
    for(let i = 1; i <= n; i++) {
        // console.log(i.toString().length);
        if(i.toString().length % 2 == 1) count++;
    }
    console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));