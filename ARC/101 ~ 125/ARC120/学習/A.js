// TODO
//*   ARC 120 A - Max Add

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    "use strict";
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].trim().split(' ').map(n => BigInt(n));

    //* nm + na1 + (n−1)a2 + (n−2)a3 + ⋯ + 1⋅an
    let sum = 0n;
    let max = 0n;
    let li = 0n;
    for (let i = 0n; i < n; i++) {
        if (a[i] > max) {
            const diff = a[i] - max;
            max = a[i];
            //* nm
            sum += diff * i;
            li += diff;
            // console.log("diff", diff);
        }
        sum += a[i] + li;
        li += a[i];

        // console.log("max", max);
        // console.log("li", li);

        console.log(sum.toString());
        // console.log("-------------------");
    }

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}