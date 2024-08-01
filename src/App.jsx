import React from 'react'
import Navbar from './assets/components/Navbar'
import Themebutton from './assets/components/Themebutton'
import Home from './pages/Home'
import NewsCard from './assets/components/NewsCard'
import { NewsProvider } from './context/news/NewsContext'


const App = () => {

  return (

    <NewsProvider>
   <Navbar/>
   <Themebutton/>
   <Home/>
    
   
 </NewsProvider> 


     )
}

export default App