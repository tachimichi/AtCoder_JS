// TODO
//*   ABC 222 A - Four Digits 

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let str = input.trim().split('');
    console.log(str.length);
    while (str.length < 4) {
        str.unshift('0');
    }

    console.log(str.join(''));
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));