// TODO
//*   007 - CP Classes

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].split(' ').map(n => parseInt(n, 10));
    const q = parseInt(input[2], 10);
    // console.log(a);
    a.sort((a,b) => a-b);
    // console.log(a);
    // console.log(a.length);

    for(let i = 3; i < 3+q; i++) {
        let abs = 10e9;
        let t = parseInt(input[i], 10);
        
        let index = -1;
        let left = 0;
        let right = a.length-1;

        //* 二分探索
        while(left <= right) {
            // 中間地点
            let middle = Math.floor((left+right)/2);

            if(t == a[middle]) {
                abs = 0;
                break;
            } else if(a[middle] < t) {
                left = middle + 1;
                abs = Math.min(abs, Math.abs(a[middle] - t));
            } else {
                right = middle - 1;
                abs = Math.min(abs, Math.abs(a[middle] - t));
            }
        }
        console.log(abs);
    }


}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/007.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}