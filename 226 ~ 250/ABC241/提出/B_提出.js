// TODO
//*   ABC 241 B - Pasta

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));
    const b = input[2].trim().split(' ').map(n => parseInt(n, 10));

    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < a.length; j++) {
            if (b[i] == a[j]) {
                a.splice(j, 1);
                // console.log(a);
                count++;
                break;
            }
        }
    }
    console.log(count == m ? 'Yes' : 'No');
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