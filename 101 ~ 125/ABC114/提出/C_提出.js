// TODO
//*   ABC 114 C - 755

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    //* 後ろに数字を追加したいため、文字列として扱う
    const N = input.trim();

    let answer = 0;
    const DFS = (N, num753) => {

        const contains7 = num753.includes('7');
        const contains5 = num753.includes('5');
        const contains3 = num753.includes('3');
        const contains = contains7 && contains5 && contains3;
        // console.log(contains7);
        // console.log(contains5);
        // console.log(contains3);
        // console.log(contains);
        // console.log(num753);
        // console.log("-----------------");


        // 753数値が完成
        //* 桁数がnと同じ場合、これ以上数字を追加できないため、returnする
        if (N.length == num753.length) {
            if (contains && parseInt(num753, 10) <= parseInt(N, 10)) {
                answer++;
            }
            return;
        }
        // 今の桁をチェック
        if (contains && parseInt(num753, 10) <= parseInt(N, 10)) {
            answer++;
        }

        //* 再帰的にループ処理を行う
        // 3を入れるパターン
        DFS(N, num753 + '3');
        // 5を入れるパターン
        DFS(N, num753 + '5');
        // 7を入れるパターン
        DFS(N, num753 + '7');
    }

    // 一桁目を作る
    DFS(N, '3');
    DFS(N, '7');
    DFS(N, '5');
    console.log(answer);
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
