// TODO
//*   ARC 121 A - 2nd Greatest Distance

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    "use strict";
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let t = [];
    let u = [];
    for (let i = 1; i <= n; i++) {
        const a = input[i].trim().split(' ').map(n => parseInt(n, 10));
        t.push(a);
        u.push(a);
    }
    const x = t.sort((a, b) => b[0] - a[0]);
    const y = u.sort((a, b) => b[1] - a[1]);
    // console.log(x);
    // console.log(y);
    //* ---------------------------------

    const ans = [];
    const x1 = Math.abs(x[0][0] - x[x.length - 1][0]); //* x座標の最大値
    const x2 = Math.abs(x[1][0] - x[x.length - 1][0]); //* 2番目に大きい値から最小値を引いた値
    const x3 = Math.abs(x[0][0] - x[x.length - 2][0]); //* 最大値から2番目に小さい値を引いた値
    ans.push(x1);
    ans.push(x2);
    ans.push(x3);


    const y1 = Math.abs(y[0][1] - y[y.length - 1][1]); //* y座標の最大値 
    const y2 = Math.abs(y[1][1] - y[y.length - 1][1]); //* 2番目に大きい値から最小値を引いた値 
    const y3 = Math.abs(y[0][1] - y[y.length - 2][1]); //* 最大値から2番目に小さい値を引いた値 
    ans.push(y1);
    ans.push(y2);
    ans.push(y3);

    //* 同じ家の組に関する値が2つ含まれる可能性があるため、チェックする
    const check = Math.abs(x[0][1] - x[x.length - 1][1]);
    ans.sort((a, b) => b - a);
    // console.log(ans);

    if (ans[0] == x1 && ans[1] == check) {
        console.log(ans[2]);
    } else {
        console.log(ans[1]);
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require("fs").readFileSync("../txt/A.txt", "utf8"));