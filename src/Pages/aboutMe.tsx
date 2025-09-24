import Navigation from "../Components/Navbar"
import profile from "../assets/customProfile.jpg"
import headshot from "../assets/headShot.jpg"
import { Container } from "react-bootstrap"


function About_Me () {

    return (
        <>
            <Navigation />
            <h2 className="aboutmeTitle">You found me!</h2>

            <div className="profileContainer">
                <img src={profile} alt="custom profile picture" className="customProfile"/>
                <img src={headshot} alt="headshot profile picture" className="headshot" />
            </div>

            <Container className="aboutmeTxt">
                <p>I consider myself a <strong>User Experience Engineer</strong>. Which is just a fancy way to say, I design the interface you see and bring it to life.</p>
            </Container>
        </>
    )    

}

export default About_Me