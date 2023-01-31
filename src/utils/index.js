import Notiflix from 'notiflix';

function addCountries(element, markup, deletElem) {
  deletElem.innerHTML = '';
  element.innerHTML = markup;
}

function getError(divEl, ulEl) {
  divEl.innerHTML = '';
  ulEl.innerHTML = '';
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
export { addCountries, getError };
