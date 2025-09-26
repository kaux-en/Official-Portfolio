import { Container, Row, Col, Button, Card } from "react-bootstrap"
import { useState } from "react"
import marvelPrev from "../assets/marvelPrev.png"
import streamSearchPrev from "../assets/streamSearchPrev.png"
import phonePrev from "../assets/phonePrev.png"
import barsOnTap from "../assets/barsOnTap.png"
import soulRamenChi from "../assets/soulRamenChi.png"
import eDiscovery from "../assets/eDiscovery.png"
import azureLogo from "../assets/azureLogo.png"
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
}

const developerProjects = [
  { title: "Marvel API", img: marvelPrev, link: "#", github: "https://github.com/kaux-en/Component-Lifecycle-Events-Forms.git" },
  { title: "StreamSearch", img: streamSearchPrev, link: "#", github: "https://github.com/gcland/StreamSearch.git" },
  { title: "Discovery Support DB", img: eDiscovery, link: "#", github: "https://github.com/kaux-en/Discovery-Support-DB.git"},
  { title: "Secure Contacts API", img: azureLogo , link: "#", github: "https://github.com/kaux-en/secure-contacts-api.git"},
]

const designerProjects = [
  { title: "Qualifly", extra: '- Concept', img: phonePrev, caseStudy: "/" },
  { title: "Bars On Tap", extra: '- Concept', img: barsOnTap, caseStudy: "https://docs.google.com/presentation/d/1LrwEMhk5egHp5h9lQVK0bDzHJ9Bc3_VmRlp11gsGfhI/edit?usp=sharing" },
  { title: "Soul Ramen Chi", extra: '- Client Work', img: soulRamenChi, caseStudy: "#"}
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

                {/* Top Images */}
                <div>
                    <Row className='g-0'>
                        <Col
                        className="projectSide designerSide"
                        onClick={() => handleClick('designer')}
                        >
                        <div className="imageContainer">
                        <h1 className="projectTitles">Designing What You See</h1>
                        <div className="overlay"></div>
                        <img src={phonePrev} alt="Designer Preview" />
                        </div>
                        </Col>

                        <Col
                        className="projectSide developerSide"
                        onClick={() => handleClick('developer')}
                        >
                        <div className="imageContainer">
                        <h1 className="projectTitles">Engineering How It Works</h1>
                        <div className="overlay"></div>
                        <img src={marvelPrev} alt="Developer Preview" />
                        </div>
                        </Col>

                    </Row>
                </div>

                <Hero />

                {/* Conditionally render projects section */}
                {selected && (
                    <Container className="fullProjects">
                    <h2 className="p-3">
                        {selected === "developer" ? "Developer Projects" : "Designer Projects"}
                    </h2>
                    <Row>
                        {projects.map((proj, i) => (
                        <Col md={6} lg={4} key={i} style={{ marginBottom: "2rem" }}>
                            <Card>
                            <Card.Img variant="top" src={proj.img} className="card-img"/>
                            <Card.Title className="pt-3">
                                {proj.title}
                                {selected === "designer" && (proj as DesignerType).extra && (
                                    <span className="extraTxt"> {(proj as DesignerType).extra}</span>
                                )}
                            </Card.Title>
                            <Card.Body className="p-3">
                                {selected === "developer" ? (
                                <div className="mt-auto d-flex justify-content-between">
                                    <Button href={(proj as DeveloperType).github} target="_blank">
                                    GitHub
                                    </Button>
                                </div>
                                ) : (
                                <div className="mt-auto">
                                    <Button href={(proj as DesignerType).caseStudy} target="_blank">
                                    View Case Study
                                    </Button>
                                </div>
                                )}
                            </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                    </Container>
            )}
    
        </div>
    )
}

export default Projects