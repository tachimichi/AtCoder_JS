// TODO
//*   ABC 214 B - How many?

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [s, t] = input.trim().split(' ').map(n => parseInt(n, 10));
    let count = 0;
    for (let i = 0; i <= s; i++) {
        for (let j = 0; j <= s - i; j++) {
            for (let k = 0; k <= s - (i + j); k++) {
                if (i * j * k <= t) count++;
            }
        }
    }
    console.log(count);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));