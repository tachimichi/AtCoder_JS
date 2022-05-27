// TODO
//*   ABC 249 A - Jogging

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, c, d, e, f, x] = input.trim().split(' ').map(n => parseInt(n, 10));
    let count1 = (a + c) % x;
    let count2 = (a + c) % x;
    if (a < x) {
        count1 = Math.floor((a + c) / x);
    } else {
        count1 = 0;
    }
    if (b < x) {
        count2 = Math.floor((d + f) / x);
    } else {
        count2 = 0;
    }
    // console.log(count1, count2);

    const len1 = b * count1;
    const len2 = e * count2;
    if (len1 == len2) return console.log("Draw");
    console.log(len1 > len2 ? "Takahashi" : "Aoki");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));