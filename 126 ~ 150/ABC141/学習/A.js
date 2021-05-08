// TODO
//*   ABC 141 A - Weather Prediction 

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const str = input.trim();

    if(str == "Sunny") {
        console.log("Cloudy");
    } else if(str == "Cloudy") {
        console.log("Rainy");
    } else {
        console.log("Sunny");
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));