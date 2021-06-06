// TODO
//*   ABC 204

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m] = input[0].trim().split(' ').map(n => parseInt(n, 10));

    let t = [];
    for (let i = 1; i <= m; i++) {
        const [a, b] = input[i].trim().split(' ').map(n => parseInt(n, 10));
        t.push([a, b]);
    }
    console.log(t);




}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));

