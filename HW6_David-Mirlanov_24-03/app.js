const num1 = document.querySelector('.num1')
const num2 = document.querySelector('.num2')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const result = document.querySelector('.result')
let answer = 0

plus.addEventListener('click', ()=>{
    answer = parseInt(num1.value) + parseInt(num2.value)
})
minus.addEventListener('click', ()=>{
    answer = parseInt(num1.value) - parseInt(num2.value)
})
multiply.addEventListener('click', ()=>{
    answer = parseInt(num1.value) * parseInt(num2.value)
})
divide.addEventListener('click', ()=>{
    answer = parseInt(num1.value) / parseInt(num2.value)
})
result.addEventListener('click', ()=>{
    alert(`The result is ${answer}`)
})
