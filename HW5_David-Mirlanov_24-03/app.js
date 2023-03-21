function find_y(lst){
    let yBooks = []
    let otherBooks = []
    for(let i = 0; i < lst.length; i++) {
        if(lst[i].includes('y')){
            yBooks.push(lst[i])
        }
        else {
            otherBooks.push(lst[i])
        }
    }
    console.log('All books', lst)
    console.log('List of books with letter y', yBooks)
    console.log('Other books', otherBooks)
}

const arr = ['check', 'great', 'why', 'you', 'hyper', 'no']
find_y(arr)

function calc_aver(...nums){
    let aver = nums.reduce((a, b) => a+=b) / nums.length
    console.log('Average of', nums, 'is', aver)
}

calc_aver(3, 4, 5, 6, 0)
