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

const getInputData = data => data

const fetchURL = (url, mealName) => {
    fetch(url).then(response => response.json())
    .then(data => {
        console.log(data.meals)
        
        const getData = data.meals

        const postMealData = event => {
            console.log(event.target.parentElement)
            const targetHeader = event.target.parentElement.querySelector('.overlay').querySelector('h3')

            // if ()

            document.querySelector('.meal-info').style.display = 'block'
            document.querySelector('.header').innerText = targetHeader.innerText
            document.querySelector('.meal-img').src = event.target.src
            for (let i = 0; i < getData.length; i++) {
                if (getData[i].strMeal == targetHeader.innerText) {
                    document.querySelector('.category').innerText = getData[i].strCategory;
                    document.querySelector('.area').innerText = getData[i].strArea;
                    document.querySelector('.instruction').innerText = getData[i].strInstructions
                    let count = 0;
                    for (const [key, value] of Object.entries(getData[i])) {
                        if (key.includes('strIngredient') && key.length > 0) {
                            const p = document.createElement('p');
                            const list = document.querySelector('.list');
                            
                            count++
                            console.log('NEW', getData[i])

                            list.appendChild(p)
                            p.classList.add('list-items');
                            p.dataset.num = count

                            p.innerText = value
                            
                            if (p.innerText == '') p.remove()
                            
                        }
                        if (key.includes('strMeasure') ) {
                            const measures = document.querySelectorAll('.list-items')

                            measures.forEach(measure => {
                                if (key.slice(-1) == measure.dataset.num) measure.innerText += ` ${value}`
                                else if (key.slice(-2) == measure.dataset.num) measure.innerText += ` ${value}`
                            })
                        }
                    }
                }
            }
            
        }

        for (let array = 0; array < getData.length; array++) {
            if (getData[array].strMeal.includes(mealName.toLowerCase())) {
                console.log('FOUND', getData[array].strMeal)
                const div = document.createElement('div')
                const overlayDiv = document.createElement('div');
                const h3 = document.createElement('h3')
                const img = document.createElement('img')

                resultsGrid.appendChild(div)
                div.append(img, overlayDiv)
                overlayDiv.appendChild(h3)

                div.classList.add('parent-div')
                overlayDiv.classList.add('overlay')

                h3.innerText = getData[array].strMeal
                img.src = getData[array].strMealThumb

                div.addEventListener('click', postMealData)
            }
        }

    }).catch(error => {
        resultsHeader.innerText = 'There are no search results. Try again'
    })
}



mealForm.addEventListener('submit', submitMealValue)