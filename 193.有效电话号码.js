var validPhoneNo = function(strs) {
    let reg1 = /^\d{3}\-\d{3}\-\d{4}$/
    let reg2 = /^\(\d{3}\)\s\d{3}\-\d{4}$/
    return strs.filter(str => reg1.test(str) || reg2.test(str))
}

var numbers = [
    '987-232-1232',
    '123 425 2342',
    '(123) 234-2342'
]

// TODO: 一次过 哈哈
console.log(validPhoneNo(numbers))