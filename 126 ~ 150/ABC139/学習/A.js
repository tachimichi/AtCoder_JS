// TODO
//*   ABC 139 A - Tenki

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const s = input[0].split('');
    const t= input[1].split('');

    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if(s[i] == t[i]) count++;
    }
    console.log(count);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));