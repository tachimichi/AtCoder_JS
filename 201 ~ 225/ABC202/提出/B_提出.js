// TODO
//*   ABC 202 B - 180°

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('').reverse();
    // console.log(input);
    let ans = [];
    for(let i = 0; i < input.length; i++) {
        if(input[i] == "6") {
            ans.push("9");
            continue;
        }
        if(input[i] == "9") {
            ans.push("6");
            continue;
        }
        ans.push(input[i]);
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