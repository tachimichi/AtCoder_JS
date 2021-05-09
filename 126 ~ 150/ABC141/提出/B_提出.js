// TODO
//*   ABC 141 B - Tap Dance

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const str = input.trim().split('');
    // console.log(str);
    //* ------------------------
    let ans = "Yes";
    for(let i = 0; i < str.length; i++) {
        if(i % 2 == 0) {
            if(str[i] == "L") return console.log("No");
        } else {
            if(str[i] == "R") return console.log("No");
        }
    }
    console.log(ans);
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