// TODO
//*   ABC 201 

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split(' ');

    input.sort((a,b) => a-b);
    let a = input[2] - input[1];
    let b = input[1] - input[0];
    if(a == b) {
        console.log("Yes");
    } else {
        console.log("No");
    }

    //* -------------------------------

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}