import React from 'react';
// import img1 from '../Gallery/IMG/img4.jpeg'
// import img2 from '../Gallery/IMG/pic5.jpg'
// import img3 from '../Gallery/IMG/pic6.jpg'
import './Caro.css'

const Carousel = ({ img1, img2, img3 }) => {

  return (<>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="2000">
        <img src={img1} class="d-block " className="img1" alt="..." />
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src={img2} class="d-block " className="img2" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={img3} class="d-block" className="img3" alt="..." />
      </div>
    </div>
    {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" >
      </button> */}
    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span> */}
    {/* <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button> */}
    {/* <div className="home-title">
    <h1>Welocome To VKS</h1>
  </div> */}
  </div>
  </>)

}
export default Carousel;