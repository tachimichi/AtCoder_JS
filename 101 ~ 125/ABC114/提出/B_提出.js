// TODO
//*   ABC 114 B - 754

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('');

    let ans = 1000;
    for (let i = 0; i < input.length - 2; i++) {
        let num = input[i] + input[i + 1] + input[i + 2];
        // console.log(num);
        ans = Math.min(ans, Math.abs(753 - num));
    }
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