// TODO
//*   ABC 130 C - Rectangle Cutting

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [w, h, x, y] = input.trim().split(' ').map(n => parseInt(n, 10));

    //* 前提：構築問題の典型テクとして「理論値の最大値を実はいつも達成可能」
    //* 対角線の交点をもう一点とする直線を作れば、二等分線
    //* 
    //* 1番目の答えは、面積の半分を常に答える。
    //* 2番目の答えは、対角線の交点が与えられた点であれば、どんな直線でも二等分になる
    //* 

    if(x == w/2 && y == h/2) {
        console.log(w*h/2, 1);
    } else {
        console.log(w*h/2, 0);
    }

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));