// TODO
//*   ABC 136 C - Build Stairs

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let h = input[1].split(' ').map(n => parseInt(n, 10));

    let ans = "Yes";
    if(n == 1) return console.log(ans);

    for(let i = n-1; i > 0; i--) {
        let t = h[i] - h[i-1];
        if(t >= 0) {
            continue;
        } else if(t == -1) {
            h[i-1]--;
        } else {
            return console.log("No");
        }
    }
    // console.log(h);
    console.log(ans);

}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}