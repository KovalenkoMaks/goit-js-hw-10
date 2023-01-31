import { ulEl, divEl } from '../refs';
import { addCountries } from '../utils';

function markupList(countries) {
  const markup = countries
    .map(
      ({ flags, name }) =>
        `<li style=display:flex><img src="${flags.png}" alt="${flags.alt}"style="width: 100px; height: 60px;"><h1 style="margin-left: 20px;">${name.official}</h1></li>`
    )
    .join('');
  return markup;
}

function markupCountry(countries) {
  const languages = Object.values(countries[0].languages).join(', ');
  const markup = `<div style="display: flex;"><img src="${countries[0].flags.png}" alt="${countries[0].flags.alt}"style="width: 100px; height: 60px;"><h1 style="margin-left: 20px;">${countries[0].name.official}</h1></div><p style="font-weight: 600;font-size: 18px;">Capital: ${countries[0].capital}</p><p style="font-weight: 600;font-size: 18px;">Population: ${countries[0].population}</p><p style="font-weight: 600;font-size: 18px;">Languages: ${languages}`;
  return markup;
}

export { markupList, markupCountry };
