// TODO
//*   ABC 127 C - Prison

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m] = input[0].split(' ').map(n => parseInt(n, 10));

    let left = 1;
    let right = n;

    for (let i = 1; i <= m; i++) {
        const [l, r] = input[i].trim().split(' ').map(n => parseInt(n, 10));
        left = Math.max(left, l);
        right = Math.min(right, r);
    }
    // console.log(left, right);
    console.log(Math.max(right-left+1, 0));
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
