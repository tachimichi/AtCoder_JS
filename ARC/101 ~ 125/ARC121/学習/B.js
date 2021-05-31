// TODO
//*   ARC 121

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    "use strict";
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let t = [];
    for(let i = 1; i <= n; i++) {
        const a = input[i].trim().split(' ').map(n => parseInt(n, 10));
        t.push(a);
    }
    let max = new Array(n).fill(0);
    for(let i = 0; i < n-1; i++) {
        max[i] = Math.max(Math.abs(t[i][0]-t[i+1][0]), Math.abs(t[i][1]-t[i+1][1]));
    }
    console.log(max);
    max.sort((a,b) => b-a);
    console.log(max[1]);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require("fs").readFileSync("../txt/A.txt", "utf8"));
