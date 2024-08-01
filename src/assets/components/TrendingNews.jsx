import React, { useContext } from 'react'
import ThemeContext from '../../context/theme/ThemeContext';

const TrendingNews = () => {

    const {theme} = useContext(ThemeContext);

  return (

    <div className="my-3">
    
     <marquee className={theme ? "bg-dark text-light p-2" :"bg-dark text-light p-2"}>
   
         <h5>Aaj ki Taza Khabar !!</h5>


     </marquee>

    </div>
  )
}

export default TrendingNews