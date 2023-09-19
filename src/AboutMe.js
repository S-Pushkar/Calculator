import logo from './logo.svg';
function AboutMe(){
    return (
        <div id="about-tag-cont">
            <h1 id="about-header">ABOUT</h1>
            <h1 id="about-tag">Made by Pushkar S using React</h1>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}

export default AboutMe;