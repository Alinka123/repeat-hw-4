// Напиши функцію calcAverageCalories(days), яка повертає середньодобове значення кількості калорій,
//     які спортсмен споживав протягом тижня.Функція очікує один параметр: days — масив об’єктів.
//     Кожен об’єкт описує день тижня та кількість калорій calories, спожитих спортсменом, у цей день.В
//     ізьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
//     У консоль будуть виведені результати її викликів.


function calcAverageCalories(days) {
    let calEmount = 0

    for (const day of days) {
        calEmount += day.calories 
        
        }
    if (calEmount === 0) {
        return 0
    }
    return calEmount / days.length
    
}


console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0