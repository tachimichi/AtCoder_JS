// TODO
//*   ABC 132 B - Ordinary Number

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict'
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const p = input[1].split(' ').map(n => parseInt(n, 10));
    
    let count = 0;

    for(let i = 1; i < n-1; i++) {
        if(p[i-1] < p[i] && p[i] < p[i+1]) count++;
        if(p[i-1] > p[i] && p[i] > p[i+1]) count++;
    }
    console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));