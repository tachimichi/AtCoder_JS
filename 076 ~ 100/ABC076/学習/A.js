// TODO
//*   ABC 076 A - Rating Goal

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const a = parseInt(input[0].trim(), 10);
    const b = parseInt(input[1].trim(), 10);
    console.log(b * 2 - a);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));


