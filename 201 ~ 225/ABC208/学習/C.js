// TODO
//*   ABC 207 C - Many Segments

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let s = [];
    for (let i = 1; i <= n; i++) {
        let [t, l, r] = input[i].trim().split(' ').map(n => parseInt(n, 10));
        //* -----------------------
        if (t == 2) {
            r -= 0.5;
        } else if (t == 3) {
            l += 0.5;
        } else if (t == 4) {
            l += 0.5;
            r -= 0.5;
        }
        //* -----------------------
        s.push([t, l, r]);
    }
    // console.log(s);

    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // console.log(i, j);
            // console.log(s[i][1], s[j][1]);
            // console.log(s[i][2], s[j][2]);
            if (Math.max(s[i][1], s[j][1]) <= Math.min(s[i][2], s[j][2])) {
                // console.log("OK");
                ans++;
            }
            // console.log('-------------');
        }
    }
    console.log(ans);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));

