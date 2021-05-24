// TODO
//*   ABC 122 C - Energy Drink Collector

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    let a = [];
    for(let i = 1; i <= n; i++) {
        const t = input[i].trim().split(' ').map(n => parseInt(n, 10));
        a.push(t);
    }
    // console.log(a);
    a.sort((a, b) => a[0] - b[0]);
    // console.log(a);

    let count = 0;
    let sum = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < a[i][1]; j++) {
            if(m > count) {
                sum += a[i][0];
                count++;
            }
            if(m == count) break;
        }
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
