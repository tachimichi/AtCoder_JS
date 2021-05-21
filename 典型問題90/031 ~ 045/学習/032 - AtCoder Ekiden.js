// TODO
//*   032 - AtCoder Ekiden

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let a = [];
    for(let i = 1; i <= n; i++) {
        let t = input[i].split(' ').map(n => parseInt(n, 10));
        a.push(t);
    }
    console.log(a);
    const m = parseInt(input[n+1], 10);
    let x = [];
    let y = [];
    for(let i = n+2; i <= n+1+m; i++) {
        let [a, b] = input[i].split(' ').map(n => parseInt(n, 10));
        x.push(a);
        y.push(b);
    }
    console.log(x);
    console.log(y);
    //* ----------------------------------
    let kenaku = [];
    for(let i = 0; i < n; i++) {
        let t = new Array(n).fill(false);
        kenaku.push(t);
    }
    console.log(kenaku);
    //* ----------------------------------

    for (let i = 0; i < m; i++) {
        kenaku[x[i]-1][y[i]-1] = true;
        kenaku[y[i]-1][x[i]-1] = true;
    }
    console.log(kenaku);
    
    const perm = permutation(kenaku, kenaku.length);
    //* ------------------------------------------------------
    let ans = (1 << 30);
    console.log(ans);
    do {
        let flag = true;
        let sum = 0;
        for(let i = 0; i < n; i++) {
            if(kenaku[i][i+1] == true) flag = false;
        }
        // console.log(kenaku);

        for(let i = 0; i < n; i++) {
            sum += a[i][i+1];
        }
        console.log(sum);

        if(flag == true) ans = Math.min(ans, sum);
        
    } while (perm);
    
    console.log(permutation(kenaku, kenaku.length));

    if(ans == (1 << 30)) ans = -1;
    console.log(ans);


}

function permutation(nums, k) {
    // console.log(`perm関数の初期nums：${nums}`);
    // console.log(`perm関数の初期k：${k}`);
    // console.log('---------------------------');
    let ans = [];
    // console.log(`初期ans：${ans}`);
    if(nums.length < k) return [];
    if(k === 1) {
        for(let i = 0; i < nums.length; i++) {
            ans[i] = [nums[i]];
        }
    } else {
        for(let i = 0; i < nums.length; i++) {
            let parts = nums.slice(0);
            // console.log('-----------------------');
            // console.log(`splice前：${parts}`);
            parts.splice(i, 1)[0];
            // console.log(`splice後：${parts}`);
            // console.log('-------------------------');
            let row = permutation(parts, k-1);
            // console.log(`row：${row}`);
            for (let j = 0; j < row.length; j++) {
                ans.push([nums[i]].concat(row[j]));
            }
        }
    }
    return ans;
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/032.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}