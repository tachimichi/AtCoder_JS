// TODO
//*   ABC 115 A - Christmas Eve Eve Eve

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    "use strict";
    const d = parseInt(input, 10);

    if(d == 25) {
        console.log("Christmas");
    } else if(d == 24) {
        console.log("Christmas Eve");
    } else if(d == 23) {
        console.log("Christmas Eve Eve");
    } else {
        console.log("Christmas Eve Eve Eve");
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require("fs").readFileSync("../txt/A.txt", "utf8"));
