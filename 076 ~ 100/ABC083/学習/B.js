// TODO
//*   ABC 083 B - Some Sums

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // input = input.trim().split('\n');
    const [n, a, b] = input.trim().split(' ').map(n => parseInt(n, 10));
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        let keta = 0;
        let loop = i;
        while (loop > 0) {
            keta += loop % 10;
            loop = Math.floor(loop / 10);
            // console.log(loop);
        }
        if (a <= keta && keta <= b) {
            ans += i;
        }
    }
    console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));