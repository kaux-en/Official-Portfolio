import { Container, Row, Col, Button, Card } from "react-bootstrap"
import { useState } from "react"
import marvelPrev from "../assets/marvelPrev.png"
import streamSearchPrev from "../assets/streamSearchPrev.png"
import phonePrev from "../assets/phonePrev.png"
import barsOnTap from "../assets/barsOnTap.png"
import soulRamenChi from "../assets/soulRamenChi.png"
import eDiscovery from "../assets/eDiscovery.png"
import azureLogo from "../assets/azureLogo.png"


type DeveloperType = {
    title: string,
    img: string,
    link: string,
    github: string
}

type DesignerType = {
    title: string,
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
  { title: "Qualifly", img: phonePrev, caseStudy: "/" },
  { title: "Bars On Tap", img: barsOnTap, caseStudy: "https://docs.google.com/presentation/d/1LrwEMhk5egHp5h9lQVK0bDzHJ9Bc3_VmRlp11gsGfhI/edit?usp=sharing" },
  { title: "Soul Ramen Chi", img: soulRamenChi, caseStudy: "#"}
]

function Projects() {
    //tracking which header is being hovered
    const [selected, setSelected] = useState<"developer" | "designer" | null>(null)

    const handleClick = (category: "developer" | "designer") => {
    setSelected(category)
  }

  
    if (selected) {
        const projects = selected === "developer" ? developerProjects : designerProjects
        return (
        <Container className="fullProjects">
            <Button className="switchBtn" onClick={() => setSelected(null)}>
            ← Back
            </Button>
            <h2 className="p-3">{selected === "developer" ? "Developer Projects" : "Designer Projects"}</h2>
            <Row>
            {projects.map((proj, i) => (
                <Col md={6} lg={4} key={i} style={{ marginBottom: "2rem" }}>
                <Card>
                    <Card.Img variant="top" src={proj.img} className="card-img"/>
                    <Card.Title className="pt-3">{proj.title}</Card.Title>
                    <Card.Body className="p-3">
                    
                    {selected === "developer" ? (
                        // Developer buttons
                        <div className="mt-auto d-flex justify-content-between">
                       {/* <Button href={(proj as DeveloperType).link} target="_blank">
                            Take A Look
                        </Button>
                        */}
                        <Button href={(proj as DeveloperType).github} target="_blank">
                            GitHub
                        </Button>
                        </div>
                    ) : (
                        // Designer button
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
        )
    }
  

    return (

        <Container>
            <Row>
                <Col
                className="projectSide developerSide"
                onClick={() => handleClick("developer")}
                >
                <div className="imageContainer">
                <h1 className="projectTitles">The Developer</h1>
                <div className="overlay"></div>
                <img src={marvelPrev} alt="Developer Preview" />
                </div>
                </Col>

                <Col
                className="projectSide designerSide"
                onClick={() => handleClick("designer")}
                >
                <div className="imageContainer">
                <h1 className="projectTitles">The Designer</h1>
                <div className="overlay"></div>
                <img src={phonePrev} alt="Designer Preview" />
                </div>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Projects