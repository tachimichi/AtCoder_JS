// TODO
//*   ABC 234 C - Happy New Year!

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const k = BigInt(input.trim());
    // console.log(k);
    let a = k.toString(2);
    // console.log(a);
    let lst = a.split('');
    for (let i = 0; i < lst.length; i++) {
        if (lst[i] == '1') lst[i] = '2';
    }
    console.log(lst.join(''));
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
