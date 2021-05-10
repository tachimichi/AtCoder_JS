// TODO
//*   ABC 138 A - Red or Not

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const a = parseInt(input[0], 10);
    const s = input[1].trim();

    if(a >= 3200) {
        console.log(s);
    } else {
        console.log("red");
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));