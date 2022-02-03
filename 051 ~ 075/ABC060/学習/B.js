// TODO
//*   ABC 060 B - Choose Integers

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, c] = input.trim().split(' ').map(n => parseInt(n, 10));
    let isOK = false;

    for (let i = 1; i <= b; i++) {
        const mod = a * i % b;
        console.log(mod);
        if (mod == c) {
            isOK = true;
            break;
        }
    }
    console.log(isOK ? 'YES' : 'NO');
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));