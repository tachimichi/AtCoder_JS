// TODO
//*   ABC 110 A - Maximize the Formula

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    "use strict";
    const a = input.trim().split(' ').map(n => parseInt(n, 10));
    a.sort((a, b) => b - a);
    // console.log(a);
    console.log(a[0] * 10 + a[1] + a[2]);

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