// TODO
//*   ABC 123 A - Five Antennas

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const a = parseInt(input[0], 10);
    const e = parseInt(input[4], 10);
    const k = parseInt(input[5], 10);

    if(e-a <= k) {
        console.log("Yay!");
    } else {
        console.log(":(");
    }

}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));