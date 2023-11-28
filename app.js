const showAnswersButton = document.querySelectorAll('.show_answers');
 showAnswersButton.forEach(button =>{
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling
            if (answer.style.display === 'none' || answer.style.display === ''){
                answer.style.display = 'block'
                button.textContent = 'скрыть ответ'
            }else {
                answer.style.display = 'none'
                button.textContent = 'показать ответ'
            }
        })
    })