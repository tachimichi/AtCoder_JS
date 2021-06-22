// TODO
//*   ABC 095 B - Bitter Alchemy

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, x] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    let m = [];
    for (let i = 1; i <= n; i++) {
        const t = parseInt(input[i], 10);
        m.push(t);
    }
    m.sort((a, b) => a - b);
    let sum = x - m.reduce((a, b) => a + b);
    console.log(n + Math.floor(sum / m[0]));
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));