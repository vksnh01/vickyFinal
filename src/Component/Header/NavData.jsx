import Home from '../Home/Home';
import Administration from '../Administration/Administration';
import Faculty1 from '../Faculty/Faculty1';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import Student from '../Student/Student';
import Login from '../Login/Login';
import Library from '../Library/Library';
import Contact from '../Contact/Contact';


const NavData =[
    {id:1,name:"Home", path:"/", element:<Home />},
    {id:2,name:"Administration",path:"/administration",element:<Administration />},
    {id:3,name:"Faculty",path:"/faculty",element:<Faculty1 />},
    {id:4,name:"Gallery",path:"/gallery",element:<Gallery/>},
    {id:5,name:"About",path:"/about",element:<About />},
    {id:6,name:"Login",path:"/login",element:<Login />},
    {id:7,name:"Library",path:"/library",element:<Library />},
    {id:8,name:"Contact",path:"/contact",element:<Contact />},
    {id:9,name:"Student",path:"/student",element:<Student />},
]



export default NavData;