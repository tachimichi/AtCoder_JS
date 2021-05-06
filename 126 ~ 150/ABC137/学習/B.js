// TODO
//*   ABC 137 B - One Clue

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict'
    const [k, x] = input.trim().split(' ').map(n => parseInt(n, 10));
    const min = -1000000;
    const max = 1000000;

    const k_min = x - k + 1;
    const k_max = x + k - 1;

    let ans = [];
    for(let i = k_min; i <= k_max; i++) {
        if(i < min) continue;
        if(i > max) break;

        ans.push(i);
    }
    console.log(ans.join(' '));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));