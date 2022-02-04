// TODO
//*   ABC 058 B - ∵∴∵

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const a = input[0].trim().split('');
    const b = input[1].trim().split('');

    let ans = [];
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        ans.push(a[i]);
        ans.push(b[i]);
    }
    if (a.length > b.length) {
        ans.push(a[a.length - 1]);
    } else if (a.length < b.length) {
        ans.push(b[b.length - 1]);
    }
    console.log(ans.join(''));
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