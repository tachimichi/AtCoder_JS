// TODO
//*   ABC 205


// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [a, b, c] = input[0].trim().split(' ').map(n => parseInt(n, 10));

    let pow1 = a ** c;
    let pow2 = b ** c
    // console.log(pow1);
    // console.log(pow2);

    let abs1 = Math.abs(a);
    let abs2 = Math.abs(b);

    if (c % 2 == 0) {
        if (abs1 == abs2) {
            console.log("=");
        } else if (abs1 > abs2) {
            console.log(">");
        } else {
            console.log("<");
        }
    } else {
        if (a == b) {
            console.log("=");
        } else if (a > b) {
            console.log(">");
        } else {
            console.log("<");
        }
    }

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
