// TODO
//*   ABC 244 B - Go Straight and Turn Right

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = input[0].trim().split(' ').map(n => parseInt(n, 10));
    let t = input[1].trim().split('');

    let [x, y] = [0, 0];
    let d = 0;

    for (let i = 0; i < n; i++) {
        if (t[i] == 'S') {
            if (d == 0) x++;
            if (d == 1) y--;
            if (d == 2) x--;
            if (d == 3) y++;
        }
        if (t[i] == 'R') {
            d = (d + 1) % 4;
        }
    }
    console.log(x, y);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}