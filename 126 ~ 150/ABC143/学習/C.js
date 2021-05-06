// TODO
//*   ABC 143 C - Slimes

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const s = input[1].split('');

    let count = 0;
    for(let i = 0; i < n-1; i++) {
        if(s[i] != s[i+1]) count++; 
    }
    console.log(count+1);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
