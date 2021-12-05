// TODO
//*   ABC 222 B - Failing Grade

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let str = input.trim().split('');
    let tmp = [];
    // console.log(str);
    for (let i = 0; i < str.length; i++) {
        // 要素の末尾を取得
        let b = str.pop();
        // 取得した末尾を先頭に追加
        str.unshift(b);
        // シフトした配列を、tmpに追加
        tmp.push(str.join(''));
    }
    tmp.sort();
    console.log(tmp[0]);
    console.log(tmp[tmp.length - 1]);
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