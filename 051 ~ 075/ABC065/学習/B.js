// TODO
//*   ABC 065 B - Trained?

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 0);
    let a = [];
    for (let i = 1; i <= n; i++) {
        const x = parseInt(input[i], 10);
        a.push(x);
    }
    // console.log(a);

    let arr = new Array(n).fill(0);
    let index = 0;
    let count = 0;
    for (let i = 0; i < n; i++) {

        index = a[index] - 1;
        arr[index]++;
        count++;
        if (index == 1) {
            return console.log(count);
        } else if (arr[index] == 2) {
            return console.log(-1);
        }
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));