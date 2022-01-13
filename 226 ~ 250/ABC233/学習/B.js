// TODO
//*   ABC 233 B - A Reverse

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let [L, R] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    let str = input[1].trim().split('');

    let ans = '';
    for (let i = 0; i < L - 1; i++) {
        ans += str[i];
    }
    for (let i = R - 1; i >= L - 1; i--) {
        ans += str[i];
    }
    for (let i = R; i < str.length; i++) {
        ans += str[i];
    }
    console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));