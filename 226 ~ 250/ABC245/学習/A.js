// TODO
//*   ABC 245 A - Good morning

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, c, d] = input.trim().split(' ').map(n => parseInt(n, 10));
    if (a > c) {
        return console.log('Aoki');
    } else if (a == c) {
        if (b > d) return console.log('Aoki');
    }
    console.log('Takahashi');
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));