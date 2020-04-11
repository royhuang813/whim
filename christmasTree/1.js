const tree = function (n) {
    let result = '';
    // 三角形
    for (let i = 1; i <= n; i++) {
        let row = '',
            star = '',
            needStar = 2 * i - 1;
        while (row.length < n - i) {
            row += ' ';
        }
        while (star.length < needStar) {
            star += '*';
        }
        row += star;
        while (row.length < 11) {
            row += ' ';
        }
        result += row + '\n';
    }
    // 树干
    for (let j = 1; j <= 2; j++) {
        let trunk = '';
        while (trunk.length < n - 1) {
            trunk += ' '
        }
        trunk += '*\n'
        result += trunk;
    }
    return result;
}

console.log(tree(5))