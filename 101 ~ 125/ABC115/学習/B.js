// TODO
//*   ABC 115 B - Christmas Eve Eve

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let t = [];
    for (let i = 1; i <= n; i++) {
        const p = parseInt(input[i], 10);
        t.push(p);
    }
    t.sort((a, b) => b - a);
    // console.log(t);
    let ans = t[0] / 2;
    for (let i = 1; i < t.length; i++) {
        ans += t[i];
    }
    console.log(ans);

}



//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));