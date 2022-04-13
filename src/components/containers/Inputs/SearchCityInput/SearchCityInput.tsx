import React, { ChangeEvent } from 'react';
import SearchCityInputView from '../../../views/Inputs/SearchCityInput/SearchCityInput';

export default function SearchCityInputContainer() {
  const handleOnChangeCity = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return <SearchCityInputView handleOnChangeCity={handleOnChangeCity} />;
}
