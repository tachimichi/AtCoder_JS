// TODO
//*   ABC 096 C - Grid Repainting 2

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [h, w] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    //* 最初と最後に"."を入れて処理できるようにする
    let t = [];
    t.push(new Array(w + 2).fill("."));
    for (let i = 1; i <= h; i++) {
        const a = input[i].trim().split('');
        a.unshift(".")
        a.push(".")
        t.push(a);
    }
    t.push(new Array(w + 2).fill("."));
    // console.log(t);

    let count = 0;
    for (let i = 0; i < t.length; i++) {
        for (let j = 0; j < t[i].length; j++) {
            //* 上下左右に"#"がない場合、カウントする
            if (t[i][j] == "#" &&
                t[i][j - 1] != "#" &&
                t[i - 1][j] != "#" &&
                t[i][j + 1] != "#" &&
                t[i + 1][j] != "#") count++;
        }
    }
    //* 三項演算子
    //* 条件 ? 真に対する実行 : 偽に対する実行
    console.log(count ? "No" : "Yes");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
