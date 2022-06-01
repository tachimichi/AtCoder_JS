// TODO
//*   ABC 249 B - Perfect String

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const str = input.trim().split('');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let arrCount = new Array(alphabet.length).fill(0);
    let countABC = 0;
    let countabc = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (str[i] == alphabet[j]) {
                arrCount[j]++;
                if (j <= 25) {
                    countABC++;
                } else {
                    countabc++;
                }
            }
        }
        // console.log(arrCount);
    }
    for (let i = 0; i < arrCount.length; i++) {
        if (arrCount[i] > 1 || countABC == 0 || countabc == 0) {
            return console.log(('No'));
        }
    }
    console.log('Yes');
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