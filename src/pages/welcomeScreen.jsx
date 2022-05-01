import "assets/styles/welcome.css"
import welcomeImage from "assets/images/welcome.png"
const WelcomeScreen = ({btnGetStarted}) => {
    return (
        <div className="welcome-screen">
            <h1 className="brand-title">Quran App</h1>
            <p className="brand-description">Sempatkan membaca walaupun satu ayat</p>
            <div className="banner">
                <img className="brand-image" src={welcomeImage} alt="welcome"/>
                <button className="btn-get-started" onClick={() => btnGetStarted()}>Mulai</button>
            </div>
        </div>
    )
}

export default WelcomeScreen