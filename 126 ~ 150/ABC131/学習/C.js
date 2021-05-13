// TODO
//*   ABC 131 C - Anti-Division

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, c, d] = input.trim().split(' ').map(n => parseInt(n, 10));

    let count = 0;
    for(let i = a; i <= b; i++) {
        if(i % c != 0 && i % d != 0) count++;
    }
    console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));