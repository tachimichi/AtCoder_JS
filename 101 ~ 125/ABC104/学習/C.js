// TODO
//*   ABC 104 C - All Green

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [d, g] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    let p = [], c = [];
    for (let i = 1; i <= d; i++) {
        const [a, b] = input[i].trim().split(' ').map(n => parseInt(n, 10));
        p.push(a);
        c.push(b);
    }
    // console.log(p);
    // console.log(c);

    let min = 1 << 29; //* 2^29：536870912
    console.log(min);
    // let t = Math.pow(2, 29);
    // console.log(t);

    //* bit < 2^d乗まで
    for (let bit = 0; bit < (1 << d); bit++) {
        let sum = 0;
        let num = 0;

        for (let i = 0; i < d; i++) {
            //* (i & (1 << j)) = 0 というのは、i の j ビット目（2^j の位）が 0 であるための条件。
            //* その点数の問題全て、回答した場合
            if ((bit & (1 << i)) == 0) {
                //* i行目得点 = (i+1)*100 * p[i]個 + c[i]：ボーナス
                sum += p[i] * (i + 1) * 100 + c[i];
                //* 解いた問題数の記録
                num += p[i];
            }
        }
        // console.log(sum, num);

        if (sum >= g) {
            //* 合計点が目標点を超えていた場合
            min = Math.min(min, num);
        } else {
            //* 到達していない場合
            //* ボーナス点取得していないもののうち、貪欲法で高得点を取得していく

            //* 降順
            for (let i = d - 1; i >= 0; i--) {
                if ((bit & (1 << i)) == 0) {
                    //* その点数の問題全て、既に解答済み
                    continue;
                } else {
                    //* 高得点から最低得点まで
                    for (let j = 0; j < p[i]; j++) {
                        if (sum >= g) break;
                        sum += 100 * (i + 1);
                        //* 解いた問題数の記録
                        num++;
                    }
                }
            }
            min = Math.min(min, num);
        }
    }
    console.log(min);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
