// TODO
//*   ABC 136 C - Build Stairs

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const h = input[1].split(' ').map(n => parseInt(n, 10));

    let ans = "Yes";
    if(n == 1) return console.log(ans);
    let t = 0;
    for(let i = 0; i < n-1; i++) {
        if(a[i]-1 > a[i+1]) return console.log("No"); 
    }
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
