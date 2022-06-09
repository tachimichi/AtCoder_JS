// TODO
//*   ABC 249 A - Jogging

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, c, d, e, f, x] = input.trim().split(' ').map(n => parseInt(n, 10));

    let run1 = 0;
    let time1 = x;
    while (time1 > 0) {
        if (time1 >= a) {
            time1 -= a;
            run1 += a;
        } else {
            run1 += time1;
            break;
        }
        time1 -= c;
    }
    let run2 = 0;
    let time2 = x;
    while (time2 > 0) {
        if (time2 >= d) {
            time2 -= d;
            run2 += d;
        } else {
            run2 += time2;
            break;
        }
        time2 -= f;
    }

    let len1 = run1 * b;
    let len2 = run2 * e;
    if (len1 == len2) return console.log('Draw');
    console.log(len1 > len2 ? 'Takahashi' : 'Aoki');

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));