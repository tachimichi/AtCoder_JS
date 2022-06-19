// TODO
//*   ABC 248 B - Slimes

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let [n, a, b] = input.trim().split(' ').map(n => parseInt(n, 10));
    let array = new Array(n * a);
    for (let i = 0; i < n * a; i++) {
        array[i] = new Array(n * b).fill('.');
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (i % (a * 2) < a) {
                if (j % (b * 2) >= b) array[i][j] = '#';
            } else {
                if (j % (b * 2) < b) array[i][j] = '#';
            }
        }
        console.log(array[i].join(''));
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));