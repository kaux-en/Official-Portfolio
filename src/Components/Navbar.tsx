import { Navbar, Nav, Container, NavLink } from "react-bootstrap"

function Navigation () {

    return (

        <>
            <Navbar className="navbar">
                <Container>
                    <Nav>
                        <NavLink className="navTxt" href="/">Home</NavLink>
                        <NavLink className="navTxt" href="/projects">See My Work</NavLink>
                        <NavLink className="navTxt" href="/aboutme">About</NavLink>
                        <NavLink className="navTxt" href="/contact">Work With Me</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )

}

export default Navigation