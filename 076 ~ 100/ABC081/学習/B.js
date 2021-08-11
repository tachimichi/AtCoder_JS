// TODO
//*   ABC 081 B - Shift only

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));
    // console.log(a);
    let isEven = true;
    let count = 0;
    while (isEven) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] % 2 == 0) {
                a[i] /= 2;
            } else {
                // console.log(a[i]);
                isEven = false;
            }
        }
        if (isEven) {
            count++;
        } else {
            break;
        }
    }
    console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));