// TODO
//*   ABC 138 C - Alchemist

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const t = input[1].split(' ').map(n => parseInt(n, 10));
    //* ------------------------

    t.sort((a, b) => a - b);
    // console.log(t);

    let sum = 0;
    for (let i = 0; i < n-1; i++) {
        t[i+1] = (t[i] + t[i+1]) / 2;
    }
    console.log(t[t.length-1]);

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
