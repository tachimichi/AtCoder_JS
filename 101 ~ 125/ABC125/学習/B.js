// TODO
//*   ABC 125 B - Resale

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const v = input[1].split(' ').map(n => parseInt(n, 10));
    const c = input[2].split(' ').map(n => parseInt(n, 10));
    
    let sum = 0;
    for(let i = 0; i < n; i++) {
        if(v[i] >c[i]) sum += v[i]-c[i];
    }
    console.log(sum);

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));