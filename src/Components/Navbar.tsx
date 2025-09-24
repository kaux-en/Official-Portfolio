import { Navbar, Nav, Container, NavLink } from "react-bootstrap"

function Navigation () {

    return (

        <>
            <Navbar className="navbar">
                <Container>
                    <Nav>
                        <NavLink className="navTxt" href="/">Home</NavLink>
                        <NavLink className="navTxt" href="/projects">Projects</NavLink>
                        <NavLink className="navTxt" href="/aboutme">About Me</NavLink>
                        <NavLink className="navTxt" href="/contact">Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )

}

export default Navigation