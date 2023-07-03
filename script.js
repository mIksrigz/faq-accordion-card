window.addEventListener('load', () => {
  const accordion = document.querySelector('.accordion');
  accordion.addEventListener('click', e => {
    if(e.target.matches('.arrow')){
      console.log(e.target);
    }
    if(e.target.matches('.question')){
      console.log(e.target);
    }
  });
});