// TODO
//*   ABC 112 B - Time Limit Exceeded

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, t] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    let u = [];
    for (let i = 1; i <= n; i++) {
        const [a, b] = input[i].trim().split(' ').map(n => parseInt(n, 10));
        if (b <= t) {
            u.push([a, b]);
        }
    }
    if (u.length) {
        u.sort((a, b) => a[0] - b[0]);
        console.log(u[0][0]);
    } else {
        console.log("TLE");
    }

}



//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));