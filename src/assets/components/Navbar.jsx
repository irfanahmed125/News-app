import React, { useContext, useState } from 'react'
import ThemeContext from '../../context/theme/ThemeContext';
import NewsContext from '../../context/news/NewsContext';
  import {fetchNews} from '../../context/news/NewsAction';
const Navbar = () => {

  const {theme} = useContext(ThemeContext);
  const {dispatch} =useContext(NewsContext);
  const [text,setText] =useState("");

   const getNews =async (topic)=>{
    const data =await fetchNews(topic);
    
    dispatch({

      type :"GETNEWS",
      payload : data,

    })
    

   }

  const handleSubmit = async (e)=>{
      getNews(text);

  }

  

  return (
    <nav className={theme ? "navbar navbar-expand-lg bg-dark":"navbar navbar-expand-lg bg-body-tertiary"}>
    <div className="container-fluid">
      <a className={theme ? "navbar-brand text-light" :"navbar-brand"}  href="#">Kal-TakNews</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className={theme ? "nav-link text-light": "nav-link active"} aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className={theme ? "nav-link text-light": "nav-link active"} aria-current="page" href="#">Sports</a>
          </li>
          <li className="nav-item">
            <a className={theme ? "nav-link text-light": "nav-link active"} aria-current="page" href="#">Politics</a>
          </li>
          <li className="nav-item">
            <a className={theme ? "nav-link text-light": "nav-link active"} aria-current="page" href="#">Technology</a>
          </li>
         
        
         
        </ul>
        <form className="d-flex" role="search" onSubmit={(e)=>handleSubmit(e)}>
          <input className="form-control me-2 rounded-0 mx-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setText(e.target.value)}/>
          <button className={theme ?"btn btn-secondary rounded-0 mx-2":"btn btn-outline-success rounded-0 mx-2"} type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar