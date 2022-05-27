// TODO
//*   ABC 247 B - Unique Nicknames

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let a = [];
    for (let i = 1; i <= n; i++) {
        a.push(input[i].trim().split(' '));
    }
    // console.log(a);

    for (let i = 0; i < a.length; i++) {
        let flg1 = false;
        let flg2 = false;
        // j0から考慮
        for (let j = 0; j < a.length; j++) {
            // i = jは対象外として考慮
            if (i == j) continue;

            if (a[i][0] == a[j][0] || a[i][0] == a[j][1]) {
                flg1 = true;
            }
            if (a[i][1] == a[j][0] || a[i][1] == a[j][1]) {
                flg2 = true;
            }
        }
        // console.log(a[i][0], a[i][1]);
        // console.log(flg1, flg2);
        // console.log('==============');
        if (flg1 && flg2) return console.log('No');
    }
    console.log('Yes');
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