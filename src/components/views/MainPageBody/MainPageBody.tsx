import React from 'react';
import SearchCityInputContainer from '../../containers/Inputs/SearchCityInput/SearchCityInput';
import WeatherStateCardContainer from '../../containers/WeatherStateCard/WeatherStateCard';

export default function MainPageBodyView() {
  return (
    <div>
      <SearchCityInputContainer />
      <WeatherStateCardContainer />
    </div>
  );
}
