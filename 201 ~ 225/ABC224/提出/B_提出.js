// TODO
//*   ABC 224 B - Mongeness

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [h, w] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    let t = [];
    for (let i = 1; i <= h; i++) {
        const a = input[i].trim().split(' ').map(n => parseInt(n, 10));
        t.push(a);
    }

    for (let i1 = 0; i1 < h; i1++) {
        for (let i2 = 0; i2 < h; i2++) {
            for (let j1 = 0; j1 < w; j1++) {
                for (let j2 = 0; j2 < w; j2++) {
                    // console.log(i1, i2, j1, j2);
                    if (i1 < i2 && j1 < j2) {
                        // console.log(i1, i2, j1, j2);
                        if (t[i1][j1] + t[i2][j2] > t[i2][j1] + t[i1][j2]) {
                            return console.log('No');
                        }
                    }
                }
                // console.log("=======");
            }
        }
    }
    console.log("Yes");
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