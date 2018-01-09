// write ajax code here
const answer = document.getElementById('answer')

document.getElementById('question-form')
  .addEventListener('submit', (event) =>{
    console.log(event.target.)
    event.preventDefault()
    fetch('/magic8response')
      .then(response => response.text())
      .then(prediction => 
        answer.innerHTML = prediction
      )
  })