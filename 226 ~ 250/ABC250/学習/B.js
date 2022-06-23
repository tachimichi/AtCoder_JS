// TODO
//*   ABC 250 B - Enlarged Checker Board

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let [n, a, b] = input.trim().split(' ').map(n => parseInt(n, 10));
    let array = new Array(n * a);
    for (let i = 0; i < n * a; i++) {
        array[i] = new Array(n * b).fill('-');
    }

    // for (let i = 0; i < array.length; i++) {
    //     if (i % 2 == 0) {
    //         for (let j = 0; j < array.length; j++) {
    //             if (j % 2 == 0) array[i][j] = '.';
    //             else array[i][j] = '#';
    //         }
    //     } else {
    //         for (let j = 0; j < array.length; j++) {
    //             if (j % 2 == 0) array[i][j] = '#';
    //             else array[i][j] = '.';
    //         }
    //     }
    // }
    // for (let i = 0; i < array.length; i++) {
    //     console.log(array[i].join(''));
    // }
    // 配列生成
    let ans = new Array(n * a);
    for (let i = 0; i < n * a; i++) ans[i] = new Array(n * b).fill('-');
    // .か#を決定する
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const c = ((i + j) % 2 == 0) ? '.' : '#';
            // どこの値を更新するか
            for (let k = 0; k < a; k++) {
                for (let l = 0; l < b; l++) {
                    ans[a * i + k][b * j + l] = c;
                }
            }
        }
    }
    // 出力
    for (let i = 0; i < a * n; i++) {
        console.log(ans[i].join(''));
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));