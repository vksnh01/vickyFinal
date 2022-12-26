import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Header/Navbar';
import Data from './Header/NavData';
// import Footer from './Footer/Footer'
// import { MdIndeterminateCheckBox } from 'react-icons/md';

const MainComponentFile =()=>{
const [data,setData]= React.useState([]);

React.useEffect(()=>{
    setData(Data);
},[])

    return(<>
    <BrowserRouter>
    <Navbar />
 
  {
    data.map((elem,ind)=>{
        const {path,element,id}=elem;
        return(<>    
        <Routes>
        <Route key={id} exact path={path} element={element}/>
    </Routes>
    </>)
    })
  }

    </BrowserRouter> 
    {/* <Footer /> */}
    </>)
}
export default MainComponentFile;