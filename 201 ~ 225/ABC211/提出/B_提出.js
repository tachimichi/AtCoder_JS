// TODO
//*   ABC 211 B - Cycle Hit

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const str = new Array(4).fill(0);
    for (let i = 0; i < 4; i++) {
        str[i] = input[i].trim();
    }
    const ans = new Set(str);
    console.log(ans.size == 4 ? "Yes" : "No");
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