import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'We Are All Networking Wrong', body: 'lorem ipsum...', author: 'Kellon', id: 1},
        {title: 'Ideas Are Cheap', body: 'lorem ipsum...', author: 'Taylor', id: 2},
        {title: 'Case Study', body: 'lorem ipsum...', author: 'Kellon', id:3}
    ])

    return (  
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;