// TODO
//*   ABC 229 A - First Grid

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let [a, b] = input.trim().split('\n');
    // console.log(a);
    // console.log(b);
    a = a.trim().split('')
    b = b.trim().split('')
    // console.log(a);
    // console.log(b);
    if ((a[0] == b[1]) && (b[0] == a[1])) {
        if ((a[0] == a[1]) && (a[0] == "#")) {
            console.log("Yes");
        } else {
            if ((b[0] == b[1]) && (b[0] == "#")) {
                console.log("Yes");
            } else {
                console.log("No");
            }
        }
    } else {
        console.log("Yes");
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}