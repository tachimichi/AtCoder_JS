// TODO
//*   ABC 237 A - Not Overflow

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const num = BigInt(input);
    if ((2n ** 31n) > num && num >= -(2n ** 31n)) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));