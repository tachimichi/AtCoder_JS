// TODO
//*   ABC 142 B - Roller Coaster

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, k] = input[0].split(' ').map(n => parseInt(n, 10));
    const t = input[1].split(' ').map(n => parseInt(n, 10));
    //* ------------------------
    let count = 0;
    for (let i = 0; i < t.length; i++) {
        if(t[i] >= k) count++;
    }
    console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));