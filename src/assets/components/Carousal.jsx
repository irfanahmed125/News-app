import React from 'react'

const Carousal = () => {


  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://www.climate.columbia.edu/sites/default/files/styles/cu_crop/public/content/Banners%20060722/22%20CCS_NewWebBanners_vf20.jpg?itok=H305wns_" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://www.thesilverlining.com/hubfs/Silver-Lining-News-Images/Silver-Lining-News-Banner_v3.jpg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://apollo-micro.com/wp-content/uploads/2020/06/news-banner-1.jpg" className="d-block w-100" alt="..."/>
      </div>
    </div>
  </div>
  )
}

export default Carousal