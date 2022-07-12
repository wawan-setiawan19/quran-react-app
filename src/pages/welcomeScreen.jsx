import "assets/styles/welcome.css"
import welcomeImage from "assets/images/welcome.png"
import { Button } from "@mui/material"
import { Send } from "@mui/icons-material"


const WelcomeScreen = ({btnGetStarted}) => {
    return (
        <div className="welcome-screen">
            <h1 className="brand-title">Quran App</h1>
            <p className="brand-description">Sempatkan membaca walaupun satu ayat</p>
            <div className="banner">
                <img className="brand-image" src={welcomeImage} alt="welcome"/>
                <Button
                className="btn-get-started"
                variant="contained"
                endIcon={<Send />}
                size="large"
                onClick={ () => btnGetStarted() }
                >
                    Mulai
                </Button>
            </div>
        </div>
    )
}

export default WelcomeScreen