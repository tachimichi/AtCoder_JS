// TODO
//*   ABC 123 A - Five Antennas

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const s = input.trim();
    switch (s) {
        case "A":
            console.log("T");
            break;
        case "T":
            console.log("A");
            break;
        case "C":
            console.log("G");
            break;
        case "G":
            console.log("C");
            break;
        default:
            break;
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));