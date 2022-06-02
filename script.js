const mealForm = document.querySelector('form')
const inputId = document.getElementById('category')
const resultsHeader = document.querySelector('.results-header')
const resultsGrid = document.querySelector('.results-grid');

const submitMealValue = (event) => {
    event.preventDefault()

    // if ()
    resultsHeader.innerText = `Search results for '${inputId.value}':`

    getInputData(inputId.value)
    
    fetchURL(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputId.value}`, inputId.value)
    inputId.value = ''
}
// 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood' -- FILTER BY CATEGORY
// https://www.themealdb.com/api/json/v1/1/lookup.php?i=52836 -- FILTER BY ID
const getInputData = data => data

const fetchURL = (url, mealName) => {
    fetch(url).then(response => response.json())
    .then(data => {
        console.log(data.meals)
        // console.log('Find index', data.meals[0].strIngredient.includes('Chicken'))
        // console.log('LOOK FOR', data.meals[0].strIngredient.includes(mealName))
        
        // for (let i = 0; i < data.meals.length; i++) console.log('LOOK FOR', data.meals[i].strMeal.includes(mealName.toLowerCase()))
        
        const getData = data.meals

        for (let array = 0; array < getData.length; array++) {
            // if (getData[array].strMeal.split(/\s+/).includes(mealName.toLowerCase()))
            if (getData[array].strMeal.includes(mealName.toLowerCase())) {
                console.log('FOUND', getData[array].strMeal)
                const div = document.createElement('div')
                const h2 = document.createElement('h3')
                const img = document.createElement('img')

                resultsGrid.appendChild(div)
                div.append(h2, img)

                h2.innerText = getData[array].strMeal
                img.src = getData[array].strMealThumb
            }
        }
        
        
    })
}

mealForm.addEventListener('submit', submitMealValue)