// TODO
//*   ABC 143 B - TAKOYAKI FESTIVAL 2019

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const t = input[1].split(' ').map(n => parseInt(n, 10));
    //* ------------------------
    let sum = 0;
    for (let i = 0; i < t.length-1; i++) {
        for(let j = i+1; j < n; j++) {
            sum += t[i] * t[j];
        }
    }
    console.log(sum);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));