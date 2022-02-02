// TODO
//*   ABC 062 B - Picture Frame

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [h, w] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    let ans = [];
    let str = '#'.repeat(w + 2);
    ans.push(str);
    for (let i = 1; i <= h; i++) {
        ans.push('#' + input[i].trim() + '#');
    }
    ans.push(str);
    console.log(ans.join('\n'));
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