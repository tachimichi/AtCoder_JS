// TODO
//*   ABC 117 A - Entrance Examination

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    "use strict";
    const [a, b] = input.trim().split(' ').map(n => parseFloat(n, 10));
    console.log(a/b);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require("fs").readFileSync("../txt/A.txt", "utf8"));
