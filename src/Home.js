const Home = () => {

    const buttonClick = (name) => {
        console.log('Welcome home, ' + name);
    }

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={() => buttonClick('Kellon')}>Click Me</button>
        </div>
    );
}
 
export default Home;