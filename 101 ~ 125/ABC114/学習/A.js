// TODO
//*   ABC 114 A - 753

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    "use strict";
    const n = parseInt(input, 10);
    if (n == 3 || n == 5 || n == 7) {
        console.log("YES");
    } else {
        console.log("NO");
    }

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require("fs").readFileSync("../txt/A.txt", "utf8"));
