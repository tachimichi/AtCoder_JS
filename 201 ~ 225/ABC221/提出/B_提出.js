// TODO
//*   ABC 221 B - typo

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let a = input[0].trim().split('');
    let s = input[0].trim().split('');
    let b = input[1].trim().split('');

    // console.log(a);
    // console.log(b);

    let isOK = true;
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            // console.log(a[i], b[i]);
            isOK = false;
        }
    }
    if (isOK) return console.log('Yes');

    //* --------------------------------------
    for (let i = 0; i < a.length - 1; i++) {
        let count = 0;

        let t = a[i];
        a[i] = a[i + 1];
        a[i + 1] = t;

        // console.log(a);
        for (let j = 0; j < a.length; j++) {
            if (a[j] != b[j]) {
                isOK = false;
            } else {
                count++;
            }
            // console.log('count', count);
        }

        if (count == a.length) {
            return console.log('Yes');
        } else {
            a = s;
        }
    }
    console.log('No');
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