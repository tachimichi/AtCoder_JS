// TODO
//*   ABC 123 B - Five Dishes

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const s = input.trim().split('');
    
    let count = 0;
    let max = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] =="A" || s[i] =="T" || s[i] =="C" || s[i] =="G") {
            count++;
            max = Math.max(max, count);
        } else {
            count = 0;
        }
    }
    console.log(max);
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