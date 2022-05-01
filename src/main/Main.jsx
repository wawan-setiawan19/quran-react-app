import HomeScreen from "pages/homeScreen";
import WelcomeScreen from "pages/welcomeScreen";
import { useState } from "react"


const Main = () => {
    const [welcomeStatus, setWelcomeStatus] = useState(true)
    
    const btnGetStarted = () => {
        setWelcomeStatus(false)
    }

    if (welcomeStatus) {
        return (
            <WelcomeScreen btnGetStarted={btnGetStarted}></WelcomeScreen>
        )
    } else {
        return (
            <HomeScreen></HomeScreen>
        )
    }

}

export default Main