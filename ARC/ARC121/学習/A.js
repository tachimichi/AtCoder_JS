// TODO
//*   ARC 121

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    "use strict";
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let t = [];
    let u = [];
    for(let i = 1; i <= n; i++) {
        const a = input[i].trim().split(' ').map(n => parseInt(n, 10));
        t.push(a);
        u.push(a);
    }
    let x = t.sort((a,b) => b[0] - a[0]);
    // console.log(x);
    let ans = [];
    let a = Math.abs(x[0][0] - x[x.length-1][0]);
    let a2 = Math.abs(x[0][1] - x[x.length-1][1]);
    ans.push(a);
    let b1 = Math.abs(x[1][0] - x[x.length-1][0]);
    ans.push(b1);
    let b = Math.abs(x[0][0] - x[x.length-2][0]);
    ans.push(b);
    
    let y = u.sort((a,b) => b[1] - a[1]); 
    // console.log(y);

    let c = Math.abs(y[0][1] - y[y.length-1][1]);
    ans.push(c);
    let d1 = Math.abs(y[1][1] - y[y.length-1][1]);
    ans.push(d1);
    let d = Math.abs(y[0][1] - y[y.length-2][1]);
    ans.push(d);

    ans.sort((a,b) => b-a);

    if(ans[0] == a && ans[1] == a2) {
        console.log(ans[2]);
    } else {
        console.log(ans[1]);
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require("fs").readFileSync("../txt/A.txt", "utf8"));
