// Массив
let cargoHold = ['Топливо', 'Кислород', 'Провизия', 'Кристаллы', 'Инструменты'];

// Задание 1
cargoHold.forEach ((el) => {
    console.log(`Внимание: груз ${el} проверен`)
    if (el == 'Кристаллы') {
        console.log('«⚠️ Внимание! Обнаружен ценный груз!»')
    }
})

// Задание 2
let unloading = cargoHold.pop()
console.log(`«Разгружен последний отсек: ${unloading}`)

// Задание 3
let scienceCargo = cargoHold.slice(1, 4)
console.log(scienceCargo)
console.log(cargoHold)

// Задание 4
cargoHold.splice(1, 2)
console.log(cargoHold)

// Задание 5
cargoHold.splice(1, 0, 'Золото', 'Детектор лжи')
console.log(cargoHold)