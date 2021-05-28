// TODO
//*   ABC 116 A - Right Triangle

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    "use strict";
    const a = input.trim().split(' ').map(n => parseInt(n, 10));
    a.sort((a, b) => a - b);

    console.log(a[0] * a[1] / 2);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require("fs").readFileSync("../txt/A.txt", "utf8"));
