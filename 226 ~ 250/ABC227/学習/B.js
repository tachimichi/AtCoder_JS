// TODO
//*   ABC 225 B - Star or Not

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let array = new Array(n).fill(0);

    for (let i = 1; i < n; i++) {
        const [a, b] = input[i].trim().split(' ').map(n => parseInt(n, 10));
        array[a - 1] += 1;
        array[b - 1] += 1;
    }

    let ans = 'No';
    for (let i = 0; i < array.length; i++) {
        if (array[i] == n - 1) {
            ans = 'Yes';
        }
    }
    console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));