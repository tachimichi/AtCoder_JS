// TODO
//*   ABC 108 B - Ruined Square

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [x1, y1, x2, y2] = input.trim().split(' ').map(n => parseInt(n, 10));

    const x = x2 - x1; //x distance
    const y = y2 - y1;

    const x3 = x2 - y;
    const y3 = y2 + x;
    const x4 = x1 - y;
    const y4 = y1 + x;


    console.log(x3, y3, x4, y4);
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