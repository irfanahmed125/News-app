import React, { useContext, useEffect } from 'react'
import ThemeContext from '../../context/theme/ThemeContext';

const WeatherCard = () => {
    
    const {theme} =useContext(ThemeContext);

   



  return (
    <div className="my-3">

        
        <div className={theme ?"card p-5 rounded-0 bg-dark text-light":"card p-5 rounded-0 bg-secondary"}>
          <div className='d-flex align-items-center justify-content-between'>
          <span>
          <h5>News</h5>
          <h6>Sports</h6>
          </span>
          <span>
          <img src="" alt="" />
          <p className={theme ? "text-dark" : "text-secondary"}>
            Date
          </p>
          </span>
       </div>

    </div>
  </div>

  )
}

export default WeatherCard