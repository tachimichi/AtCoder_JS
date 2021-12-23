// TODO
//*   ABC 225 A - Distinct Strings

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let str = input.trim().split('');
    let setStr = new Set(str);

    if (setStr.size == 1) {
        console.log(1);
    } else if (setStr.size == 2) {
        console.log(3);
    } else {
        console.log(6);
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));