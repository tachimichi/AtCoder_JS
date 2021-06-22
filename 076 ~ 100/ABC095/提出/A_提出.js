// TODO
//*   ABC 095 A - Something on It

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const s = input.trim().split('');
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "o") count++;
    }
    console.log(700 + 100 * count);
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