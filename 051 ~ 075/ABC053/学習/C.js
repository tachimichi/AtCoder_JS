// TODO
//*   ABC 063 C - Bugged

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let s = [];
    let total = 0;
    for (let i = 1; i <= n; i++) {
        const x = parseInt(input[i], 10);
        s.push(x);
        total += x;
    }
    if (total % 10 != 0) return console.log(total);

    let max = 0;
    for (let i = 0; i < s.length; i++) {
        let sum = total - s[i];
        if (sum % 10 == 0) {
            for (let j = i + 1; j < s.length; j++) {
                sum -= s[i];
                if (sum % 10 != 0) {
                    max = Math.max(max, sum);
                }
            }
        } else {
            max = Math.max(max, sum);
        }
    }
    console.log(max);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
