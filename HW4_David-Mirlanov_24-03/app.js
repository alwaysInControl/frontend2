var arr = ['name', 'John', 'lastname', 'Black', 'age', '23']
var personObj = {}
for(var i = 0; i < arr.length; i+=2) personObj[arr[i]] = arr[i+1]
console.log(personObj)
