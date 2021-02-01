import vars from '../_vars';

function showHeaderSelect(item, event) {
  vars.$headerSelect.forEach((i) => {
    if (i !== event.currentTarget) {
      i.classList.remove('header-bottom-select--showed');
    }
  })

  event.currentTarget.classList.toggle('header-bottom-select--showed');

}

vars.$headerSelect.forEach((item) => {
  item.addEventListener('click', function (event) {
    showHeaderSelect(item, event);
  })
})
