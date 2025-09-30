import { Container } from "react-bootstrap"
import { useState, useEffect } from "react"
import Hero from "./heroNav";


const Hompage: React.FC = () => {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
    
            setVisible(true) //set it as visible when component mounts
    
            // interval to toggle visibility
            const interval = setInterval(() => {
                setVisible((prev) => !prev);
            }, 3000); // every 3 seconds toggle 
    
            return () => clearInterval(interval) //cleanup
        }, [])

    return (
        <>
        
            <Container className="homeTxt">
                <h1 className="heroHeader">Oh Hi! I'm Kiara</h1>
                    <div className={`fade-text ${visible ? "show" : ""}`}>
                        UX Engineer
                    </div>
                <p className="heroTxt">Let's take a walk</p>
            </Container>

            <Hero />
        </>
    )
};

export default Hompage;