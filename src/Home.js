import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'We Are All Networking Wrong', body: 'lorem ipsum...', author: 'Kellon', id: 1},
        {title: 'Ideas Are Cheap', body: 'lorem ipsum...', author: 'Taylor', id: 2},
        {title: 'Case Study', body: 'lorem ipsum...', author: 'Kellon', id:3}
    ])

    return (  
        <div className="home">
            <BlogList blogs={blogs} />
        </div>
    );
}
 
export default Home;