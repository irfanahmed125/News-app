import React, { useContext } from 'react'
import ThemeContext from '../../context/theme/ThemeContext';

const NewsCard = ({news}) => {

    const {theme} = useContext(ThemeContext);
    

  return (

    <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src={news.urlToImage} class="img-fluid rounded-start" alt="..."/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{news.title}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">{news.author}</small></p>
        </div>
      </div>
    </div>
  </div>





    )
}

export default NewsCard