// TODO
//*   ABC 130 B - Bounding

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict'
    input = input.trim().split('\n');
    const [n, x] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const l = input[1].trim().split(' ').map(n => parseInt(n, 10));
    
    let sum = 0;
    let count = 1;
    for(let i = 0; i < n; i++) {
        sum += l[i];
        if(x >= sum) count++;
    }
    console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));