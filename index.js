9999999999999999 // 16
// 10000000000000000
true + 2
// 3
'21' + true
// '21true'
'21' - true
// 20
'21' - - 1
// 22
0.1 + 0.2 === 0.3
// false

3 > 2 > 1
// false
3 > 2 >= 1
// true

'B'+'a'+ +'a'+'a'
// 'BaNaNa'

'1' == 1
'1' === 1

// --------
console.assert(String(123) === '123', 'explicit convertion to string')
console.assert(123 + '' === '123', 'implicit convertion to string')

console.assert(('hello' || 123) === 'hello', '|| return always the first element if two elements are true')
console.assert(('hello' && 123) === 123, '&& return always the last element if two elements are true')
