import { Container } from "react-bootstrap"
import sitting from "../assets/sitting.png"
import walking from "../assets/walking.png"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Hero: React.FC = () => {

    const checkpoints = [
        {name: "Home", position: 0, link: "/" },
        {name: "See My Work", position: 25, link: "/projects"},
        {name: "About", position: 55, link: "/aboutme"},
        {name: "Work With Me", position: 90,  link: "/contact"}
    ]

    const [index, setIndex] = useState(0)
    const [hovered, setHovered] = useState(false)
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false)

    useEffect(() => {

        setVisible(true) //set it as visible when component mounts

        // interval to toggle visibility
        const interval = setInterval(() => {
            setVisible((prev) => !prev);
        }, 4000); // every 4 seconds toggle 

        return () => clearInterval(interval) //cleanup
    }, [])

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

        <div>
            <Container className="heroLine">
                <h1 className="heroHeader">Oh Hi! I'm Kiara</h1>
                    <div className={`fade-text ${visible ? "show" : ""}`}>
                        UX Engineer
                    </div>
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
            
        </div>
    )
}

export default Hero