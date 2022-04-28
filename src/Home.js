import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('Kellon');

    const buttonClick = () => {
        setName('Taylor');
    }

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <br />
            <p>My name is { name }</p>
            <br />
            <button onClick={buttonClick} >Change Your Name!</button>
        </div>
    );
}
 
export default Home;