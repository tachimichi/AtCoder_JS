// TODO
//*   ABC 082 B - Two Anagrams

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let a = input[0].trim().split('');
    let b = input[1].trim().split('');
    a.sort(); // 文字列ソート昇順
    b.sort().reverse(); // 文字列ソート降順
    // console.log(a.join(''));
    // console.log(b);
    if (a.join('') < b.join('')) {
        console.log('Yes');
    } else {
        console.log('No');
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