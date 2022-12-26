import React from "react";
import "./Library.css";
import img1 from './library.jpg'
import img2 from './c_l.jpg'

const Library =()=>{

    return(<>
    {/* <h1>Library</h1> */}
    <div className="main-div-library">
        <div className="title-div">
            <h1>Library</h1>
        </div>
        <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio rerum non reiciendis. Aliquam voluptatum nostrum aut sit eveniet cupiditate ex tempora, iste placeat voluptatibus odio. Hic ipsa animi corporis sit reiciendis velit laboriosam porro. Fuga quos, sint modi reiciendis tenetur officiis, vitae, soluta quod eaque amet rerum quas dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptate architecto sit vitae fuga enim maiores esse inventore voluptates, eaque quae temporibus provident, ex minima, quibusdam reprehenderit. Ipsum iusto, amet, cupiditate adipisci tenetur eveniet modi explicabo perspiciatis quae dolor esse odit fugit vel mollitia magni iure qui dolore facilis eaque. Minus aliquid harum, voluptas, rem sint amet laudantium nisi ipsam incidunt repudiandae dolorem quis vero, quod iste iure quasi labore ipsa culpa id fugiat adipisci! Non natus ipsa earum. Animi sapiente hic vero. Quam maiores deleniti, voluptatem repudiandae voluptatibus inventore cupiditate. Eaque nesciunt cumque pariatur molestiae consequuntur voluptatibus odio sit minima, officia sapiente nihil rerum, laborum suscipit nam possimus atque fugit omnis quidem ratione amet. Totam corrupti ab quia, quis cupiditate sapiente veniam nobis inventore voluptatibus molestiae. Rem minima neque architecto repudiandae sint repre.</p>
            <img src={img1} alt="Library" style={{"width":"50vw"}} />
        </div>
        <div  id="CL">
            <h1>Computer Lab </h1>
        </div>
        <div className="content" >
        <img src={img2} alt="Computer Lab" style={{"width":"45vw"}} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio rerum non reiciendis. Aliquam voluptatum nostrum aut sit eveniet cupiditate ex tempora, iste placeat voluptatibus odio. Hic ipsa animi corporis sit reiciendis velit laboriosam porro. Fuga quos, sint modi reiciendis tenetur officiis, vitae, soluta quod eaque amet rerum quas dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptate architecto sit vitae fuga enim maiores esse inventore voluptates, eaque quae temporibus provident, ex minima, quibusdam reprehenderit. Ipsum iusto, amet, cupiditate adipisci tenetur eveniet modi explicabo perspiciatis quae dolor esse odit fugit vel mollitia magni iure qui dolore facilis eaque. Minus aliquid harum, voluptas, rem sint amet laudantium nisi ipsam incidunt repudiandae dolorem quis vero, quod iste iure quasi labore ipsa culpa id fugiat adipisci! Non natus ipsa earum. Animi sapiente hic vero. Quam maiores deleniti, voluptatem repudiandae voluptatibus inventore cupiditate. Eaque nesciunt cumque pariatur molestiae consequuntur voluptatibus odio sit minima, officia sapiente nihil rerum, laborum suscipit nam possimus atque fugit omnis quidem ratione amet. Totam corrupti ab quia, quis cupiditate sapiente veniam nobis inventore voluptatibus molestiae. Rem minima neque architecto repudiandae sint repre.</p>
        </div>
    </div>
    </>)
}
export default Library;