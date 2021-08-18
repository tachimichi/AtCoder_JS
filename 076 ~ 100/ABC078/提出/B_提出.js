// TODO
//*   ABC 078 B - ISU

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // input = input.trim().split('\n');
    const [x, y, z] = input.trim().split(' ').map(n => parseInt(n, 10));
    // let count = 0;
    const ans = Math.floor((x - z) / (y + z));
    // console.log((y + z) * 110 + z);
    // console.log((y + z) * 109 + z);

    // for (let i = 0; i < 100000 - z; i++) {
    //     if ((y + z) * i <= x) {
    //         count = i;
    //     } else {
    //         break;
    //     }
    // }
    // console.log(count);
    console.log(ans);
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