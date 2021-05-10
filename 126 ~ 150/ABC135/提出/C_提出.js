// TODO
//*   ABC 135 C - City Savers

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let a = input[1].split(' ').map(n => parseInt(n, 10));
    let b = input[2].split(' ').map(n => parseInt(n, 10));

    let sum = 0;
    for (let i = 0; i < n; i++) {
        let t = b[i] - a[i];
        if(t > 0) {
            sum += a[i];
            let x = Math.min(t, a[i+1]);
            sum += x;
            a[i+1] -= x;
        } else {
            sum += b[i];
        }
        // console.log(sum);
    }
    console.log(sum);
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