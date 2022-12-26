import React from "react";
import './Home.css'
import Map from './Map'
import Carousel from "./Carousel";
import { NavLink } from 'react-router-dom';
import Principal from '../Gallery/IMG/principal.jpg'
import President from '../Gallery/IMG/denis.jpg';
import Secretay from '../Gallery/IMG/pro.jpg'
import img1 from './img3.jpg'
import img2 from '../Gallery/IMG/pic5.jpg'
import img3 from '../Gallery/IMG/pic6.jpg'
import Footer from '../Footer/Footer'


const Home = () => {

  return (<>
    <Carousel img1={img1} img2={img2} img3={img3} />

    <div className="main-div">

      <div className="home-about-div card">
        <h1>About Us</h1>
        <p className="word-break">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dignissimos deleniti praesentium atque iusto excepturi. Eaque repellendus corrupti porro exercitationem? Impedit ipsa et ipsam, iure ab ex necessitatibus culpa, id suscipit laudantium molestias nisi quis aliquid corporis minus recusandae ad soluta facere. Commodi velit cum recusandae quisquam assumenda praesentium unde. Explicabo voluptates tempore officia blanditiis deserunt numquam sit excepturi! Accusantium eveniet, unde labore, atque aperiam aut dolores delectus natus, hic similique quos nemo velit libero! Aperiam aut at assumenda aliquam laboriosam explicabo commodi error? Recusandae aut, accusantium itaque ipsa fugiat natus perferendis eius distinctio culpa voluptatum, reprehenderit maxime velit atque. <span><a  href="/about">Read more...</a></span></p>
      </div>
      <div className="home-message-div card">
        <h1>Principal's Message</h1>
        <div className="grid word-break responsive">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, error? Officia dolores esse, nulla mollitia, ducimus inventore nesciunt dolorem, aliquid autem odit dignissimos labore. Repellendus quam blanditiis iste, ratione distinctio minus ut quasi, aperiam iusto commodi asperiores optio deserunt, ab saepe debitis magnam vitae. Dolorum obcaecati dignissimos tempora adipisci, reiciendis nam, maiores a aliquam quisquam ducimus et officia odit esse inventore! Perspiciatis neque sint, vel similique quasi ipsam molestiae repellat dolore ex, aspernatur sapiente voluptatum? Ab doloribus, error, amet possimus omnis quam quis blanditiis distinctio necessitatibus, molestias fugit. Nam veniam, quas numquam minima cupiditate dolorum nisi nobis vero placeat ipsa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, repellendus obcaecati sed placeat atque voluptatem. Nulla quos natus, suscipit consectetur tempore reprehenderit provident dolores soluta nobis quis iure tenetur perspiciatis numquam necessitatibus cum nemo molestias delectus sint illum in commodi harum, deleniti officiis. Ea explicabo quidem excepturi adipisci amet aut molestiae sunt, velit tempore illum reprehenderit expedita eum vitae temporibus maxime officia, libero inventore natus earum! Atque alias consequatur aliquam eius harum est distinctio, corrupti necessitatibus quam facere illo ullam provident repellat ex, quia vel voluptatibus commodi, aut inventore mollitia consequuntur expedita. Dicta repudiandae ratione officia nihil eum repellendus quos.</p>
          <img src={Principal} alt="Principal" />
        </div>
      </div>

      <div className="home-message-div card">
        <h1>Presient's Message</h1>
        <div className="grid word-break responsive">
          <img src={President} alt="Principal" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, error? Officia dolores esse, nulla mollitia, ducimus inventore nesciunt dolorem, aliquid autem odit dignissimos labore. Repellendus quam blanditiis iste, ratione distinctio minus ut quasi, aperiam iusto commodi asperiores optio deserunt, ab saepe debitis magnam vitae. Dolorum obcaecati dignissimos tempora adipisci, reiciendis nam, maiores a aliquam quisquam ducimus et officia odit esse inventore! Perspiciatis neque sint, vel similique quasi ipsam molestiae repellat dolore ex, aspernatur sapiente voluptatum? Ab doloribus, error, amet possimus omnis quam quis blanditiis distinctio necessitatibus, molestias fugit. Nam veniam, quas numquam minima cupiditate dolorum nisi nobis vero placeat ipsa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, repellendus obcaecati sed placeat atque voluptatem. Nulla quos natus, suscipit consectetur tempore reprehenderit provident dolores soluta nobis quis iure tenetur perspiciatis numquam necessitatibus cum nemo molestias delectus sint illum in commodi harum, deleniti officiis. Ea explicabo quidem excepturi adipisci amet aut molestiae sunt, velit tempore illum reprehenderit expedita eum vitae temporibus maxime officia, libero inventore natus earum! Atque alias consequatur aliquam eius harum est distinctio, corrupti necessitatibus quam facere illo ullam provident repellat ex, quia vel voluptatibus commodi, aut inventore mollitia consequuntur expedita. Dicta repudiandae ratione officia nihil eum repellendus quos.</p>
        </div>
      </div>


      <div className="home-message-div card">
        <h1>Secretary's Message</h1>
        <div className="grid word-break responsive">

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, error? Officia dolores esse, nulla mollitia, ducimus inventore nesciunt dolorem, aliquid autem odit dignissimos labore. Repellendus quam blanditiis iste, ratione distinctio minus ut quasi, aperiam iusto commodi asperiores optio deserunt, ab saepe debitis magnam vitae. Dolorum obcaecati dignissimos tempora adipisci, reiciendis nam, maiores a aliquam quisquam ducimus et officia odit esse inventore! Perspiciatis neque sint, vel similique quasi ipsam molestiae repellat dolore ex, aspernatur sapiente voluptatum? Ab doloribus, error, amet possimus omnis quam quis blanditiis distinctio necessitatibus, molestias fugit. Nam veniam, quas numquam minima cupiditate dolorum nisi nobis vero placeat ipsa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, repellendus obcaecati sed placeat atque voluptatem. Nulla quos natus, suscipit consectetur tempore reprehenderit provident dolores soluta nobis quis iure tenetur perspiciatis numquam necessitatibus cum nemo molestias delectus sint illum in commodi harum, deleniti officiis. Ea explicabo quidem excepturi adipisci amet aut molestiae sunt, velit tempore illum reprehenderit expedita eum vitae temporibus maxime officia, libero inventore natus earum! Atque alias consequatur aliquam eius harum est distinctio, corrupti necessitatibus quam facere illo ullam provident repellat ex, quia vel voluptatibus commodi, aut inventore mollitia consequuntur expedita. Dicta repudiandae ratione officia nihil eum repellendus quos.</p>
          <img src={Secretay} alt="Principal" />
        </div>
      </div>
      <Map />

    <Footer />
    </div>
  </>)
}
export default Home