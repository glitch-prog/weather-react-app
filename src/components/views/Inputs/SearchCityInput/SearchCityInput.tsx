import React from 'react';
import { ISearchCityInput } from './SearchCityInput.interface';

export default function SearchCityInputView({
  handleOnChangeCity,
}: ISearchCityInput) {
  return <input type='text' onChange={handleOnChangeCity} />;
}
