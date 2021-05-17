// TODO
//*   ABC 130 B - Bounding

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict'
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const w = input[1].trim().split(' ').map(n => parseInt(n, 10));
    
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum += w[i];
    }
    // console.log(sum);

    let min = 10000;
    let x = 0;
    for(let i = 0; i < n; i++) {
        x += w[i];
        console.log(Math.abs(x-(sum-x)));
        min = Math.min(min, Math.abs(x-(sum-x)));
    }
    console.log(min);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));