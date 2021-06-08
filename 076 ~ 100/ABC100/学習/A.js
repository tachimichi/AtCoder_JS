// TODO
//*   ABC 126 A - Changing a Character

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, k] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    let s = input[1].trim().split('');

    // console.log(s[k]);
    s[k-1] = s[k-1].toLowerCase();

    console.log(s.join(''));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));