var arr = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
var count = {}
for(var i = 0; i < arr.length; i++) {
    var tag = arr[i]
    if (count[tag] === undefined) {
        count[tag] = 1
    } else {
        count[tag]++
    }
}
console.log(count)

var sorted = Object.keys(count).sort((a, b) => count[b] - count[a])
console.log(sorted)
