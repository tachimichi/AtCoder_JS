// TODO
//*   ABC 068 A - ABCxxx

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    console.log('ABC' + parseInt(input, 10));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));