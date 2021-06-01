// TODO
//*   ABC 111 A - AtCoder Beginner Contest 999

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    "use strict";
    let t = input.trim().split('');
    for (let i = 0; i < t.length; i++) {
        if (t[i] == 1) {
            t[i] = 9;
        } else if (t[i] == 9) {
            t[i] = 1;
        }
    }
    console.log(t.join(''));

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require("fs").readFileSync("../txt/A.txt", "utf8"));
