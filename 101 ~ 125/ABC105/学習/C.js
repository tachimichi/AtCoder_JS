// TODO
//*   ABC 105 C - Base -2 Number

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let n = parseInt(input, 10);
    console.log(n);

    let ans = "";
    while (n != 0) {
        //* nを2で割った余りを求める
        let r = n % 2;
        //* もしnがマイナス数値である場合
        if (r < 0) r += 2;

        //* 答えに追加していく
        ans += r.toString();

        //* nから余りを取り除き、-2で割る
        n = (n - r) / (-2);

        // console.log(r, n);
    }

    if (ans == "") {
        console.log(0);
    } else {
        const reversed = ans.split('').reverse().join('');
        console.log(reversed);
    }

}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
