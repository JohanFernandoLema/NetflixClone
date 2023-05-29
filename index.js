//using selectors inside the element

//traversing the dom
//traverse ===> travel across or through
const btns = document.querySelectorAll('.question-btn')

btns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    const question = e.currentTarget.parentElement.parentElement

    question.classList.toggle('show-text')
  })
})
