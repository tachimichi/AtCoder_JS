// TODO
//*   ABC 136 A - Transfer

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, c]= input.trim().split(' ').map(n => parseInt(n, 10));
    let t = a - b;
    if(c > t) {
        console.log(c-t);
    } else {
        console.log(0);
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));