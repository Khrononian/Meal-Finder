const mealForm = document.querySelector('form')
let inputValue = document.querySelector('input').value

const submitMealValue = (event) => {
    let resultsHeader = document.querySelector('.results-header')
    const resultsGrid = document.querySelector('.results-grid');

    event.preventDefault()

    resultsHeader.innerText = `Search results for ${inputValue}:`

    inputValue = ''
}

mealForm.addEventListener('submit', submitMealValue)