import React, { useContext } from 'react';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import ThemeContext from '../../context/theme/ThemeContext';



const Themebutton = () => {

  const {theme ,dispatch} =useContext(ThemeContext);

    const handleTheme = (e)=>{

      dispatch({

        type: "CHANGE_THEME",
        payload : true,
      });

    };


  return (
    <div className="my-3">

  <button id='theme-button' className={theme ? "bg-black text-white" :"bg-warning text-light"} onClick={(e)=>handleTheme(e)}>
   {theme ? <FaMoon /> :<FaSun/>}

  </button>


    </div>
  )
}

export default Themebutton