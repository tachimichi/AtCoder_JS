// TODO
//*   ABC 099 B - Stone Monument

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b] = input.trim().split(' ').map(n => parseInt(n, 10));

    const diff = b - a;
    let sum = 0;
    for (let i = 0; i < diff; i++) {
        sum += i;
    }
    console.log(sum - a);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));