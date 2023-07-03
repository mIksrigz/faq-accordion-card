window.addEventListener('load', () => {
  document.querySelector('body').addEventListener('click', e => {
    console.log(e.target)
  });
  const accordion = document.querySelector('.accordion');
  accordion.addEventListener('click', e => {
    console.log(e.target)
    if (e.target.matches('.accordion-question')) {
      let question = e.target;
      let arrow = question.parentElement.children[1];
      let answer = question.parentElement.parentElement.children[1];
      question.classList.toggle('active');
      arrow.classList.toggle('active-arrow');
      answer.classList.toggle('hide');
    }
    if (e.target.matches('.arrow')) {
      let arrow = e.target;
      let question = arrow.parentElement.children[0];
      let answer = question.parentElement.parentElement.children[1];
      question.classList.toggle('active');
      arrow.classList.toggle('active-arrow');
      answer.classList.toggle('hide');
    }
    if (e.target.matches('.accordion-full-question')) {
      let arrow = e.target.children[1];
      let question = e.target.children[0];
      let answer = e.target.parentElement.children[1];
      question.classList.toggle('active');
      arrow.classList.toggle('active-arrow');
      answer.classList.toggle('hide');
    }
  })
})