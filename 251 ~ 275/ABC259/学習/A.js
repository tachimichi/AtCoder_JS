// TODO
//*   ABC 259 A - Growth Record

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // n n歳の誕生日(now)
    // m 求めたい誕生日
    // x 0 ~ x歳までは身長伸びた
    // t n歳時の身長
    // d x歳までの間伸びた身長（年間）
    const [n, m, x, t, d] = input.trim().split(' ').map(n => parseInt(n, 10));
    // 求めたい誕生日が成長期よりも後の場合（伸びきっている）
    if (m >= x) {
        console.log(t);
    } else {
        // 身長 - (伸び期 - 求めたい誕生日) * 年間伸び量
        console.log(t - (x - m) * d);
    }


}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));