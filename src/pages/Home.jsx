import React, { useContext, useEffect } from 'react'
import Carousal from '../assets/components/Carousal'
import ThemeContext from '../context/theme/ThemeContext';
import TrendingNews from '../assets/components/TrendingNews';
import WeatherCard from '../assets/components/WeatherCard';
import NewsCard from '../assets/components/NewsCard';
import { fetchNews } from '../context/news/NewsAction';
import NewsContext from '../context/news/NewsContext';

const Home = () => {

  const {theme}= useContext(ThemeContext);
  const {dispatch,allNews} =useContext(NewsContext);

    const getNews = async()=>{

         const data = await fetchNews("cricket");
         dispatch({
          type : "GETNEWS",
          payload : data,
         
         });
    

    };


  useEffect(()=>{


         getNews();



  },[])
   
  return (


    <div className={theme ? "container-fluid bg-secondary p-5" :"container-fluid p-5"}>
    <Carousal/>
    <TrendingNews/>
    <div className='row g-3'>
    <div className="col-md-4">

        {/* <WeatherCard/> */}

     </div>

   <div className='col-md-12 row g-3'>

    {
     
     !allNews || allNews.length === 0 ? (
       <h1 className='display-5 text-center'>Loading...</h1>


     ) : (  

      allNews.map((news,index)=><NewsCard key={index} news={news}/>
      )


      )


    }
     
   </div>


    </div>
   
   
    </div>

  )
}

export default Home