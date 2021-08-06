// TODO
//*   ABC 085 A - Already 2018

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // const [yyyy, mm, dd] = input.trim().split('/').map(n => parseInt(n, 10));
    const [yyyy, mm, dd] = input.trim().split('/');
    // console.log(yyyy);
    // console.log(mm);
    // console.log(dd);
    console.log(parseInt(yyyy, 10) + 1 + '/' + mm + '/' + dd);
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