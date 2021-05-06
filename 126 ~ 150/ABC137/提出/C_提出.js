// TODO
//*   ABC 137 C - Green Bin

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let s = [];
    for(let i = 1; i <= n; i++) {
        //* 文字列を昇順にソート
        s.push(input[i].trim().split('').sort().join(''));
    }
    // console.log(s);
    //* 配列を昇順にソート
    s.sort();
    // console.log(s);

    let count = 0;
    let counts = [];
    for(let i = 0; i < s.length-1; i++) {
        if(s[i] == s[i+1]) {
            count++;
        } else {
            //* 連続が途切れたら、pushしつつ、countを0に戻す
            counts.push(count+1);
            count = 0;
        }
    }
    //* 最後尾の文字列のカウントをpush
    counts.push(count+1);
    // console.log(counts);

    let ans = 0;
    //* 組み合わせ数はnC2
    counts.forEach(count => {
        ans += count*(count-1)/2;
    });
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
