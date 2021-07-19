// TODO
//*   ABC 210 B - Bouzu Mekuri

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const s = input[1].trim().split('');

    for (let i = 0; i < n; i++) {
        if (s[i] == '1') {
            if (i % 2 == 0) {
                return console.log('Takahashi');
            } else {
                return console.log('Aoki');
            }
        }
    }
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