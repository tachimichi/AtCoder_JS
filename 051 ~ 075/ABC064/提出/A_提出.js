// TODO
//*   ABC 064 A - RGB Cards

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [r, g, b] = input.trim().split(' ');
    const t = parseInt(r + g + b, 10);
    // console.log(t);
    console.log(t % 4 == 0 ? 'YES' : 'NO');
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