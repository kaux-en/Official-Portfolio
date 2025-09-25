import Navigation from "../Components/Navbar"
import profile from "../assets/customProfile.jpg"
import headshot from "../assets/headShot.jpg"
import { Container, Row, Col } from "react-bootstrap"


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

                <Row className="jobFocusedTxt">
                    <Col className="jobFocusedCol">
                        <p>Teamwork</p>
                    </Col>
                    <Col className="jobFocusedCol">
                        <p>Tech Stack</p>
                    </Col>
                    <Col className="jobFocusedCol">
                        <p>Design/Dev balance</p>
                    </Col>
                </Row>

                <div className="freelanceSection">
                    <h3>How I Work: </h3>
                    <p>Discover | Design | Deliver</p>
                    <p>I prioritize an in depth discovery phase for me and my clients. Guiding them to understand the services they actually need, what they may want to include, and the process that will follow so nothing is unexpected.</p>
                    <p>Designing the website you invision has a process of it's own. I will carefully but creatively give you an honest interpretation of what your website will look like</p>
                    <p>The longest stage is the actual delivery of your product.</p>
                </div>
            </Container>

        </>
    )    

}

export default About_Me