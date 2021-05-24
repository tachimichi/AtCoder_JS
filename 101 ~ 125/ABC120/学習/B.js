// TODO
//*   ABC 122 B - Can you solve this?

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m, c] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const b = input[1].trim().split(' ').map(n => parseInt(n, 10));

    let count = 0;
    for(let i = 2; i < 2+n; i++) {
        let sum = 0;
        const t = input[i].trim().split(' ').map(n => parseInt(n, 10));
        for(let j = 0; j < m; j++) {
            sum += t[j] * b[j];
        }
        // console.log(sum);
        if(sum+c > 0) count++;
    }
    console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));