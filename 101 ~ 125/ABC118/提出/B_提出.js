// TODO
//*   ABC 118 B - Foods Loved by Everyone

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m] = input[0].trim().split(' ').map(n => parseInt(n, 10));

    //* 配列の用意(m種類分)
    let arr = new Array(m + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        let a = input[i].trim().split(' ').map(n => parseInt(n, 10));
        for (let j = 1; j < a.length; j++) {
            //* a[j]番目にあたる食べ物の番号を、配列の番号としてカウント
            arr[a[j]]++;
        }
    }
    // console.log(arr);
    let count = 0;
    //* 全員がカウントしたものを数える
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == n) count++;
    }
    console.log(count);

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}