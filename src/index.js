import './css/styles.css';
import { formEl, divEl, ulEl } from '../src/refs';
import { fetchCountries } from './api';
import { markupList, markupCountry } from './markup';
import { addCountries, getError } from '../src/utils';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

formEl.addEventListener(
  'input',
  debounce(e => {
    let name = e.target.value;
    if (name === '') {
      ulEl.innerHTML = '';
      return;
    }

    fetchCountries(name)
      .then(countries => {
        if (countries.length > 10) {
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
          return;
        }
        if (countries.length === 1) {
          const markup = markupCountry(countries);
          addCountries(divEl, markup, ulEl);
        }
        if (countries.length > 1) {
          const markup = markupList(countries);
          addCountries(ulEl, markup, divEl);
        }
      })
      .catch(() => {
        getError(divEl, ulEl);
      });
  }, DEBOUNCE_DELAY)
);
