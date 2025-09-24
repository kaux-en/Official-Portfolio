import { Container } from "react-bootstrap"
import sitting from "../assets/sitting.png"
import walking from "../assets/walking.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Hero() {

    const checkpoints = [
        {name: "Home", position: 0, link: "/" },
        {name: "Projects", position: 25, link: "/projects"},
        {name: "About Me", position: 55, link: "/aboutme"},
        {name: "Contact", position: 90,  link: "/contact"}
    ]

    const [index, setIndex] = useState(0)
    const [hovered, setHovered] = useState(false)
    const navigate = useNavigate()

    const handleHover = (i: number) => {
    setHovered(true)
    setIndex(i) // moves character to that checkpoint
    }

    const handleLeave = () => {
    setHovered(false)
    }

    const handleClick = (i: number) => {
        setIndex(i)          //move character to checkpoint
        navigate(checkpoints[i].link) // navigate to the page
    }

    return (

        <>
            <Container className="heroLine">
                <h1 className="heroHeader">Oh Hi! I'm Kiara</h1>
                <p className="heroTxt">Let's take a walk</p>

            {/* Character */}
            <img
                src={hovered ? walking : sitting }
                alt="Character"
                className={`hero-character ${hovered ? "walk" : ""}`}
                style={{ left: `${checkpoints[index].position}%` }}
                onMouseEnter={() => handleHover((index + 1) % checkpoints.length)}
                onMouseLeave={handleLeave}
            />

            <div className="checkpoints">
                {checkpoints.map((cp, i) => (
                    <button  
                        key={i} 
                        onMouseEnter={() => handleHover(i)} 
                        className="checkpoint" 
                        onClick={() => handleClick(i)}>
                        {cp.name}
                    </button>
                ))}
            </div>
                
            </Container>
            
        </>
    )
}

export default Hero