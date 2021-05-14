// TODO
//*   ABC 197 C - ORXOR

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let a = input[1].split(' ').map(n => parseInt(n, 10));

    let min = (1 << 30);
    // console.log(Math.pow(2, 30));
    // console.log(min);

    for(let i = 0; i < (1 << (n-1)); i++) {
        let now = 0;
        let t = 0;
        for(let j = 0; j < n; j++) {
            t |= a[j];
            if (i & (1 << j)) {
                now ^= t;
                t = 0;
            }
        }
        now ^= t;
        min = Math.min(min, now);
    }
    console.log(min);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}
