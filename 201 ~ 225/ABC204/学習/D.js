// TODO
//*   ABC 204

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));
    a.sort((a, b) => b - a);
    console.log(a);

    if (a.length == 1) return console.log(a[0]);

    let t = a[0];
    let u = a[1];
    for (let i = 2; i < a.length; i++) {
        if (t >= u) {
            u += a[i];
        } else {
            t += a[i];
        }
        console.log(t);
        console.log(u);
        console.log("------");
    }
    // console.log(t);
    // console.log(u);

    let ans = Math.max(t, u);
    console.log(ans);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/D.txt', 'utf8'));

