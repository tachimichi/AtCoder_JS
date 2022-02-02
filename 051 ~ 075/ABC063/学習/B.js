// TODO
//*   ABC 063 B - Varied

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const str = input.trim().split('');
    const strMap = new Map();

    for (let i = 0; i < str.length; i++) {
        if (strMap.has(str[i])) {
            strMap.set(str[i], strMap.get(str[i]) + 1);
            return console.log('No');
        } else {
            strMap.set(str[i], 1);
        }
    }
    console.log('Yes');
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));