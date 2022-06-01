// TODO
//*   ABC 251 A - Six Characters

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim();
    // console.log(input);
    // console.log(input.length);
    if (input.length == 1) console.log(input.repeat(6));
    if (input.length == 2) console.log(input.repeat(3));
    if (input.length == 3) console.log(input.repeat(2));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));