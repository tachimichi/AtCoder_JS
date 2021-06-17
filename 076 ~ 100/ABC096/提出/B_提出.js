// TODO
//*   ABC 096 B - Maximum Sum

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let t = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const k = parseInt(input[1], 10);

    for (let i = 0; i < k; i++) {
        let max = Math.max(...t);
        for (let j = 0; j < t.length; j++) {
            if (t[j] == max) {
                t[j] = max * 2;
                //* 一回のみ
                break;
            }
        }
    }
    console.log(t.reduce((a, b) => a + b));
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