import { Container, Row, Col, Button, Card } from "react-bootstrap"
import { useState } from "react"
import marvelPrev from "../assets/ProjectPreviews/marvelPrev.png"
import streamSearchPrev from "../assets/ProjectPreviews/streamSearchPrev.png"
import phonePrev from "../assets/ProjectPreviews/dashboardQualifly.png"
import barsOnTap from "../assets/ProjectPreviews/barsOnTap.png"
import soulRamenChi from "../assets/ProjectPreviews/soulramenLaptop.png"
import eDiscovery from "../assets/ProjectPreviews/eDiscovery.png"
import azureLogo from "../assets/ProjectPreviews/azureLogo.png"
import Hero from "../Components/heroNav"


type DeveloperType = {
    title: string,
    img: string,
    link: string,
    github: string
}

type DesignerType = {
    title: string,
    extra: string
    img: string,
    caseStudy: string
    misc: string
}

const developerProjects = [
  { title: "Marvel API", img: marvelPrev, link: "#", github: "https://github.com/kaux-en/Component-Lifecycle-Events-Forms.git" },
  { title: "StreamSearch", img: streamSearchPrev, link: "#", github: "https://github.com/gcland/StreamSearch.git" },
  { title: "Discovery Support DB", img: eDiscovery, link: "#", github: "https://github.com/kaux-en/Discovery-Support-DB.git"},
  { title: "Secure Contacts API", img: azureLogo , link: "#", github: "https://github.com/kaux-en/secure-contacts-api.git"},
]

const designerProjects = [
  { title: "Qualifly", extra: '- Concept', img: phonePrev, caseStudy: "/Onboarding_Mobile_App.pdf" },
  { title: "Soul Ramen Chi", extra: '- Client Work', img: soulRamenChi, caseStudy: "/casestudy.pdf", misc: "/Copy_of_Letter_of_Recommendation.pdf" },
  { title: "Bars On Tap", extra: '- Concept', img: barsOnTap, caseStudy: "/Case_Study_Bars;OnTap-2.pdf" }
]

function Projects() {
    //tracking which header is being hovered
    const [selected, setSelected] = useState<"developer" | "designer" | null>(null)

        //argument is 'category' and category can either be 'developer' or 'designer'
    const handleClick = (category: "developer" | "designer") => {
        //toggle on/off
    setSelected(prev => (prev === category ? null : category))
  }             //new state depends on old state so 'prev' is previous state value
                // prev === category checks if the user clicked the same category that’s already selected.
                //If true → we set the state to null (deselect).
                //If false → we set the state to category (the new category is now active).

  
    const projects = selected === "developer" ? developerProjects 
                  : selected === "designer" ? designerProjects 
                  : []


        return ( 
            <div>

                <Hero />
                {/* Top Images */}
                <div>
                    <Row className='g-0'>
                        <Col
                        className="projectSide designerSide"
                        onClick={() => handleClick('designer')}
                        >
                        <div className="imageContainer">
                            <h1 className="imageTitles">Designing What You See</h1>
                                <div className="overlay"></div>
                                    <img src={phonePrev} alt="Designer Preview" />
                        </div>
                        </Col>

                        <Col
                        className="projectSide developerSide"
                        onClick={() => handleClick('developer')}
                        >
                        <div className="imageContainer">
                            <h1 className="imageTitles">Engineering How It Works</h1>
                                <div className="overlay"></div>
                                    <img src={marvelPrev} alt="Developer Preview" />
                        </div>
                        </Col>

                    </Row>
                </div>


                {/* Conditionally render projects section */}
                {selected && (
                    <Container className="fullProjects">
                    <h2 className="subjectTitles">
                        {selected === "developer" ? "Developer Projects" : "Designer Projects"}
                    </h2>

                    <Row>
                        {projects.map((proj, i) => (
                            <Col md={6} lg={4} key={i} style={{ marginBottom: "2rem" }}>
                            {selected === "designer" ? (
                                // Designer project layout
                                <div className="designer-card">
                                <img src={proj.img} alt={proj.title} className="designer-img" />
                                <div className="designer-overlay">
                                    <h5 className="designer-title"> 
                                    {proj.title}
                                    {(proj as DesignerType).extra && (
                                        <span className="extraTxt"> {(proj as DesignerType).extra}</span>
                                    )}
                                    </h5>
                                    <Button
                                    href={(proj as DesignerType).caseStudy}
                                    target="_blank"
                                    className="designer-btn"
                                    >
                                    Case Study
                                    </Button>
                                    {(proj as DesignerType).misc && (
                                        <a
                                            href={(proj as DesignerType).misc}
                                            download="Kiara_Anderson_Letter_Of_Recommendation.pdf"
                                            className="letterlink"
                                        >
                                            Soul Ramen Recommendation Letter
                                        </a>
                                    )}
                                </div>
                                </div>
                            ) : (
                                // Developer project layout (keep card)
                                <Card className="card-Border">
                                <Card.Img variant="top" src={proj.img} className="card-img"/>
                                <Card.Title className="pt-3">{proj.title}</Card.Title>
                                <Card.Body className="p-3">
                                    <div className="mt-auto d-flex justify-content-center">
                                    <Button href={(proj as DeveloperType).github} target="_blank" className="designer-btn">
                                        GitHub
                                    </Button>
                                    </div>
                                </Card.Body>
                                </Card>
                            )}
                            </Col>
                        ))}
                    </Row>

                </Container>
            )}
    
        </div>
    )
}

export default Projects


/* 
<Row sm={3} md={5}>
                                        <Col className="letterCol">
                                            <img 
                                                src="src/assets/ProjectPreviews/envelope.png" 
                                                alt="envelope" 
                                                className="envelope"
                                            />
                                            
                                        </Col>
                                    </Row>
                                    */