var month = Number(prompt('Введите месяц'));
var day = Number(prompt('Введите день'));
if ((21 <= day <= 31 && month === 3) || (1 <= day <= 20 && month === 4)) {
    console.log("Овен"); }
else if ((21 <= day <= 30 && month === 4) || (1 <= day <= 21 && month === 5)) {
    console.log("Телец"); }
else if ((22 <= day <= 31 && month === 5) || (1 <= day <= 21 && month === 6)) {
    console.log("Близнецы"); }
else if ((22 <= day <= 30 && month === 6) || (1 <= day <= 22 && month === 7)) {
    console.log("Рак"); }
else if ((23 <= day <= 31 && month === 7) || (1 <= day <= 21 && month === 8)) {
    console.log("Лев"); }
else if ((22 <= day <= 31 && month === 8) || (1 <= day <= 23 && month === 9)) {
    console.log("Дева"); }
else if ((24 <= day <= 30 && month === 9) || (1 <= day <= 23 && month === 10)) {
    console.log("Весы"); }
else if ((24 <= day <= 31 && month === 10) || (1 <= day <= 22 && month === 11)) {
    console.log("Скорпион"); }
else if ((23 <= day <= 30 && month === 11) || (1 <= day <= 22 && month === 12)) {
    console.log("Стрелец"); }
else if ((23 <= day <= 31 && month === 12) || (1 <= day <= 20 && month === 1)) {
    console.log("Козерог"); }
else if ((21 <= day <= 31 && month === 1) || (1 <= day <= 19 && month === 2)) {
    console.log("Водолей"); }
else if ((20 <= day <= 28 && month === 2) || (1 <= day <= 20 && month === 3)) {
    console.log("Рыбы"); }
else {
    console.log("Ошибка ввода данных\n" +
                "Допустимые значения для 'день' 1-31\n" +
                "Допустимые значения для 'месяц' 1-12"); }
