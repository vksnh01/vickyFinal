import React from "react";
import './Header.css';
import { NavLink } from 'react-router-dom';
import Data from '../Header/NavData';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [navbar, setNavbar] = React.useState([]);
  React.useEffect(() => {
    setNavbar(Data);
  }, [])

  return (<>
    <div className="navbar">
      <div className="logo">MP Degree College</div>
      <div className={`nav ${open && "open"}`}>
        {
          navbar.map((elem, index) => {
            const { name, path, id } = elem;
            return (<>
              <NavLink key={index} className="nav-items " onClick={() => setOpen(false)} exact to={path} >{name}</NavLink>
            </>)
          })
        }
      </div>
      <div className={`nav-toggle ${open && "open"}`} onClick={() => setOpen(!open)}>
        <div className="bar">
          <span id="span1" className="span"></span>
          <span id="span2" className="span"></span>
          <span id="span3" className="span"></span>
        </div>
      </div>
    </div>

  </>)
}
export default Navbar;