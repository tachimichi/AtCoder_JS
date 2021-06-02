// TODO
//*   ABC 107 B - Grid Compression

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [h, w] = input[0].trim().split(' ').map(n => parseInt(n, 10));

    let t = [];
    for (let i = 1; i <= h; i++) {
        const a = input[i].trim().split('');
        t.push(a);
    }
    // console.log(t);

    let row = new Array(h).fill(false);
    let col = new Array(w).fill(false);
    // console.log(row);
    // console.log(col);

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (t[i][j] == "#") {
                row[i] = true;
                col[j] = true;
            }
        }
    }

    // console.log(row);
    // console.log(col);

    let ans = [];
    for (let i = 0; i < h; i++) {
        if (row[i]) {
            for (let j = 0; j < w; j++) {
                if (col[j]) ans.push(t[i][j]);
            }
            if (i != h - 1) ans.push('\n');
        }
    }
    console.log(ans.join(''));
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