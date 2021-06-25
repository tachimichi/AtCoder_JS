// TODO
//*   ABC 092 B - Chocolate

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const [d, x] = input[1].trim().split(' ').map(n => parseInt(n, 10));
    let t = [];
    for (let i = 2; i < 2 + n; i++) {
        const a = parseInt(input[i], 10);
        t.push(a);
    }
    // console.log(t);

    let count = x;
    for (let i = 0; i < t.length; i++) {
        let j = 0;
        while (t[i] * j + 1 <= d) {
            count++;
            j++;
        }
    }
    console.log(count);
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