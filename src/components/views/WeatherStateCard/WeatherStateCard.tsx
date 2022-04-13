import React from 'react';
import sun from '../../../assets/img/SunImage.png';

export default function WeatherStateCardView() {
  const weatherType = {
    sunny: { img: sun },
    rainy: { img: '' },
    cloudy: { img: '' },
  };

  return (
    <div>
      <div>
        <img src={sun} alt='' />
        <h3></h3>
      </div>

      <div>
        <p></p>
        <h3></h3>
      </div>
    </div>
  );
}
