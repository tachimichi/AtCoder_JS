// TODO
//*   ABC 246 A - Four Points

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let x = [];
    let y = [];
    for (let i = 0; i < 3; i++) {
        const [a, b] = input[i].trim().split(' ').map(n => parseInt(n, 10));
        x.push(a);
        y.push(b);
    }
    // console.log(x, y);
    let [ans1, ans2] = [];
    if (x[0] == x[1]) ans1 = x[2];
    if (x[0] == x[2]) ans1 = x[1];
    if (x[1] == x[2]) ans1 = x[0];
    if (y[0] == y[1]) ans2 = y[2];
    if (y[0] == y[2]) ans2 = y[1];
    if (y[1] == y[2]) ans2 = y[0];
    console.log(ans1, ans2);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));