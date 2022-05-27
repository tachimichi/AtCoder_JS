// TODO
//*   ABC 247 A - Move Right

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('');
    // console.log(input);
    input.unshift('0');
    input.pop();
    console.log(input.join(''));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));