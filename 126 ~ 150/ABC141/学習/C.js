// TODO
//*   ABC 141 C - Attack Survival

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, k, q] = input[0].split(' ').map(n => parseInt(n, 10));

    let t = new Array(n).fill(k);

    for( let i = 1; i <= q; i++) {
        const x = parseInt(input[i], 10);
        t[x-1] += 1;
    }
    console.log(t);

    //* ------------------------
    for(let i = 0; i < t.length; i++) {
        if(t[i] > q) {
            console.log('Yes');
        } else {
            console.log('No');
        }
    }

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
