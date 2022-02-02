// TODO
//*   ABC 064 C - Colorful Leaderboard

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));
    a.sort((a, b) => a - b);

    let color = new Array(8).fill(0);
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 400) {
            color[0]++;
        } else if (a[i] < 800) {
            color[1]++;
        } else if (a[i] < 1200) {
            color[2]++;
        } else if (a[i] < 1600) {
            color[3]++;
        } else if (a[i] < 2000) {
            color[4]++;
        } else if (a[i] < 2400) {
            color[5]++;
        } else if (a[i] < 2800) {
            color[6]++;
        } else if (a[i] < 3200) {
            color[7]++;
        } else {
            count++;
        }
    }
    // console.log(color);
    // console.log(count);

    let min = 0;
    for (let i = 0; i < color.length; i++) {
        if (color[i] != 0) min++;
    }
    if (min == 0) {
        console.log(1, count);
    } else {
        console.log(min, min + count);
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
