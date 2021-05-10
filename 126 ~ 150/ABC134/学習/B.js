// TODO
//*   ABC 134 B - Golden Appl

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict'
    const [n, d] = input.trim().split(' ').map(n => parseInt(n, 10));
    let ans = Math.ceil(n/(2*d+1));
    console.log(ans);

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));