import vars from '../_vars';

vars.$burger.addEventListener('click', e => {
  vars.$headerBottom.classList.add('header-bottom--showed')
})

vars.$closeBtn.addEventListener('click', e => {
  vars.$headerBottom.classList.remove('header-bottom--showed')
})
