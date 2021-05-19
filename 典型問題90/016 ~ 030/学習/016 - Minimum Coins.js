// TODO
//*   016 - Minimum Coins

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const [a, b, c] = input[1].trim().split(' ').map(n => parseInt(n, 10));

    let L = 9999;
    let ans = 10000;
    for(let x = 0; x <= L; x++) {
        for(let y = 0; y <= L-x; y++) {
            //* O(N^3)にならないようにしたい
            //* xとyが決まれば、zも決まる
            let z = n - (a*x + b*y);
            //* zの制約に注意する
            if(a*x + b*y + z == n && z >= 0 && z % c == 0) {
                ans = Math.min(ans, x+y+(z/c));
                // console.log(x, y, z);
            }
        }
    }
    console.log(ans);


}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/016.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}