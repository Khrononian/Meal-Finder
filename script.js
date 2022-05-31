const mealForm = document.querySelector('form')
const inputId = document.getElementById('category')
const resultsHeader = document.querySelector('.results-header')

const submitMealValue = (event) => {
    
    const resultsGrid = document.querySelector('.results-grid');

    event.preventDefault()

    // if ()
    resultsHeader.innerText = `Search results for '${inputId.value}':`

    getInputData(inputId.value)
    
    fetchURL('https://www.themealdb.com/api/json/v1/1/list.php?i=list', inputId.value)
    inputId.value = ''
}

const getInputData = data => data

const fetchURL = (url, mealName) => {
    fetch(url).then(response => response.json())
    .then(data => {
        console.log(data.meals)
        console.log('Find index', data.meals[0].strIngredient.includes('Chicken'))
        console.log('LOOK FOR', data.meals[0].strIngredient.includes(mealName))
        
        const getInfo = data.meals

        for (let array = 0; array < data.meals.length; array++) {
            if (getInfo[array].strIngredient.split(/\s+/).includes(mealName)) console.log('FOUND')
        }
        
        for (let i = 1; i < getInfo.length; i++) {
            const div = document.createElement('div')
            const h2 = document.createElement('h3')
            const img = document.createElement('img')

            resultsHeader.appendChild(div)
            div.append(h2, img)
        }
    })
}

mealForm.addEventListener('submit', submitMealValue)