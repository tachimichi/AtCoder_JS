// TODO
//*   ABC 243 B - Hit and Blow

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let a = input[1].trim().split(' ').map(n => parseInt(n, 10));
    let b = input[2].trim().split(' ').map(n => parseInt(n, 10));

    let ans1 = 0;
    let ans2 = 0;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            // console.log(a[i], b[j]);
            // console.log(a[i] == b[j]);
            if (a[i] == b[j]) {
                if (i == j) ans1++;
                if (i != j) ans2++;
            }
        }
    }
    console.log(ans1);
    console.log(ans2);
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