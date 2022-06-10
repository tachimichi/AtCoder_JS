// TODO
//*   ABC 053 B - A to Z String

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const str = input.trim().split('');
    // コピーして逆順
    // sort().reverse()は、ソートして逆順（＝降順）
    const reverseStr = str.concat().reverse();

    // console.log(str);
    // console.log(reverseStr);

    let start = 0;
    let end = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'A') {
            start = i;
            break;
        }
    }
    for (let i = 0; i < reverseStr.length; i++) {
        if (reverseStr[i] == 'Z') {
            end = reverseStr.length - i;
            break;
        }
    }
    // console.log(start, end);
    console.log(end - start);
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