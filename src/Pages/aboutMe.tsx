import Hero from "../Components/heroNav"
import profile from "../assets/aboutMePics/customProfile.jpg"
import headshot from "../assets/aboutMePics/headShot.jpg"
import { Container, Row, Col } from "react-bootstrap"


function About_Me () {

    return (
        <>
            <Hero />

            <div className="profileContainer">
                <img src={profile} alt="custom profile picture" className="customProfile"/>
                <img src={headshot} alt="headshot profile picture" className="headshot" />
            </div>


            <Container>

                <Row className="jobFocusedTxt">
                    <p className="quoteTop">"</p>
                    <Col className="jobFocusedCol">
                        <p>For me, teamwork is about building trust and communication. Whether managing client check-ins, aligning with cross-functional teams, or guiding user research sessions, I aim to keep everyone aligned and moving forward. My experience has shown me that successful projects come from strong relationships and shared ownership.</p>
                    </Col>
                    <Col className="aboutmeTitle">
                        <h2><strong>User Experience Engineer</strong> — simply put, I design what you see and make sure it works beautifully.</h2>
                    </Col>
                    <Col className="jobFocusedCol">
                        <p>I approach design and development as two sides of the same coin: both are about solving problems. From creating intuitive wireframes in Figma to building secure APIs in Azure Functions, I focus on designing solutions that not only look good but also perform reliably. My goal is always to craft experiences that feel seamless for users and sustainable for clients.</p>
                    </Col>
                    <p className="quoteBottom">"</p>
                </Row>

                <Row className="freelanceSection">
                    <h3>How I Work: </h3>
                    <h5><em>Discover | Design | Deliver</em></h5>
                    <div className="processPar">
                        <p>I begin every project with a thoughtful discovery phase, where I work closely with clients to uncover what they truly need, explore what they’d like to include, and outline the process ahead. This ensures clarity from the start and helps avoid surprises later on.
                        </p>
                        <p>Designing your website is a collaborative journey. I balance honesty with creativity to provide a clear, realistic interpretation of how your vision will take shape—always with your goals at the center.
                        </p>
                        <p>The delivery phase is often the most time-intensive, as it’s where ideas and planning are transformed into a polished, functional product. Throughout this stage, I keep communication open so you always feel confident in the progress being made.
                        </p>
                    </div>
                </Row>
            </Container>

        </>
    )    

}

export default About_Me