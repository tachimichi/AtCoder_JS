// TODO
//*   ABC 119 A - Still TBD

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let s = new Date(input);
    let t = new Date('2019/04/30');

    if(s <= t) {
        console.log("Heisei");
    } else {
        console.log("TBD");
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));