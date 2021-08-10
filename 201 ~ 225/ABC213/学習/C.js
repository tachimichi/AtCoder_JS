// TODO
//*   ABC 212 C - Min Difference

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));
    const b = input[2].trim().split(' ').map(n => parseInt(n, 10));
    a.sort((a, b) => a - b);
    b.sort((a, b) => a - b);

    let x = 0;
    let y = 0;
    let ans = 10e8;
    while ((x < n) && (y < m)) {
        ans = Math.min(ans, Math.abs(a[x] - b[y]));
        if (a[x] > b[y]) {
            y++;
        } else {
            x++;
        }
    }
    console.log(ans);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));

