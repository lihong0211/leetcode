// 输入一个数字，找到对应的字母

// 如输入1 返回 a
// 输入26返回z
// 输入27返回aa
// 输入28返回ab
// 输入53返回aaa

const genStr = num => {
    const index = (num - 1) % 26
    // const times = (num - index) / 26
    const times = Math.floor(num/26)
    return 'a'.repeat(times) + String.fromCharCode(index + 97)
}

console.log(genStr(1))
console.log(genStr(26))
console.log(genStr(27))
console.log(genStr(28))
console.log(genStr(52))
console.log(genStr(53))
console.log(genStr(54))
console.log(genStr(12034))